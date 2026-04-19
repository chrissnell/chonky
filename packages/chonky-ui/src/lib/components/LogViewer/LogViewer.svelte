<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { onMount, tick } from 'svelte';
  import { cn } from '../../internal/utils.js';
  import Dot from '../Dot/Dot.svelte';

  export interface LogColumn {
    key: string;
    label?: string;
    align?: 'left' | 'right' | 'center';
    width?: string;
    class?: string;
    render?: Snippet<[value: any, entry: LogEntry]>;
  }

  export interface LogEntry {
    level?: 'info' | 'error' | 'warn' | 'debug';
    [key: string]: any;
  }

  export interface LogViewerProps extends HTMLAttributes<HTMLDivElement> {
    entries: LogEntry[];
    columns: LogColumn[];
    showHeader?: boolean;
    live?: boolean;
    height?: string;
    autoscroll?: boolean;
    /** CSS pixel width threshold below which the card layout activates. Default `'640px'`. */
    mobileBreakpoint?: string;
    /** Layout used when observed width <= `mobileBreakpoint`. `'card'` (default) stacks fields; `'scroll'` keeps the grid with horizontal overflow. */
    mobileLayout?: 'card' | 'scroll';
    /** Optional per-entry footer rendered below each grid row (desktop) or below each card body (mobile). */
    footer?: Snippet<[entry: LogEntry]>;
    class?: string;
  }

  let {
    entries,
    columns,
    showHeader = false,
    live = false,
    height = '220px',
    autoscroll = true,
    mobileBreakpoint = '640px',
    mobileLayout = 'card',
    footer,
    class: className,
    ...restProps
  }: LogViewerProps = $props();

  let rootEl: HTMLDivElement | undefined = $state();
  let bodyEl: HTMLDivElement | undefined = $state();
  let isAtBottom = $state(true);
  let observedWidth = $state<number>(Number.POSITIVE_INFINITY);
  let unreadCount = $state(0);

  // Parse CSS width values like "640px", "640", "40rem" -> pixels.
  // Supports px (default unit) and rem (multiplied by current font-size on root).
  function parseBreakpointPx(value: string): number {
    const trimmed = value.trim();
    const match = /^([0-9]*\.?[0-9]+)\s*(px|rem|em)?$/i.exec(trimmed);
    if (!match) return 640;
    const num = parseFloat(match[1]);
    const unit = (match[2] ?? 'px').toLowerCase();
    if (unit === 'px') return num;
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize || '16'
      );
      return num * (Number.isFinite(rootFontSize) ? rootFontSize : 16);
    }
    return num * 16;
  }

  const breakpointPx = $derived(parseBreakpointPx(mobileBreakpoint));
  // `card` mode below the threshold uses card layout; otherwise stay on grid.
  const isCardMode = $derived(mobileLayout === 'card' && observedWidth <= breakpointPx);
  // Tolerance grows in card mode because cards are taller than rows.
  const bottomTolerancePx = $derived(isCardMode ? 40 : 2);

  const gridTemplateColumns = $derived(
    columns.map((c) => c.width ?? '1fr').join(' ')
  );

  // Default ordering split for card mode (priority field is deferred).
  const primaryColumns = $derived(columns.slice(0, 3));
  const secondaryColumns = $derived(columns.slice(3));

  const levelClass: Record<string, string> = {
    info: 'log-ok',
    error: 'log-err',
    warn: 'log-warn',
    debug: 'log-dim'
  };

  function checkAtBottom() {
    if (!bodyEl) return;
    const wasAtBottom = isAtBottom;
    isAtBottom =
      bodyEl.scrollHeight - bodyEl.scrollTop - bodyEl.clientHeight <
      bottomTolerancePx;
    // Returning to the bottom clears the unread badge.
    if (isAtBottom && !wasAtBottom) {
      unreadCount = 0;
    }
  }

  function scrollToBottom() {
    if (bodyEl) {
      bodyEl.scrollTop = bodyEl.scrollHeight;
      isAtBottom = true;
      unreadCount = 0;
    }
  }

  // Coalesce auto-scroll bursts: ~250ms window, single rAF flush.
  const COALESCE_MS = 250;
  let pendingScroll = false;
  let lastScrollAt = 0;
  let coalesceTimer: ReturnType<typeof setTimeout> | null = null;

  function scheduleAutoScroll() {
    if (!autoscroll || !bodyEl || !isAtBottom) return;
    const now =
      typeof performance !== 'undefined' ? performance.now() : Date.now();
    const elapsed = now - lastScrollAt;

    if (elapsed >= COALESCE_MS) {
      if (pendingScroll) return;
      pendingScroll = true;
      requestAnimationFrame(() => {
        pendingScroll = false;
        if (bodyEl && isAtBottom) {
          bodyEl.scrollTop = bodyEl.scrollHeight;
          lastScrollAt =
            typeof performance !== 'undefined'
              ? performance.now()
              : Date.now();
        }
      });
    } else {
      // Within the coalesce window — schedule a single trailing flush.
      if (coalesceTimer) return;
      coalesceTimer = setTimeout(() => {
        coalesceTimer = null;
        if (bodyEl && isAtBottom) {
          requestAnimationFrame(() => {
            if (bodyEl && isAtBottom) {
              bodyEl.scrollTop = bodyEl.scrollHeight;
              lastScrollAt =
                typeof performance !== 'undefined'
                  ? performance.now()
                  : Date.now();
            }
          });
        }
      }, COALESCE_MS - elapsed);
    }
  }

  // Track the last seen entries length so we can count unread in card mode.
  // Initialized in onMount to avoid reading reactive `entries` at module init.
  let lastEntriesLen = 0;

  onMount(() => {
    if (autoscroll && bodyEl) {
      requestAnimationFrame(() => scrollToBottom());
    }

    if (typeof ResizeObserver !== 'undefined' && rootEl) {
      // Seed the initial width synchronously so the first paint already knows
      // whether we should be in card mode.
      observedWidth = rootEl.clientWidth || Number.POSITIVE_INFINITY;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // contentRect.width excludes border; clientWidth includes padding —
          // both work because the parsed breakpoint is unitless px.
          const w =
            entry.contentRect?.width ??
            (entry.target as HTMLElement).clientWidth;
          if (Number.isFinite(w)) observedWidth = w;
        }
      });
      ro.observe(rootEl);
      return () => {
        ro.disconnect();
        if (coalesceTimer) {
          clearTimeout(coalesceTimer);
          coalesceTimer = null;
        }
      };
    }

    return () => {
      if (coalesceTimer) {
        clearTimeout(coalesceTimer);
        coalesceTimer = null;
      }
    };
  });

  $effect(() => {
    const len = entries.length;
    // Detect appended entries (len grew). Shrinks (clear/replace) reset state.
    if (len > lastEntriesLen) {
      const added = len - lastEntriesLen;
      if (!isAtBottom) {
        unreadCount += added;
      }
    } else if (len < lastEntriesLen) {
      unreadCount = 0;
    }
    lastEntriesLen = len;

    if (autoscroll && isAtBottom && bodyEl) {
      tick().then(() => {
        scheduleAutoScroll();
      });
    }
  });
