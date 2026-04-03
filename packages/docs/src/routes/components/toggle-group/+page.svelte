<script lang="ts">
	import { ToggleGroup } from '@chrissnell/chonky-ui';

	let value = $state('center');
</script>

<h1>ToggleGroup</h1>
<p>A group of toggle buttons where one or more can be selected. Built on bits-ui. Uses <code>ToggleGroup.Root</code> and <code>ToggleGroup.Item</code>.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
	<ToggleGroup.Root type="single" bind:value>
		<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
		<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
		<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
	</ToggleGroup.Root>
	<p>Selected: <code>{value}</code></p>
</div>

<h2>Props</h2>
<h3>ToggleGroup.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>type</code></td><td><code>'single' | 'multiple'</code></td><td><code>'single'</code></td><td>Selection mode</td></tr>
		<tr><td><code>value</code></td><td><code>string | string[]</code></td><td><code>'' | []</code></td><td>Selected value(s) (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string | string[]) =&gt; void</code></td><td>—</td><td>Callback when selection changes</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable all items</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>ToggleGroup.Item elements</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>ToggleGroup.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Item value (required)</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable this item</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ToggleGroup } from '@chrissnell/chonky-ui';
  let align = $state('left');
</script>

<ToggleGroup.Root type="single" bind:value={align}>
  <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
  <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
  <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup.Root>`}</code></pre>
