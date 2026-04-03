<script lang="ts">
	import 'chonky-ui/css';
	import { ThemeToggle } from 'chonky-ui';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let sidebarOpen = $state(false);

	const nav = [
		{
			label: 'Core',
			items: [
				['Button', '/components/button'],
				['Badge', '/components/badge'],
				['Box', '/components/box'],
				['BoxHeader', '/components/box-header'],
				['Table', '/components/table'],
				['Separator', '/components/separator'],
				['Label', '/components/label'],
				['Spinner', '/components/spinner'],
				['Dot', '/components/dot'],
				['StatusBar', '/components/status-bar'],
				['EmptyState', '/components/empty-state'],
				['ApplyBanner', '/components/apply-banner'],
				['Avatar', '/components/avatar'],
				['AspectRatio', '/components/aspect-ratio']
			]
		},
		{
			label: 'Navigation',
			items: [
				['Tabs', '/components/tabs'],
				['Breadcrumb', '/components/breadcrumb'],
				['Pagination', '/components/pagination'],
				['Accordion', '/components/accordion'],
				['Collapsible', '/components/collapsible'],
				['Toolbar', '/components/toolbar'],
				['ScrollArea', '/components/scroll-area'],
				['NavigationMenu', '/components/navigation-menu'],
				['Menubar', '/components/menubar']
			]
		},
		{
			label: 'Overlay',
			items: [
				['Modal', '/components/modal'],
				['AlertDialog', '/components/alert-dialog'],
				['Tooltip', '/components/tooltip'],
				['Popover', '/components/popover'],
				['DropdownMenu', '/components/dropdown-menu'],
				['ContextMenu', '/components/context-menu'],
				['Command', '/components/command'],
				['LinkPreview', '/components/link-preview'],
				['Combobox', '/components/combobox'],
				['Listbox', '/components/listbox']
			]
		},
		{
			label: 'Form',
			items: [
				['Input', '/components/input'],
				['Select', '/components/select'],
				['Toggle', '/components/toggle'],
				['Checkbox', '/components/checkbox'],
				['Radio', '/components/radio'],
				['Slider', '/components/slider'],
				['Progress', '/components/progress'],
				['Meter', '/components/meter'],
				['PinInput', '/components/pin-input'],
				['ToggleButton', '/components/toggle-button'],
				['ToggleGroup', '/components/toggle-group'],
				['RatingGroup', '/components/rating-group'],
				['ThemeToggle', '/components/theme-toggle']
			]
		},
		{
			label: 'Date/Time',
			items: [
				['Calendar', '/components/calendar'],
				['RangeCalendar', '/components/range-calendar'],
				['DateField', '/components/date-field'],
				['DatePicker', '/components/date-picker'],
				['DateRangeField', '/components/date-range-field'],
				['DateRangePicker', '/components/date-range-picker'],
				['TimeField', '/components/time-field'],
				['TimeRangeField', '/components/time-range-field']
			]
		},
		{
			label: 'Custom',
			items: [
				['LogViewer', '/components/log-viewer'],
				['Toast', '/components/toast']
			]
		}
	];
</script>

<div class="docs-layout">
	<button class="docs-menu-toggle" onclick={() => (sidebarOpen = !sidebarOpen)}>
		{sidebarOpen ? '✕' : '☰'}
	</button>

	<nav class="docs-sidebar" class:open={sidebarOpen}>
		<div class="docs-sidebar-header">
			<a href="/" class="docs-logo">chonky-ui</a>
			<ThemeToggle />
		</div>

		{#each nav as group}
			<h3 class="docs-nav-group">{group.label}</h3>
			<ul class="docs-nav-list">
				{#each group.items as [label, href]}
					<li>
						<a {href} class="docs-nav-link" onclick={() => (sidebarOpen = false)}>{label}</a>
					</li>
				{/each}
			</ul>
		{/each}
	</nav>

	<main class="docs-main">
		{@render children()}
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		background: var(--color-bg);
		color: var(--color-text);
		font-family: var(--font-mono);
	}

	:global(a) {
		color: var(--color-primary);
		text-decoration: none;
	}
	:global(a:hover) {
		color: var(--color-text);
	}

	:global(h1) {
		font-size: var(--text-2xl);
		margin: 0 0 1rem;
	}
	:global(h2) {
		font-size: var(--text-lg);
		margin: 1.5rem 0 0.75rem;
		color: var(--color-text-muted);
	}
	:global(h3) {
		font-size: var(--text-base);
		margin: 1rem 0 0.5rem;
	}
	:global(p) {
		font-size: var(--text-sm);
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	/* props table */
	:global(.props-table) {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--text-sm);
		margin: 0.5rem 0 1.5rem;
	}
	:global(.props-table th) {
		text-align: left;
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-dim);
		font-weight: 400;
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	:global(.props-table td) {
		padding: 0.4rem 0.75rem;
		border-bottom: 1px dotted var(--color-border);
		vertical-align: top;
	}
	:global(.props-table code) {
		font-size: var(--text-xs);
		color: var(--color-primary);
	}

	/* code blocks */
	:global(pre) {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1rem;
		overflow-x: auto;
		font-size: var(--text-xs);
		line-height: 1.5;
		margin: 0.5rem 0 1.5rem;
	}
	:global(pre code) {
		color: var(--color-text);
	}

	/* example box */
	:global(.example) {
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		margin: 0.5rem 0 1.5rem;
		background: var(--color-surface);
	}

	.docs-layout {
		display: flex;
		min-height: 100vh;
	}

	.docs-menu-toggle {
		display: none;
		position: fixed;
		top: 0.75rem;
		left: 0.75rem;
		z-index: 100;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		color: var(--color-text);
		font-family: var(--font-mono);
		font-size: var(--text-base);
		padding: 0.25rem 0.5rem;
		cursor: pointer;
	}

	.docs-sidebar {
		width: 220px;
		flex-shrink: 0;
		border-right: 1px solid var(--color-border);
		padding: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		overflow-y: auto;
		background: var(--color-bg);
		z-index: 50;
	}

	.docs-sidebar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--color-border);
	}

	.docs-logo {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--color-primary);
	}

	.docs-nav-group {
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-dim);
		margin: 1rem 0 0.25rem;
		font-weight: 400;
	}

	.docs-nav-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.docs-nav-link {
		display: block;
		padding: 0.2rem 0.5rem;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		border-radius: var(--radius);
		transition: color var(--transition), background var(--transition);
	}
	.docs-nav-link:hover {
		color: var(--color-text);
		background: var(--color-surface);
		opacity: 1;
	}

	.docs-main {
		flex: 1;
		margin-left: 220px;
		padding: 2rem 3rem;
		max-width: 800px;
	}

	@media (max-width: 768px) {
		.docs-menu-toggle {
			display: block;
		}
		.docs-sidebar {
			transform: translateX(-100%);
			transition: transform 200ms ease;
		}
		.docs-sidebar.open {
			transform: translateX(0);
		}
		.docs-main {
			margin-left: 0;
			padding: 3rem 1rem 2rem;
		}
	}
</style>
