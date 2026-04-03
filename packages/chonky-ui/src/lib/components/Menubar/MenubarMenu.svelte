<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface MenubarMenuProps {
    value?: string;
    onOpenChange?: (open: boolean) => void;
    children?: Snippet;
  }

  let { children, ...restProps }: MenubarMenuProps = $props();
</script>

<BitsMenubar.Menu {...restProps}>
  {@render children()}
</BitsMenubar.Menu>
