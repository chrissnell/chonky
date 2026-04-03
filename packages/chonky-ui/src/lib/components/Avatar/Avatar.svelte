<script lang="ts">
  import { Avatar as BitsAvatar } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: number;
    class?: string;
  }

  let {
    src,
    alt = '',
    fallback = '?',
    size = 32,
    class: className,
    ...restProps
  }: AvatarProps = $props();
</script>

<BitsAvatar.Root
  class={cn(className)}
  style="width:{size}px;height:{size}px"
  {...restProps}
>
  <BitsAvatar.Image {src} {alt} />
  <BitsAvatar.Fallback>{fallback}</BitsAvatar.Fallback>
</BitsAvatar.Root>
