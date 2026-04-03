<script lang="ts">
	import { Dot } from 'chonky-ui';
	let on = $state(false);
</script>

<h1>Dot</h1>
<p>Status indicator dot. Pulses when active.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 1rem; align-items: center;">
	<Dot />
	<Dot on={true} />
	<button class="btn" onclick={() => (on = !on)}>toggle</button>
	<Dot {on} />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>on</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Active state (pulses when true)</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Dot } from 'chonky-ui';
</script>

<Dot on={true} />`}</code></pre>
