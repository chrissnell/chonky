<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CommandGroupProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CommandGroupProps = $props();
</script>

<BitsCommand.Group class={cn(className)} {...restProps}>
  {@render children()}
</BitsCommand.Group>
