<script lang="ts">
  import { Label as BitsLabel } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLLabelAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface LabelProps extends HTMLLabelAttributes {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: LabelProps = $props();
</script>

<BitsLabel.Root class={cn(className)} {...restProps}>
  {@render children()}
</BitsLabel.Root>
