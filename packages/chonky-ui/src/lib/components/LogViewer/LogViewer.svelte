<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';
  import Dot from '../Dot/Dot.svelte';

  interface LogColumn {
    key: string;
    label?: string;
    align?: 'left' | 'right' | 'center';
    width?: string;
  }

  interface LogEntry {
    level: 'info' | 'error' | 'warn' | 'debug';
    [key: string]: string;
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

  const gridTemplateColumns = $derived(
    columns.map((c) => c.width ?? '1fr').join(' ')
  );

  const levelClass: Record<string, string> = {
    info: 'log-ok',
    error: 'log-err',
    warn: 'log-warn',
    debug: 'log-dim'
  };

  $effect(() => {
    // track entries length to trigger scroll
    entries.length;
    if (autoscroll && bodyEl) {
      bodyEl.scrollTop = bodyEl.scrollHeight;
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
          class={cn('log-grid-cell', levelClass[entry.level])}
          style:text-align={col.align ?? 'left'}
        >
          {entry[col.key] ?? ''}
        </div>
      {/each}
    {/each}
  </div>
</div>
