<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CommandListProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CommandListProps = $props();
</script>

<BitsCommand.List class={cn(className)} {...restProps}>
  {@render children()}
</BitsCommand.List>
