<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CommandItemProps {
    class?: string;
    children?: Snippet;
    value?: string;
    onSelect?: () => void;
    disabled?: boolean;
  }

  let {
    class: className,
    children,
    value,
    onSelect,
    disabled,
    ...restProps
  }: CommandItemProps = $props();
</script>

<BitsCommand.Item class={cn(className)} {value} {onSelect} {disabled} {...restProps}>
  {@render children()}
</BitsCommand.Item>
