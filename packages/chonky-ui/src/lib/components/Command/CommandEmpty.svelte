<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CommandEmptyProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CommandEmptyProps = $props();
</script>

<BitsCommand.Empty class={cn(className)} {...restProps}>
  {@render children()}
</BitsCommand.Empty>
