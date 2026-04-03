<script lang="ts">
	import { ToggleButton } from 'chonky-ui';

	let pressed = $state(false);
</script>

<h1>ToggleButton</h1>
<p>A pressable toggle button built on bits-ui. Renders children inside a button that toggles between pressed/unpressed states.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
	<ToggleButton bind:pressed>
		{pressed ? 'ON' : 'OFF'}
	</ToggleButton>
	<p>Pressed: <code>{pressed}</code></p>
	<ToggleButton pressed={true} disabled>Disabled</ToggleButton>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>pressed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Pressed state (bindable)</td></tr>
		<tr><td><code>onPressedChange</code></td><td><code>(pressed: boolean) =&gt; void</code></td><td>—</td><td>Callback when state changes</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Button content (required)</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ToggleButton } from 'chonky-ui';
  let bold = $state(false);
</script>

<ToggleButton bind:pressed={bold}>
  B
</ToggleButton>`}</code></pre>
