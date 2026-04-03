<script lang="ts">
  import { RangeCalendar as BitsRangeCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface Props {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: Props = $props();
</script>

<BitsRangeCalendar.Header class={cn(className)} {...restProps}>
  {@render children()}
</BitsRangeCalendar.Header>
