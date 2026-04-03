<script lang="ts">
	import { Toolbar } from '@chrissnell/chonky-ui';
</script>

<h1>Toolbar</h1>
<p>Accessible toolbar with buttons, links, and toggle groups. Wraps bits-ui Toolbar.</p>

<h2>Example</h2>
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

<h2>Sub-components</h2>

<h3>Toolbar.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Toolbar.Button</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Toolbar.Link</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>href</code></td><td><code>string</code></td><td>—</td><td>Link destination</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Toolbar.Group</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>type</code></td><td><code>'single' | 'multiple'</code></td><td><code>'single'</code></td><td>Whether one or many items can be active</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Toolbar.GroupItem</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Item identifier</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Toolbar } from '@chrissnell/chonky-ui';
</script>

<Toolbar.Root>
  <Toolbar.Button>Bold</Toolbar.Button>
  <Toolbar.Button>Italic</Toolbar.Button>
  <Toolbar.Group type="single">
    <Toolbar.GroupItem value="left">Left</Toolbar.GroupItem>
    <Toolbar.GroupItem value="center">Center</Toolbar.GroupItem>
    <Toolbar.GroupItem value="right">Right</Toolbar.GroupItem>
  </Toolbar.Group>
</Toolbar.Root>`}</code></pre>
