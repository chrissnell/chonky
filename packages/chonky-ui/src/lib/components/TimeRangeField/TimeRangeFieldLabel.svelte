<script lang="ts">
  import { TimeRangeField as BitsTimeRangeField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface TimeRangeFieldLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: TimeRangeFieldLabelProps = $props();
</script>

<BitsTimeRangeField.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsTimeRangeField.Label>
