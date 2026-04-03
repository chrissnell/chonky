<script lang="ts">
	import { AlertDialog, Button } from '@chrissnell/chonky-ui';
</script>

<h1>AlertDialog</h1>
<p>Confirmation dialog for destructive or important actions. Requires explicit user acknowledgment before proceeding.</p>

<h2>Example</h2>
<div class="example">
	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="danger">Delete Item</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Title>Are you sure?</AlertDialog.Title>
			<AlertDialog.Description>This action cannot be undone. This will permanently delete the item.</AlertDialog.Description>
			<div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Delete</AlertDialog.Action>
			</div>
		</AlertDialog.Content>
	</AlertDialog.Root>
</div>

<h2>Props</h2>
<h3>AlertDialog.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls dialog visibility (bindable)</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Dialog content</td></tr>
	</tbody>
</table>

<h3>AlertDialog.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger content</td></tr>
	</tbody>
</table>

<h3>AlertDialog.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Dialog body content</td></tr>
	</tbody>
</table>

<h3>AlertDialog.Title / AlertDialog.Description</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Text content</td></tr>
	</tbody>
</table>

<h3>AlertDialog.Action / AlertDialog.Cancel</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Button content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { AlertDialog, Button } from '@chrissnell/chonky-ui';
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button variant="danger">Delete</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Are you sure?</AlertDialog.Title>
    <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Delete</AlertDialog.Action>
    </div>
  </AlertDialog.Content>
</AlertDialog.Root>`}</code></pre>
