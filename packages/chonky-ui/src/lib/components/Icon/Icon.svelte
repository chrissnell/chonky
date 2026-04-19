<script lang="ts" module>
  import type { IconSize } from './types.js';

  const SIZE_TOKENS = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  } as const;

  function resolveSize(size: IconSize): number {
    return typeof size === 'number' ? size : SIZE_TOKENS[size];
  }
</script>

<script lang="ts">
  import type { IconProps } from './types.js';
  import { icons } from './icons.js';
  import { cn } from '../../internal/utils.js';

  let {
    name,
    icon,
    size = 'sm',
    strokeWidth = 1.5,
    label,
    class: className,
    ...restProps
  }: IconProps = $props();

  const Resolved = $derived(icon ?? (name ? icons[name] : undefined));
  const px = $derived(resolveSize(size));
  // Lucide's IconProps uses `string | undefined` for SVG attrs, while
  // Svelte's SVGAttributes allows `string | null`. Widening `restProps` here
  // via the `any` escape hatch keeps the public API typed without triggering
  // a "union type too complex" blowup when spreading into the icon.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rest = $derived(restProps as Record<string, any>);

  // Dev-only: warn when the caller forgot to specify which icon to render.
  $effect(() => {
    if (!Resolved && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        '[chonky-ui] <Icon />: neither `name` nor `icon` prop provided; rendering nothing.'
      );
    }
  });
</script>

{#if Resolved}
  {#if label}
    <Resolved
      size={px}
      {strokeWidth}
      color="currentColor"
      class={cn('chonky-icon', className)}
      role="img"
      aria-label={label}
      {...rest}
    />
  {:else}
    <Resolved
      size={px}
      {strokeWidth}
      color="currentColor"
      class={cn('chonky-icon', className)}
      aria-hidden="true"
      {...rest}
    />
  {/if}
{/if}
