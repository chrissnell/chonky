<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface DropdownMenuSeparatorProps {
    class?: string;
  }

  let {
    class: className,
    ...restProps
  }: DropdownMenuSeparatorProps = $props();
</script>

<BitsDropdownMenu.Separator class={cn(className)} {...restProps} />
