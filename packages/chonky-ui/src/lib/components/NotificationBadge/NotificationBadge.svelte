<script lang="ts">
	import type { NotificationBadgeProps } from './types.js';
	import { cn } from '../../internal/utils.js';

	let {
		count,
		cap = 99,
		showZero = false,
		label,
		class: className,
		...restProps
	}: NotificationBadgeProps = $props();

	// Hidden at zero unless explicitly opted in.
	const hidden = $derived(count === 0 && !showZero);

	// Visible text: `${cap}+` when over cap, else the raw count.
	const displayed = $derived(count > cap ? `${cap}+` : `${count}`);

	// Default a11y label; consumer can override with `label`.
	const ariaLabel = $derived(label ?? `${displayed} unread`);
</script>

{#if !hidden}
	<span
		class={cn('notification-badge', className)}
		role="status"
		aria-label={ariaLabel}
		{...restProps}
	>
		{displayed}
	</span>
{/if}
