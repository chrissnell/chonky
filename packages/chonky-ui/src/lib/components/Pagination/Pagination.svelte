<script lang="ts">
  import { Pagination as BitsPagination } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    count: number;
    perPage?: number;
    page?: number;
    onPageChange?: (page: number) => void;
    siblingCount?: number;
    class?: string;
  }

  let {
    count,
    perPage = 10,
    page = $bindable(1),
    onPageChange,
    siblingCount = 1,
    class: className,
    ...restProps
  }: PaginationProps = $props();
</script>

<BitsPagination.Root
  {count}
  {perPage}
  {siblingCount}
  bind:page
  onPageChange={(p) => onPageChange?.(p)}
  class={cn(className)}
  {...restProps}
>
  {#snippet children({ pages })}
    <BitsPagination.PrevButton class="btn btn-sm">&lt;</BitsPagination.PrevButton>
    {#each pages as p (p.key)}
      {#if p.type === 'ellipsis'}
        <span class="dim">...</span>
      {:else}
        <BitsPagination.Page
          page={p}
          class={cn('btn', 'btn-sm', p.value === page && 'btn-primary')}
        >
          {p.value}
        </BitsPagination.Page>
      {/if}
    {/each}
    <BitsPagination.NextButton class="btn btn-sm">&gt;</BitsPagination.NextButton>
  {/snippet}
</BitsPagination.Root>
