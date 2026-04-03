<script lang="ts">
	import { Menubar } from 'chonky-ui';
</script>

<h1>Menubar</h1>
<p>Horizontal menu bar with dropdown menus, similar to desktop application menus. Wraps bits-ui Menubar.</p>

<h2>Example</h2>
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
				<Menubar.Separator />
				<Menubar.Item>Cut</Menubar.Item>
				<Menubar.Item>Copy</Menubar.Item>
				<Menubar.Item>Paste</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>View</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Zoom In</Menubar.Item>
				<Menubar.Item>Zoom Out</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</div>

<h2>Sub-components</h2>

<h3>Menubar.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Menubar.Menu</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td colspan="4">No props. Container for a single menu.</td></tr>
	</tbody>
</table>

<h3>Menubar.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Menubar.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Menubar.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>onSelect</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Called when item is selected</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Menubar.Separator</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Menubar } from 'chonky-ui';
</script>

<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item onSelect={() => console.log('new')}>New</Menubar.Item>
      <Menubar.Item>Open</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Save</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>`}</code></pre>
