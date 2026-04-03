<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface InputProps extends HTMLInputAttributes {
    type?: 'text' | 'password' | 'number';
    error?: string;
    class?: string;
  }

  let {
    type = 'text',
    error,
    class: className,
    ...restProps
  }: InputProps = $props();
</script>

<div class="input-wrapper">
  <input {type} class={cn('input', error && 'input-error', className)} {...restProps} />
  {#if error}<span class="error">{error}</span>{/if}
</div>
