<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface InputProps extends HTMLInputAttributes {
    type?: 'text' | 'password' | 'number';
    value?: string;
    error?: string;
    class?: string;
  }

  let {
    type = 'text',
    value = $bindable(''),
    error,
    class: className,
    ...restProps
  }: InputProps = $props();
</script>

<div class="input-wrapper">
  <input {type} bind:value class={cn('input', error && 'input-error', className)} {...restProps} />
  {#if error}<span class="error">{error}</span>{/if}
</div>
