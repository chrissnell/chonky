<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { CalendarDate, Time } from '@internationalized/date';

	let mounted = $state(false);
	onMount(() => { mounted = true; });
	import {
		Button, Badge, Box, BoxHeader, Table, Separator, Label, Input, Spinner, Dot,
		StatusBar, EmptyState, ApplyBanner, Avatar, AspectRatio,
		Tabs, Breadcrumb, Pagination, Accordion, Collapsible, Toolbar, ScrollArea,
		NavigationMenu, Menubar,
		Modal, AlertDialog, Tooltip, Popover, DropdownMenu, ContextMenu, Command,
		LinkPreview, Combobox, Listbox,
		Select, Toggle, Checkbox, Radio, RadioGroup, Slider, Progress, Meter,
		PinInput, ToggleButton, ToggleGroup, RatingGroup, ThemeToggle,
		Calendar, RangeCalendar, DateField, DatePicker, DateRangeField,
		DateRangePicker, TimeField, TimeRangeField,
		LogViewer, Toaster, toast
	} from '@chrissnell/chonky-ui';

	// state
	let dotOn = $state(false);
	let applyCount = $state(3);
	let paginationPage = $state(1);
	let modalOpen = $state(false);
	let dropdownOpen = $state(false);
	let commandOpen = $state(false);
	let comboboxOpen = $state(false);
	let comboboxValue = $state('');
	let popoverOpen = $state(false);
	let inputValue = $state('');
	let selectValue = $state('');
	let toggleChecked = $state(false);
	let checkboxChecked: boolean | 'indeterminate' = $state(false);
	let radioValue = $state('');
	let sliderValue = $state([50]);
	let progressValue = $state(30);
	let meterValue = $state(50);
	let toggleBtnPressed = $state(false);
	let toggleGroupValue = $state('center');
	let ratingValue = $state(0);
	let themeValue: 'dark' | 'light' = $state('light');
	let pinValue = $state('');
	let listboxSelected = $state('opt-1');
	let dateFieldValue: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
	let datePickerValue: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
	let calendarValue: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
	let rangeCalValue = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
	let dateRangeFieldValue = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
	let dateRangePickerValue = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
	let timeFieldValue = $state(new Time(14, 30));
	let timeRangeFieldValue = $state({ start: new Time(9, 0), end: new Time(17, 0) });

	const selectOptions = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
	const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
	const listboxItems = [
		{ value: 'opt-1', label: 'Option One' },
		{ value: 'opt-2', label: 'Option Two' },
		{ value: 'opt-3', label: 'Option Three' },
		{ value: 'opt-4', label: 'Disabled Option', disabled: true },
	];
	const logColumns = [
		{ key: 'time', label: 'Time', width: '80px' },
		{ key: 'level', label: 'Level', width: '50px' },
		{ key: 'message', label: 'Message', width: '1fr' }
	];
	const logEntries = [
		{ level: 'info' as const, time: '10:00', message: 'Server started on port 3000' },
		{ level: 'info' as const, time: '10:01', message: 'Database connected' },
		{ level: 'warn' as const, time: '10:02', message: 'Cache miss rate above threshold' },
		{ level: 'error' as const, time: '10:03', message: 'Failed to connect to Redis' },
		{ level: 'debug' as const, time: '10:04', message: 'Retrying connection...' },
		{ level: 'info' as const, time: '10:05', message: 'Redis reconnected' }
	];
</script>

<h1>all components</h1>
<p>Every chonky-ui component on a single page.</p>

