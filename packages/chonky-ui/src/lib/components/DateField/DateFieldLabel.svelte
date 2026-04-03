<script lang="ts">
  import { DateField as BitsDateField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface DateFieldLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DateFieldLabelProps = $props();
</script>

<BitsDateField.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsDateField.Label>
