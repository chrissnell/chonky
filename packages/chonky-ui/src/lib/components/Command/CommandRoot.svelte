<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CommandRootProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CommandRootProps = $props();
</script>

<BitsCommand.Root class={cn(className)} {...restProps}>
  {@render children()}
</BitsCommand.Root>
