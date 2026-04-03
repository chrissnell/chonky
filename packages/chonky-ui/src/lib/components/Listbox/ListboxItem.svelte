<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ListboxItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onselect'> {
    class?: string;
    children?: Snippet;
    value: string;
    selected?: boolean;
    disabled?: boolean;
    onSelect?: (value: string) => void;
  }

  let {
    class: className,
    children,
    value,
    selected = false,
    disabled = false,
    onSelect,
    ...restProps
  }: ListboxItemProps = $props();

  function handleClick() {
    if (!disabled) onSelect?.(value);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onSelect?.(value);
    }
  }
</script>

<div
  role="option"
  class={cn('listbox-item', className)}
  aria-selected={selected}
  aria-disabled={disabled}
  tabindex={disabled ? -1 : 0}
  onclick={handleClick}
  onkeydown={handleKeydown}
  {...restProps}
>
  {@render children()}
</div>
