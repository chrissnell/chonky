<script lang="ts">
	import { Tooltip, Button } from 'chonky-ui';
</script>

<h1>Tooltip</h1>
<p>Displays informational text on hover or focus. Wraps bits-ui Tooltip.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 1rem; align-items: center;">
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button>Hover me</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>This is a tooltip</Tooltip.Content>
	</Tooltip.Root>

	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button variant="primary">Bottom tooltip</Button>
		</Tooltip.Trigger>
		<Tooltip.Content side="bottom">Appears below</Tooltip.Content>
	</Tooltip.Root>
</div>

<h2>Props</h2>
<h3>Tooltip.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>openDelay</code></td><td><code>number</code></td><td><code>200</code></td><td>Delay in ms before tooltip opens</td></tr>
		<tr><td><code>closeDelay</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay in ms before tooltip closes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger and content</td></tr>
	</tbody>
</table>

<h3>Tooltip.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Element that triggers the tooltip</td></tr>
	</tbody>
</table>

<h3>Tooltip.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>side</code></td><td><code>'top' | 'right' | 'bottom' | 'left'</code></td><td><code>'top'</code></td><td>Preferred side of the trigger</td></tr>
		<tr><td><code>sideOffset</code></td><td><code>number</code></td><td><code>4</code></td><td>Distance from trigger in px</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Tooltip content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Tooltip, Button } from 'chonky-ui';
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    <Button>Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content side="top">
    Helpful information
  </Tooltip.Content>
</Tooltip.Root>`}</code></pre>
