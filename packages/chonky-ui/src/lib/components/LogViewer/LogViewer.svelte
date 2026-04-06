<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
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
    class?: string;
  }

  let {
    entries,
    columns,
    showHeader = false,
    live = false,
    height = '220px',
    autoscroll = true,
    class: className,
    ...restProps
  }: LogViewerProps = $props();

  let bodyEl: HTMLDivElement | undefined = $state();
  let isAtBottom = $state(true);

  const gridTemplateColumns = $derived(
    columns.map((c) => c.width ?? '1fr').join(' ')
  );

  const levelClass: Record<string, string> = {
    info: 'log-ok',
    error: 'log-err',
    warn: 'log-warn',
    debug: 'log-dim'
  };

  function checkAtBottom() {
    if (!bodyEl) return;
    // 2px tolerance for fractional pixels
    isAtBottom =
      bodyEl.scrollHeight - bodyEl.scrollTop - bodyEl.clientHeight < 2;
  }

  function scrollToBottom() {
    if (bodyEl) {
      bodyEl.scrollTop = bodyEl.scrollHeight;
      isAtBottom = true;
    }
  }

  $effect(() => {
    // Track the full array reference so autoscroll fires when entries are
    // replaced with a same-length array (e.g. polling with a fixed limit)
    void entries;
    if (autoscroll && isAtBottom && bodyEl) {
      // Defer to next microtask so the DOM has rendered the new entries
      requestAnimationFrame(() => {
        if (bodyEl) bodyEl.scrollTop = bodyEl.scrollHeight;
      });
    }
  });
</script>

<div class={cn('log-viewer', className)} {...restProps}>
  <div class="log-toolbar">
    <Dot on={live} />
    <span>{live ? 'live' : 'paused'}</span>
    <span class="ml-auto">{entries.length} entries</span>
  </div>
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
    {#key entries}
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
      {/each}
    {/key}
  </div>
  {#if !isAtBottom}
    <button class="log-jump-bottom" onclick={scrollToBottom}>
      ↓ Jump to bottom
    </button>
  {/if}
</div>
