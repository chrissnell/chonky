<script lang="ts">
  import { TimeField as BitsTimeField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface TimeFieldLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: TimeFieldLabelProps = $props();
</script>

<BitsTimeField.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsTimeField.Label>