{#if mounted}
<!-- ===== DESIGN TOKENS ===== -->
<h2 class="overview-group">Design Tokens</h2>

<section class="overview-section" id="colors">
	<h3>Colors</h3>
	<div class="example">
		<div class="swatch-grid">
			<div class="swatch" style="background: var(--color-bg);"><span class="swatch-label">bg</span></div>
			<div class="swatch" style="background: var(--color-surface);"><span class="swatch-label">surface</span></div>
			<div class="swatch" style="background: var(--color-surface-raised);"><span class="swatch-label">raised</span></div>
			<div class="swatch" style="background: var(--color-primary);"><span class="swatch-label" style="color: var(--color-primary-fg);">primary</span></div>
			<div class="swatch" style="background: var(--color-accent);"><span class="swatch-label" style="color: var(--color-success-fg);">accent</span></div>
			<div class="swatch" style="background: var(--color-danger);"><span class="swatch-label" style="color: var(--color-danger-fg);">danger</span></div>
			<div class="swatch" style="background: var(--color-warning);"><span class="swatch-label" style="color: var(--color-warning-fg);">warning</span></div>
			<div class="swatch" style="background: var(--color-info);"><span class="swatch-label" style="color: var(--color-info-fg);">info</span></div>
		</div>
	</div>
</section>

<section class="overview-section" id="typography">
	<h3>Typography</h3>
	<div class="example">
		<p style="font-size: var(--text-2xl); font-weight: 700; margin: 0 0 0.25rem;">heading 2xl (1.4rem)</p>
		<p style="font-size: var(--text-xl); font-weight: 700; margin: 0 0 0.25rem;">heading xl (1.1rem)</p>
		<p style="font-size: var(--text-lg); font-weight: 700; margin: 0 0 0.25rem;">heading lg (1rem)</p>
		<p style="font-size: var(--text-base); margin: 0 0 0.25rem;">body base (0.9rem)</p>
		<p style="font-size: var(--text-sm); color: var(--color-text-muted); margin: 0 0 0.25rem;">body small (0.8rem)</p>
		<p style="font-size: var(--text-xs); color: var(--color-text-dim); margin: 0 0 0.25rem;">caption (0.72rem)</p>
		<p style="font-size: var(--text-sm); margin: 0;">all Inconsolata &mdash; monospace everywhere</p>
	</div>
</section>

<!-- ===== CORE ===== -->
<h2 class="overview-group">Core</h2>

<section class="overview-section" id="button">
	<h3><a href="{base}/components/button/">Button</a></h3>
	<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
		<Button>default</Button>
		<Button variant="primary">primary</Button>
		<Button variant="accent">accent</Button>
		<Button variant="danger">danger</Button>
		<Button variant="ghost">ghost</Button>
		<Button size="sm">small</Button>
		<Button size="lg">large</Button>
		<Button disabled>disabled</Button>
	</div>
</section>

<section class="overview-section" id="badge">
	<h3><a href="{base}/components/badge/">Badge</a></h3>
	<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
		<Badge>default</Badge>
		<Badge variant="success">success</Badge>
		<Badge variant="warning">warning</Badge>
		<Badge variant="danger">danger</Badge>
		<Badge variant="info">info</Badge>
	</div>
</section>

<section class="overview-section" id="box">
	<h3><a href="{base}/components/box/">Box</a></h3>
	<div class="example">
		<Box>
			<div style="padding: 0.75rem; font-size: var(--text-sm);">Content inside a box</div>
		</Box>
	</div>
</section>

<section class="overview-section" id="box-header">
	<h3><a href="{base}/components/box-header/">BoxHeader</a></h3>
	<div class="example">
		<Box>
			<BoxHeader>section title</BoxHeader>
			<div style="padding: 0.75rem; font-size: var(--text-sm);">Content below the header</div>
		</Box>
	</div>
</section>

<section class="overview-section" id="table">
	<h3><a href="{base}/components/table/">Table</a></h3>
	<div class="example">
		<Table>
			<thead><tr><th>Name</th><th>Status</th><th>Role</th></tr></thead>
			<tbody>
				<tr><td>alice</td><td>active</td><td>admin</td></tr>
				<tr><td>bob</td><td>idle</td><td>user</td></tr>
				<tr><td>carol</td><td>offline</td><td>user</td></tr>
			</tbody>
		</Table>
	</div>
</section>

<section class="overview-section" id="separator">
	<h3><a href="{base}/components/separator/">Separator</a></h3>
	<div class="example">
		<p style="margin: 0; font-size: var(--text-sm);">Above</p>
		<Separator />
		<p style="margin: 0; font-size: var(--text-sm);">Below</p>
		<div style="display: flex; align-items: stretch; gap: 1rem; height: 40px; margin-top: 1rem;">
			<span style="font-size: var(--text-sm);">Left</span>
			<Separator orientation="vertical" />
			<span style="font-size: var(--text-sm);">Right</span>
		</div>
	</div>
</section>

<section class="overview-section" id="label">
	<h3><a href="{base}/components/label/">Label</a></h3>
	<div class="example">
		<Label for="overview-label-input">Username</Label>
		<Input id="overview-label-input" placeholder="enter username" />
	</div>
</section>

<section class="overview-section" id="spinner">
	<h3><a href="{base}/components/spinner/">Spinner</a></h3>
	<div class="example" style="display: flex; gap: 1rem; align-items: center;">
		<Spinner />
		<Spinner size={24} />
		<Spinner size={32} />
	</div>
</section>

<section class="overview-section" id="dot">
	<h3><a href="{base}/components/dot/">Dot</a></h3>
	<div class="example" style="display: flex; gap: 1rem; align-items: center;">
		<Dot />
		<Dot on={true} />
		<button class="btn" onclick={() => (dotOn = !dotOn)}>toggle</button>
		<Dot on={dotOn} />
	</div>
</section>

<section class="overview-section" id="status-bar">
	<h3><a href="{base}/components/status-bar/">StatusBar</a></h3>
	<div class="example">
		<StatusBar>
			<span style="font-size: var(--text-xs); display: flex; align-items: center; gap: 0.5rem;">
				<Dot on={true} /> connected
				<Badge variant="info">v0.1.0</Badge>
			</span>
		</StatusBar>
	</div>
</section>

<section class="overview-section" id="empty-state">
	<h3><a href="{base}/components/empty-state/">EmptyState</a></h3>
	<div class="example">
		<EmptyState>no items found</EmptyState>
	</div>
</section>

<section class="overview-section" id="apply-banner">
	<h3><a href="{base}/components/apply-banner/">ApplyBanner</a></h3>
	<div class="example">
		<ApplyBanner count={applyCount} onapply={() => (applyCount = 0)} />
	</div>
</section>

<section class="overview-section" id="avatar">
	<h3><a href="{base}/components/avatar/">Avatar</a></h3>
	<div class="example" style="display: flex; gap: 1rem; align-items: center;">
		<Avatar fallback="Jim" />
		<Avatar fallback="Pat" size={40} />
		<Avatar src="https://i.pravatar.cc/64" alt="User" size={48} />
	</div>
</section>

<section class="overview-section" id="aspect-ratio">
	<h3><a href="{base}/components/aspect-ratio/">AspectRatio</a></h3>
	<div class="example" style="max-width: 300px;">
		<AspectRatio ratio={16 / 9}>
			<div style="background: var(--color-surface-raised); display: flex; align-items: center; justify-content: center; height: 100%; font-size: var(--text-sm); color: var(--color-text-dim); border-radius: var(--radius);">
				16:9
			</div>
		</AspectRatio>
	</div>
</section>

<!-- ===== NAVIGATION ===== -->
<h2 class="overview-group">Navigation</h2>

<section class="overview-section" id="tabs">
	<h3><a href="{base}/components/tabs/">Tabs</a></h3>
	<div class="example">
		<Tabs.Root value="one">
			<Tabs.List>
				<Tabs.Trigger value="one">Tab one</Tabs.Trigger>
				<Tabs.Trigger value="two">Tab two</Tabs.Trigger>
				<Tabs.Trigger value="three">Tab three</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="one">Content for tab one</Tabs.Content>
			<Tabs.Content value="two">Content for tab two</Tabs.Content>
			<Tabs.Content value="three">Content for tab three</Tabs.Content>
		</Tabs.Root>
	</div>
</section>

<section class="overview-section" id="breadcrumb">
	<h3><a href="{base}/components/breadcrumb/">Breadcrumb</a></h3>
	<div class="example">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</section>

<section class="overview-section" id="pagination">
	<h3><a href="{base}/components/pagination/">Pagination</a></h3>
	<div class="example">
		<Pagination count={100} perPage={10} bind:page={paginationPage} />
		<p style="margin-top: 0.5rem;">Current page: {paginationPage}</p>
	</div>
</section>

<section class="overview-section" id="accordion">
	<h3><a href="{base}/components/accordion/">Accordion</a></h3>
	<div class="example">
		<Accordion.Root type="single" value="item-1">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Section one</Accordion.Trigger>
				<Accordion.Content>Content for section one.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Section two</Accordion.Trigger>
				<Accordion.Content>Content for section two.</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</section>

<section class="overview-section" id="collapsible">
	<h3><a href="{base}/components/collapsible/">Collapsible</a></h3>
	<div class="example">
		<Collapsible.Root>
			<Collapsible.Trigger>Toggle details</Collapsible.Trigger>
			<Collapsible.Content>
				<p>Hidden details revealed by clicking the trigger.</p>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>
</section>

<section class="overview-section" id="toolbar">
	<h3><a href="{base}/components/toolbar/">Toolbar</a></h3>
	<div class="example">
		<Toolbar.Root>
			<Toolbar.Button>Cut</Toolbar.Button>
			<Toolbar.Button>Copy</Toolbar.Button>
			<Toolbar.Button>Paste</Toolbar.Button>
			<Toolbar.Link href="https://example.com" target="_blank">Help</Toolbar.Link>
			<Toolbar.Group type="single">
				<Toolbar.GroupItem value="left">Left</Toolbar.GroupItem>
				<Toolbar.GroupItem value="center">Center</Toolbar.GroupItem>
				<Toolbar.GroupItem value="right">Right</Toolbar.GroupItem>
			</Toolbar.Group>
		</Toolbar.Root>
	</div>
</section>

<section class="overview-section" id="scroll-area">
	<h3><a href="{base}/components/scroll-area/">ScrollArea</a></h3>
	<div class="example">
		<ScrollArea.Root style="height: 120px; width: 300px; border: 1px solid var(--color-border);">
			<ScrollArea.Viewport>
				<div style="padding: 1rem;">
					{#each Array(15) as _, i}
						<p>Scrollable item {i + 1}</p>
					{/each}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="vertical" />
		</ScrollArea.Root>
	</div>
</section>

<section class="overview-section" id="navigation-menu">
	<h3><a href="{base}/components/navigation-menu/">NavigationMenu</a></h3>
	<div class="example">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="#home">Home</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
					<NavigationMenu.Content>
						<p style="padding: 0.5rem;">Product links go here.</p>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="#about">About</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>
</section>

<section class="overview-section" id="menubar">
	<h3><a href="{base}/components/menubar/">Menubar</a></h3>
	<div class="example">
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>File</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>New</Menubar.Item>
					<Menubar.Item>Open</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Save</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Edit</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>Undo</Menubar.Item>
					<Menubar.Item>Redo</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
	</div>
</section>

<!-- ===== OVERLAY ===== -->
<h2 class="overview-group">Overlay</h2>

<section class="overview-section" id="modal">
	<h3><a href="{base}/components/modal/">Modal</a></h3>
	<div class="example">
		<Button onclick={() => (modalOpen = true)}>Open Modal</Button>
		<Modal.Root bind:open={modalOpen}>
			<Modal.Header>
				<h3>Modal Title</h3>
				<Modal.Close />
			</Modal.Header>
			<Modal.Body>
				<p>This is the modal body content.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onclick={() => (modalOpen = false)}>Close</Button>
				<Button variant="primary" onclick={() => (modalOpen = false)}>Confirm</Button>
			</Modal.Footer>
		</Modal.Root>
	</div>
</section>

<section class="overview-section" id="alert-dialog">
	<h3><a href="{base}/components/alert-dialog/">AlertDialog</a></h3>
	<div class="example">
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button variant="danger">Delete Item</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Title>Are you sure?</AlertDialog.Title>
				<AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
				<div class="modal-footer">
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action>Delete</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Root>
	</div>
</section>

<section class="overview-section" id="tooltip">
	<h3><a href="{base}/components/tooltip/">Tooltip</a></h3>
	<div class="example" style="display: flex; gap: 1rem; align-items: center;">
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button>Hover me</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>This is a tooltip</Tooltip.Content>
		</Tooltip.Root>
	</div>
</section>

<section class="overview-section" id="popover">
	<h3><a href="{base}/components/popover/">Popover</a></h3>
	<div class="example">
		<Popover.Root bind:open={popoverOpen}>
			<Popover.Trigger>
				<Button>Toggle Popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<p style="margin: 0 0 0.5rem;">Popover content goes here.</p>
				<Popover.Close>
					<Button size="sm">Close</Button>
				</Popover.Close>
			</Popover.Content>
		</Popover.Root>
	</div>
</section>

<section class="overview-section" id="dropdown-menu">
	<h3><a href="{base}/components/dropdown-menu/">DropdownMenu</a></h3>
	<div class="example">
		<DropdownMenu.Root bind:open={dropdownOpen}>
			<DropdownMenu.Trigger>
				<Button>Open Menu</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
					<DropdownMenu.Item>Edit</DropdownMenu.Item>
					<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
				<DropdownMenu.Item>Delete</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</section>

<section class="overview-section" id="context-menu">
	<h3><a href="{base}/components/context-menu/">ContextMenu</a></h3>
	<div class="example">
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div style="border: 1px dotted var(--color-border-subtle); padding: 2rem; text-align: center; border-radius: var(--radius);">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Content>
				<ContextMenu.Item>Cut</ContextMenu.Item>
				<ContextMenu.Item>Copy</ContextMenu.Item>
				<ContextMenu.Item>Paste</ContextMenu.Item>
			</ContextMenu.Content>
		</ContextMenu.Root>
	</div>
</section>

<section class="overview-section" id="command">
	<h3><a href="{base}/components/command/">Command</a></h3>
	<div class="example">
		<Button onclick={() => (commandOpen = true)}>Open Command Palette</Button>
		<Command.Dialog bind:open={commandOpen}>
			<Command.Input placeholder="Type a command..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group>
					<Command.GroupHeading>Actions</Command.GroupHeading>
					<Command.Item value="new-file" onSelect={() => { commandOpen = false; }}>New File</Command.Item>
					<Command.Item value="settings" onSelect={() => { commandOpen = false; }}>Settings</Command.Item>
				</Command.Group>
			</Command.List>
		</Command.Dialog>
	</div>
</section>

<section class="overview-section" id="link-preview">
	<h3><a href="{base}/components/link-preview/">LinkPreview</a></h3>
	<div class="example">
		<LinkPreview.Root>
			<LinkPreview.Trigger href="https://svelte.dev">
				Hover to preview Svelte
			</LinkPreview.Trigger>
			<LinkPreview.Content>
				<div style="padding: 0.75rem;">
					<strong>Svelte</strong>
					<p style="margin: 0.25rem 0 0;">Cybernetically enhanced web apps.</p>
				</div>
			</LinkPreview.Content>
		</LinkPreview.Root>
	</div>
</section>

<section class="overview-section" id="combobox">
	<h3><a href="{base}/components/combobox/">Combobox</a></h3>
	<div class="example" style="max-width: 300px;">
		<Combobox.Root bind:open={comboboxOpen} bind:value={comboboxValue}>
			<Combobox.Input placeholder="Search a fruit..." />
			<Combobox.Trigger>
				<Button size="sm">Open</Button>
			</Combobox.Trigger>
			<Combobox.Content>
				{#each fruits as fruit}
					<Combobox.Item value={fruit.toLowerCase()} label={fruit}>{fruit}</Combobox.Item>
				{/each}
			</Combobox.Content>
		</Combobox.Root>
	</div>
</section>

<section class="overview-section" id="listbox">
	<h3><a href="{base}/components/listbox/">Listbox</a></h3>
	<div class="example" style="max-width: 300px;">
		<Listbox.Root>
			{#each listboxItems as item}
				<Listbox.Item
					value={item.value}
					selected={listboxSelected === item.value}
					disabled={item.disabled ?? false}
					onSelect={(v) => (listboxSelected = v)}
				>
					{item.label}
				</Listbox.Item>
			{/each}
		</Listbox.Root>
	</div>
</section>

<!-- ===== FORM ===== -->
<h2 class="overview-group">Form</h2>

<section class="overview-section" id="input">
	<h3><a href="{base}/components/input/">Input</a></h3>
	<div class="example" style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
		<Input placeholder="Type something..." bind:value={inputValue} />
		<Input type="password" placeholder="Password" />
		<Input error="This field is required" placeholder="With error" />
		<Input disabled placeholder="Disabled" />
	</div>
</section>

<section class="overview-section" id="select">
	<h3><a href="{base}/components/select/">Select</a></h3>
	<div class="example" style="max-width: 300px;">
		<Select options={selectOptions} bind:value={selectValue} placeholder="Pick a fruit..." />
		<p>Selected: <code>{selectValue || 'none'}</code></p>
	</div>
</section>

<section class="overview-section" id="toggle">
	<h3><a href="{base}/components/toggle/">Toggle</a></h3>
	<div class="example" style="display: flex; flex-direction: column; gap: 0.5rem;">
		<Toggle bind:checked={toggleChecked} label="Notifications" />
		<Toggle checked={true} label="Always on" disabled />
	</div>
</section>

<section class="overview-section" id="checkbox">
	<h3><a href="{base}/components/checkbox/">Checkbox</a></h3>
	<div class="example" style="display: flex; flex-direction: column; gap: 0.5rem;">
		<Checkbox bind:checked={checkboxChecked} label="Accept terms" />
		<Checkbox checked={'indeterminate'} label="Indeterminate" />
		<Checkbox disabled label="Disabled" />
	</div>
</section>

<section class="overview-section" id="radio">
	<h3><a href="{base}/components/radio/">Radio</a></h3>
	<div class="example">
		<RadioGroup bind:value={radioValue} name="overview-fruit">
			<Radio value="apple" label="Apple" />
			<Radio value="banana" label="Banana" />
			<Radio value="cherry" label="Cherry" />
		</RadioGroup>
	</div>
</section>

<section class="overview-section" id="slider">
	<h3><a href="{base}/components/slider/">Slider</a></h3>
	<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 300px;">
		<Slider bind:value={sliderValue} min={0} max={100} step={1} />
		<p>Value: <code>{sliderValue[0]}</code></p>
	</div>
</section>

<section class="overview-section" id="progress">
	<h3><a href="{base}/components/progress/">Progress</a></h3>
	<div class="example" style="max-width: 300px;">
		<Progress value={progressValue} max={100} />
		<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
			<Button onclick={() => progressValue = Math.max(0, progressValue - 10)}>-10</Button>
			<Button onclick={() => progressValue = Math.min(100, progressValue + 10)}>+10</Button>
		</div>
	</div>
</section>

<section class="overview-section" id="meter">
	<h3><a href="{base}/components/meter/">Meter</a></h3>
	<div class="example" style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
		<Meter value={20} min={0} max={100} low={33} high={66} />
		<Meter value={50} min={0} max={100} low={33} high={66} />
		<Meter value={80} min={0} max={100} low={33} high={66} />
	</div>
</section>

<section class="overview-section" id="pin-input">
	<h3><a href="{base}/components/pin-input/">PinInput</a></h3>
	<div class="example">
		<PinInput bind:value={pinValue} length={4} />
	</div>
</section>

<section class="overview-section" id="toggle-button">
	<h3><a href="{base}/components/toggle-button/">ToggleButton</a></h3>
	<div class="example" style="display: flex; gap: 0.5rem; align-items: center;">
		<ToggleButton bind:pressed={toggleBtnPressed}>
			{toggleBtnPressed ? 'ON' : 'OFF'}
		</ToggleButton>
		<ToggleButton pressed={true} disabled>Disabled</ToggleButton>
	</div>
</section>

<section class="overview-section" id="toggle-group">
	<h3><a href="{base}/components/toggle-group/">ToggleGroup</a></h3>
	<div class="example">
		<ToggleGroup.Root type="single" bind:value={toggleGroupValue}>
			<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
			<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
			<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>
</section>

<section class="overview-section" id="rating-group">
	<h3><a href="{base}/components/rating-group/">RatingGroup</a></h3>
	<div class="example" style="display: flex; gap: 1rem; align-items: center;">
		<RatingGroup bind:value={ratingValue} max={5} />
		<span><code>{ratingValue}</code> / 5</span>
	</div>
</section>

<section class="overview-section" id="theme-toggle">
	<h3><a href="{base}/components/theme-toggle/">ThemeToggle</a></h3>
	<div class="example">
		<ThemeToggle bind:theme={themeValue} />
	</div>
</section>

<!-- ===== DATE/TIME ===== -->
<h2 class="overview-group">Date / Time</h2>

<section class="overview-section" id="calendar">
	<h3><a href="{base}/components/calendar/">Calendar</a></h3>
	<div class="example">
		<Calendar.Root bind:value={calendarValue}>
			{#snippet children({ months, weekdays })}
				<Calendar.Header>
					<Calendar.PrevButton>&larr;</Calendar.PrevButton>
					<Calendar.Heading />
					<Calendar.NextButton>&rarr;</Calendar.NextButton>
				</Calendar.Header>
				{#each months as month}
					<Calendar.Grid>
						<Calendar.GridHead>
							<Calendar.GridRow>
								{#each weekdays as day}
									<Calendar.HeadCell>{day}</Calendar.HeadCell>
								{/each}
							</Calendar.GridRow>
						</Calendar.GridHead>
						<Calendar.GridBody>
							{#each month.weeks as week}
								<Calendar.GridRow>
									{#each week as date}
										<Calendar.Cell {date} month={month.value} />
									{/each}
								</Calendar.GridRow>
							{/each}
						</Calendar.GridBody>
					</Calendar.Grid>
				{/each}
			{/snippet}
		</Calendar.Root>
	</div>
</section>

<section class="overview-section" id="range-calendar">
	<h3><a href="{base}/components/range-calendar/">RangeCalendar</a></h3>
	<div class="example">
		<RangeCalendar.Root bind:value={rangeCalValue}>
			{#snippet children({ months, weekdays })}
				<RangeCalendar.Header>
					<RangeCalendar.PrevButton>&larr;</RangeCalendar.PrevButton>
					<RangeCalendar.Heading />
					<RangeCalendar.NextButton>&rarr;</RangeCalendar.NextButton>
				</RangeCalendar.Header>
				{#each months as month}
					<RangeCalendar.Grid>
						<RangeCalendar.GridHead>
							<RangeCalendar.GridRow>
								{#each weekdays as day}
									<RangeCalendar.HeadCell>{day}</RangeCalendar.HeadCell>
								{/each}
							</RangeCalendar.GridRow>
						</RangeCalendar.GridHead>
						<RangeCalendar.GridBody>
							{#each month.weeks as week}
								<RangeCalendar.GridRow>
									{#each week as date}
										<RangeCalendar.Cell {date} month={month.value} />
									{/each}
								</RangeCalendar.GridRow>
							{/each}
						</RangeCalendar.GridBody>
					</RangeCalendar.Grid>
				{/each}
			{/snippet}
		</RangeCalendar.Root>
	</div>
</section>

<section class="overview-section" id="date-field">
	<h3><a href="{base}/components/date-field/">DateField</a></h3>
	<div class="example" style="max-width: 300px;">
		<DateField.Root bind:value={dateFieldValue}>
			<DateField.Label>Date</DateField.Label>
			<DateField.Input />
		</DateField.Root>
	</div>
</section>

<section class="overview-section" id="date-picker">
	<h3><a href="{base}/components/date-picker/">DatePicker</a></h3>
	<div class="example" style="max-width: 300px;">
		<DatePicker.Root bind:value={datePickerValue}>
			<DatePicker.Label>Pick a date</DatePicker.Label>
			<div style="display: flex; align-items: center; gap: 0.25rem;">
				<DatePicker.Input />
				<DatePicker.Trigger />
			</div>
			<DatePicker.Content>
				<DatePicker.Calendar />
			</DatePicker.Content>
		</DatePicker.Root>
	</div>
</section>

<section class="overview-section" id="date-range-field">
	<h3><a href="{base}/components/date-range-field/">DateRangeField</a></h3>
	<div class="example" style="max-width: 400px;">
		<DateRangeField.Root bind:value={dateRangeFieldValue}>
			<DateRangeField.Label>Date range</DateRangeField.Label>
			<div style="display: flex; align-items: center; gap: 0.25rem;">
				<DateRangeField.Input type="start" />
				<span class="date-range-field-separator">&ndash;</span>
				<DateRangeField.Input type="end" />
			</div>
		</DateRangeField.Root>
	</div>
</section>

<section class="overview-section" id="date-range-picker">
	<h3><a href="{base}/components/date-range-picker/">DateRangePicker</a></h3>
	<div class="example" style="max-width: 400px;">
		<DateRangePicker.Root bind:value={dateRangePickerValue}>
			<DateRangePicker.Label>Select range</DateRangePicker.Label>
			<div style="display: flex; align-items: center; gap: 0.25rem;">
				<DateRangePicker.Input type="start" />
				<span class="date-range-field-separator">&ndash;</span>
				<DateRangePicker.Input type="end" />
				<DateRangePicker.Trigger />
			</div>
			<DateRangePicker.Content>
				<DateRangePicker.Calendar />
			</DateRangePicker.Content>
		</DateRangePicker.Root>
	</div>
</section>

<section class="overview-section" id="time-field">
	<h3><a href="{base}/components/time-field/">TimeField</a></h3>
	<div class="example" style="max-width: 200px;">
		<TimeField.Root bind:value={timeFieldValue}>
			<TimeField.Label>Time</TimeField.Label>
			<TimeField.Input />
		</TimeField.Root>
	</div>
</section>

<section class="overview-section" id="time-range-field">
	<h3><a href="{base}/components/time-range-field/">TimeRangeField</a></h3>
	<div class="example" style="max-width: 300px;">
		<TimeRangeField.Root bind:value={timeRangeFieldValue}>
			<TimeRangeField.Label>Time range</TimeRangeField.Label>
			<div style="display: flex; align-items: center; gap: 0.25rem;">
				<TimeRangeField.Input type="start" />
				<span class="time-range-field-separator">&ndash;</span>
				<TimeRangeField.Input type="end" />
			</div>
		</TimeRangeField.Root>
	</div>
</section>

<!-- ===== CUSTOM ===== -->
<h2 class="overview-group">Custom</h2>

<section class="overview-section" id="log-viewer">
	<h3><a href="{base}/components/log-viewer/">LogViewer</a></h3>
	<div class="example">
		<LogViewer columns={logColumns} entries={logEntries} showHeader live />
	</div>
</section>

<section class="overview-section" id="toast">
	<h3><a href="{base}/components/toast/">Toast</a></h3>
	<div class="example" style="display: flex; gap: 0.5rem;">
		<Button onclick={() => toast('This is an info toast', 'info')}>Info</Button>
		<Button variant="primary" onclick={() => toast('Operation succeeded', 'success')}>Success</Button>
		<Button variant="danger" onclick={() => toast('Something went wrong', 'danger')}>Danger</Button>
	</div>
</section>

<Toaster />
{/if}

<style>
	.overview-group {
		margin-top: 2.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border);
	}
	.overview-section {
		margin: 1.5rem 0;
	}
	.overview-section h3 {
		margin: 0 0 0.5rem;
	}
	.overview-section h3 a {
		color: var(--color-text);
		text-decoration: none;
	}
	.overview-section h3 a:hover {
		color: var(--color-primary);
	}
	.swatch-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 0.5rem;
	}
	.swatch {
		height: 64px;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		display: flex;
		align-items: flex-end;
		padding: 0.5rem;
	}
	.swatch-label {
		font-size: var(--text-xs);
		color: var(--color-text-muted);
	}
</style>
