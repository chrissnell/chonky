<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface MenubarRootProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: MenubarRootProps = $props();
</script>

<BitsMenubar.Root class={cn(className)} {...restProps}>
  {@render children()}
</BitsMenubar.Root>
