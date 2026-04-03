<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface MenubarTriggerProps extends HTMLButtonAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: MenubarTriggerProps = $props();
</script>

<BitsMenubar.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsMenubar.Trigger>
