<script lang="ts">
  import { DateRangeField as BitsDateRangeField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DateRangeFieldLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DateRangeFieldLabelProps = $props();
</script>

<BitsDateRangeField.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsDateRangeField.Label>
