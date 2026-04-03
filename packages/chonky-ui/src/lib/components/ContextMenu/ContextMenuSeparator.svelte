<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface ContextMenuSeparatorProps {
    class?: string;
  }

  let {
    class: className,
    ...restProps
  }: ContextMenuSeparatorProps = $props();
</script>

<BitsContextMenu.Separator class={cn(className)} {...restProps} />
