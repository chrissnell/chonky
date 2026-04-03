<script lang="ts">
  import { LinkPreview as BitsLinkPreview } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface LinkPreviewRootProps {
    openDelay?: number;
    closeDelay?: number;
    children?: Snippet;
  }

  let {
    openDelay = 500,
    closeDelay = 300,
    children,
    ...restProps
  }: LinkPreviewRootProps = $props();
</script>

<BitsLinkPreview.Root {openDelay} {closeDelay} {...restProps}>
  {@render children()}
</BitsLinkPreview.Root>
