<script lang="ts">
  import { getToasts } from './toast.svelte.js';
  import Toast from './Toast.svelte';
</script>

{#each getToasts() as item (item.id)}
  <Toast {item} />
{/each}
