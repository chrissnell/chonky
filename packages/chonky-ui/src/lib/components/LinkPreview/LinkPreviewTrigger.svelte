<script lang="ts">
  import { LinkPreview as BitsLinkPreview } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface LinkPreviewTriggerProps {
    class?: string;
    href?: string;
    children?: Snippet;
  }

  let {
    class: className,
    href,
    children,
    ...restProps
  }: LinkPreviewTriggerProps = $props();
</script>

<BitsLinkPreview.Trigger class={cn(className)} {href} {...restProps}>
  {@render children()}
</BitsLinkPreview.Trigger>
