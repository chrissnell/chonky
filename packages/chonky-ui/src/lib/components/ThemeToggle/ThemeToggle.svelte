<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Toggle from '../Toggle/Toggle.svelte';

  interface ThemeToggleProps extends HTMLAttributes<HTMLElement> {
    theme?: 'dark' | 'light';
    onThemeChange?: (theme: 'dark' | 'light') => void;
    class?: string;
  }

  let {
    theme = $bindable('light'),
    onThemeChange,
    class: className,
    ...restProps
  }: ThemeToggleProps = $props();

  let checked = $derived(theme === 'light');

  function handleChange(value: boolean) {
    theme = value ? 'light' : 'dark';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
    onThemeChange?.(theme);
  }

  if (typeof document !== 'undefined') {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (stored) {
      theme = stored;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  }
</script>

<Toggle
  {checked}
  onCheckedChange={handleChange}
  label={theme}
  class={className}
  {...restProps}
/>
