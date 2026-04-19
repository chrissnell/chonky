<script lang="ts">
  import type { DrawerFooterProps } from './types.js';
  import { cn } from '../../internal/utils.js';

  let { class: className, children, ...restProps }: DrawerFooterProps = $props();
</script>

<div class={cn('drawer-footer', className)} {...restProps}>
  {@render children?.()}
</div>
