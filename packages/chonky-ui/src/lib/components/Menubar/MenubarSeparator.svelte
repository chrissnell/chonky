<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface MenubarSeparatorProps {
    class?: string;
  }

  let {
    class: className,
    ...restProps
  }: MenubarSeparatorProps = $props();
</script>

<BitsMenubar.Separator class={cn(className)} {...restProps} />
