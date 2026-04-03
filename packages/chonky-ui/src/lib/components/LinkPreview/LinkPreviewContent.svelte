<script lang="ts">
  import { LinkPreview as BitsLinkPreview } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface LinkPreviewContentProps {
    class?: string;
    children?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    side = 'bottom',
    sideOffset = 4,
    ...restProps
  }: LinkPreviewContentProps = $props();
</script>

<BitsLinkPreview.Portal>
  <BitsLinkPreview.Content class={cn(className)} {side} {sideOffset} {...restProps}>
    {@render children()}
  </BitsLinkPreview.Content>
</BitsLinkPreview.Portal>
