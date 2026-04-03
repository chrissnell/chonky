<script lang="ts">
	import { ContextMenu } from '@chrissnell/chonky-ui';
</script>

<h1>ContextMenu</h1>
<p>Right-click menu with items, separators, and groups. Triggered by right-clicking the designated area.</p>

<h2>Example</h2>
<div class="example">
	<ContextMenu.Root>
		<ContextMenu.Trigger>
			<div style="border: 1px dotted var(--color-border-subtle); padding: 2rem; text-align: center; border-radius: var(--radius);">
				Right-click here
			</div>
		</ContextMenu.Trigger>
		<ContextMenu.Content>
			<ContextMenu.Group>
				<ContextMenu.GroupHeading>Edit</ContextMenu.GroupHeading>
				<ContextMenu.Item onSelect={() => alert('Cut')}>Cut</ContextMenu.Item>
				<ContextMenu.Item onSelect={() => alert('Copy')}>Copy</ContextMenu.Item>
				<ContextMenu.Item onSelect={() => alert('Paste')}>Paste</ContextMenu.Item>
			</ContextMenu.Group>
			<ContextMenu.Separator />
			<ContextMenu.Item disabled>Select All</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Root>
</div>

<h2>Props</h2>
<h3>ContextMenu.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger and content</td></tr>
	</tbody>
</table>

<h3>ContextMenu.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Area that responds to right-click</td></tr>
	</tbody>
</table>

<h3>ContextMenu.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Menu items</td></tr>
	</tbody>
</table>

<h3>ContextMenu.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>onSelect</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when item is selected</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td>—</td><td>Disables the item</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
	</tbody>
</table>

<h3>ContextMenu.Separator</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>ContextMenu.Group / ContextMenu.GroupHeading</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Group content / heading text</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ContextMenu } from '@chrissnell/chonky-ui';
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <div>Right-click this area</div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item onSelect={() => console.log('cut')}>Cut</ContextMenu.Item>
    <ContextMenu.Item onSelect={() => console.log('copy')}>Copy</ContextMenu.Item>
    <ContextMenu.Item onSelect={() => console.log('paste')}>Paste</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item disabled>Select All</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>`}</code></pre>
