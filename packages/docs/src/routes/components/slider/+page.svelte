<script lang="ts">
	import { Slider } from 'chonky-ui';

	let value = $state([50]);
</script>

<h1>Slider</h1>
<p>Range slider built on bits-ui. Supports single or multiple thumbs, min/max, and step.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<Slider bind:value min={0} max={100} step={1} />
	<p>Value: <code>{value[0]}</code></p>
	<Slider value={[25, 75]} min={0} max={100} />
	<Slider value={[30]} disabled />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>number[]</code></td><td><code>[50]</code></td><td>Current value(s) (bindable). One entry per thumb.</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: number[]) =&gt; void</code></td><td>—</td><td>Callback when value changes</td></tr>
		<tr><td><code>min</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum value</td></tr>
		<tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value</td></tr>
		<tr><td><code>step</code></td><td><code>number</code></td><td><code>1</code></td><td>Step increment</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Slider } from 'chonky-ui';
  let value = $state([50]);
</script>

<Slider bind:value min={0} max={100} step={5} />

<!-- Range slider with two thumbs -->
<Slider value={[20, 80]} />`}</code></pre>
