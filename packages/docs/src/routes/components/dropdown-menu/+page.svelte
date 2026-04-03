<script lang="ts">
	import { DropdownMenu, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
</script>

<h1>DropdownMenu</h1>
<p>Menu of actions triggered by a button. Supports items, separators, groups, sub-menus, and checkbox items.</p>

<h2>Example</h2>
<div class="example">
	<DropdownMenu.Root bind:open>
		<DropdownMenu.Trigger>
			<Button>Open Menu</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
				<DropdownMenu.Item onSelect={() => alert('Edit')}>Edit</DropdownMenu.Item>
				<DropdownMenu.Item onSelect={() => alert('Duplicate')}>Duplicate</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={() => alert('Delete')}>Delete</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>

<h2>Props</h2>
<h3>DropdownMenu.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls menu visibility (bindable)</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger and content</td></tr>
	</tbody>
</table>

<h3>DropdownMenu.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger element</td></tr>
	</tbody>
</table>

<h3>DropdownMenu.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>side</code></td><td><code>'top' | 'right' | 'bottom' | 'left'</code></td><td><code>'bottom'</code></td><td>Preferred side</td></tr>
		<tr><td><code>sideOffset</code></td><td><code>number</code></td><td><code>4</code></td><td>Distance from trigger in px</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Menu items</td></tr>
	</tbody>
</table>

<h3>DropdownMenu.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>onSelect</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when item is selected</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td>—</td><td>Disables the item</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
	</tbody>
</table>

<h3>DropdownMenu.Separator</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>DropdownMenu.Group / DropdownMenu.GroupHeading</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Group content / heading text</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { DropdownMenu, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
</script>

<DropdownMenu.Root bind:open>
  <DropdownMenu.Trigger>
    <Button>Actions</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => console.log('edit')}>Edit</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => console.log('copy')}>Copy</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
    <DropdownMenu.Item>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`}</code></pre>
