<script lang="ts">
  import { RangeCalendar as BitsRangeCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface Props {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: Props = $props();
</script>

<BitsRangeCalendar.HeadCell class={cn(className)} {...restProps}>
  {@render children()}
</BitsRangeCalendar.HeadCell>
