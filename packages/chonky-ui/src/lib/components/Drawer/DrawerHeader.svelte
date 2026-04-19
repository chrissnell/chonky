<script lang="ts">
  import type { DrawerHeaderProps } from './types.js';
  import { cn } from '../../internal/utils.js';

  let { class: className, children, ...restProps }: DrawerHeaderProps = $props();
</script>

<div class={cn('drawer-header', className)} {...restProps}>
  {@render children?.()}
</div>