</script>

<div
  bind:this={rootEl}
  class={cn('log-viewer', isCardMode && 'log-viewer-card', className)}
  data-mode={isCardMode ? 'card' : 'grid'}
  {...restProps}
>
  <div class="log-toolbar">
    <Dot on={live} />
    <span>{live ? 'live' : 'paused'}</span>
    <span class="ml-auto">{entries.length} entries</span>
  </div>

  {#if isCardMode}
    <!-- Card mode: stacked per-entry blocks. -->
    <div
      class="log-body log-body-card"
      style:height
      bind:this={bodyEl}
      onscroll={checkAtBottom}
    >
      {#each entries as entry}
        <div class={cn('log-card', levelClass[entry.level ?? 'info'])}>
          {#if primaryColumns.length > 0}
            <div class="log-card-primary">
              {#each primaryColumns as col}
                <span
                  class={cn('log-card-primary-cell', col.class)}
                  style:text-align={col.align ?? 'left'}
                >
                  {#if col.render}
                    {@render col.render(entry[col.key], entry)}
                  {:else}
                    {entry[col.key] ?? ''}
                  {/if}
                </span>
              {/each}
            </div>
          {/if}
          {#each secondaryColumns as col}
            <div class={cn('log-card-row', col.class)}>
              <span class="log-card-label">{col.label ?? col.key}:</span>
              <span
                class="log-card-value"
                style:text-align={col.align ?? 'left'}
              >
                {#if col.render}
                  {@render col.render(entry[col.key], entry)}
                {:else}
                  {entry[col.key] ?? ''}
                {/if}
              </span>
            </div>
          {/each}
          {#if footer}
            <div class="log-card-footer">
              {@render footer(entry)}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <!-- Grid mode (desktop / scroll-mobile): unchanged from prior behavior, plus optional footer row. -->
    <div
      class="log-body log-grid"
      style:height
      style:grid-template-columns={gridTemplateColumns}
      style:white-space="normal"
      bind:this={bodyEl}
      onscroll={checkAtBottom}
    >
      {#if showHeader}
        {#each columns as col}
          <div
            class="log-grid-header"
            style:text-align={col.align ?? 'left'}
          >
            {col.label ?? col.key}
          </div>
        {/each}
      {/if}
      {#each entries as entry}
        {#each columns as col}
          <div
            class={cn('log-grid-cell', levelClass[entry.level ?? 'info'], col.class)}
            style:text-align={col.align ?? 'left'}
          >
            {#if col.render}
              {@render col.render(entry[col.key], entry)}
            {:else}
              {entry[col.key] ?? ''}
            {/if}
          </div>
        {/each}
        {#if footer}
          <div class={cn('log-grid-footer', levelClass[entry.level ?? 'info'])}>
            {@render footer(entry)}
          </div>
        {/if}
      {/each}
    </div>
  {/if}

  {#if !isAtBottom}
    <button
      type="button"
      class={cn('log-jump-bottom', isCardMode && 'log-jump-bottom-card')}
      onclick={scrollToBottom}
      aria-label={unreadCount > 0
        ? `Jump to bottom (${unreadCount} new)`
        : 'Jump to bottom'}
    >
      <span class="log-jump-bottom-arrow" aria-hidden="true">↓</span>
      {#if isCardMode && unreadCount > 0}
        <span class="log-jump-bottom-badge" aria-hidden="true">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      {:else if !isCardMode}
        <span class="log-jump-bottom-text">Jump to bottom</span>
      {/if}
    </button>
  {/if}
</div>
