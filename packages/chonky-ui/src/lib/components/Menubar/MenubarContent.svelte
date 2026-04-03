<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface MenubarContentProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: MenubarContentProps = $props();
</script>

<BitsMenubar.Portal>
  <BitsMenubar.Content class={cn(className)} {...restProps}>
    {@render children()}
  </BitsMenubar.Content>
</BitsMenubar.Portal>
