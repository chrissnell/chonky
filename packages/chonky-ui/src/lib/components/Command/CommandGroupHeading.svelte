<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CommandGroupHeadingProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CommandGroupHeadingProps = $props();
</script>

<BitsCommand.GroupHeading class={cn(className)} {...restProps}>
  {@render children()}
</BitsCommand.GroupHeading>
