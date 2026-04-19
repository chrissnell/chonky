<script lang="ts">
  import type { DrawerBodyProps } from './types.js';
  import { cn } from '../../internal/utils.js';

  let { class: className, children, ...restProps }: DrawerBodyProps = $props();
</script>

<div class={cn('drawer-body', className)} {...restProps}>
  {@render children?.()}
</div>
