<script lang="ts">
	import { Command, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
</script>

<h1>Command</h1>
<p>Searchable command palette with grouped items. Can be used inline or inside a dialog overlay.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 1rem;">
	<Button onclick={() => (open = true)}>Open Command Palette</Button>
	<Command.Dialog bind:open>
		<Command.Input placeholder="Type a command..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group>
				<Command.GroupHeading>Actions</Command.GroupHeading>
				<Command.Item value="new-file" onSelect={() => { alert('New File'); open = false; }}>New File</Command.Item>
				<Command.Item value="new-folder" onSelect={() => { alert('New Folder'); open = false; }}>New Folder</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group>
				<Command.GroupHeading>Navigation</Command.GroupHeading>
				<Command.Item value="settings" onSelect={() => { alert('Settings'); open = false; }}>Settings</Command.Item>
				<Command.Item value="profile" onSelect={() => { alert('Profile'); open = false; }}>Profile</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Dialog>
</div>

<h2>Props</h2>
<h3>Command.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Command content</td></tr>
	</tbody>
</table>

<h3>Command.Dialog</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls dialog visibility (bindable)</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Dialog content</td></tr>
	</tbody>
</table>

<h3>Command.Input</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>'Search...'</code></td><td>Input placeholder text</td></tr>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Search value (bindable)</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Command.List</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Items and groups</td></tr>
	</tbody>
</table>

<h3>Command.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Search/match value</td></tr>
		<tr><td><code>onSelect</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when item is selected</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td>—</td><td>Disables the item</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
	</tbody>
</table>

<h3>Command.Empty</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Message when no results match</td></tr>
	</tbody>
</table>

<h3>Command.Group / Command.GroupHeading / Command.Separator</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Content (Separator has no children)</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Command, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open Command Palette</Button>
<Command.Dialog bind:open>
  <Command.Input placeholder="Type a command..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group>
      <Command.GroupHeading>Files</Command.GroupHeading>
      <Command.Item value="new-file" onSelect={() => (open = false)}>
        New File
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>`}</code></pre>
