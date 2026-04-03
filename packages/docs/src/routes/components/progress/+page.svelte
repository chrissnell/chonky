<script lang="ts">
	import { Progress, Button } from '@chrissnell/chonky-ui';

	let value = $state(30);
</script>

<h1>Progress</h1>
<p>Progress bar built on bits-ui. Displays a visual indicator of completion.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<Progress {value} max={100} />
	<p>Progress: <code>{value}%</code></p>
	<div style="display: flex; gap: 0.5rem;">
		<Button onclick={() => value = Math.max(0, value - 10)}>-10</Button>
		<Button onclick={() => value = Math.min(100, value + 10)}>+10</Button>
	</div>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>Current progress value</td></tr>
		<tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Progress } from '@chrissnell/chonky-ui';
</script>

<Progress value={45} max={100} />`}</code></pre>
