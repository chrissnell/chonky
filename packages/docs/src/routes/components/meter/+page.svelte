<script lang="ts">
	import { Meter } from '@chrissnell/chonky-ui';

	let value = $state(50);
</script>

<h1>Meter</h1>
<p>Visual meter with low/medium/high tiers. Uses native ARIA meter role for accessibility.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<label>
		Value: <input type="range" bind:value={value} min={0} max={100} />
		<code>{value}</code>
	</label>
	<Meter {value} min={0} max={100} low={33} high={66} />
	<Meter value={20} min={0} max={100} low={33} high={66} />
	<Meter value={80} min={0} max={100} low={33} high={66} />
</div>

<h2>Inverted (higher is better)</h2>
<p>Use <code>invert</code> when high values are good (e.g. battery, score) and low values are bad.</p>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<Meter value={20} min={0} max={100} low={33} high={66} invert />
	<Meter value={50} min={0} max={100} low={33} high={66} invert />
	<Meter value={80} min={0} max={100} low={33} high={66} invert />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>Current value</td></tr>
		<tr><td><code>min</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum value</td></tr>
		<tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value</td></tr>
		<tr><td><code>low</code></td><td><code>number</code></td><td><code>33</code></td><td>Threshold for low tier</td></tr>
		<tr><td><code>high</code></td><td><code>number</code></td><td><code>66</code></td><td>Threshold for high tier</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Meter } from '@chrissnell/chonky-ui';
</script>

<Meter value={25} low={33} high={66} />
<Meter value={50} low={33} high={66} />
<Meter value={80} low={33} high={66} />`}</code></pre>
