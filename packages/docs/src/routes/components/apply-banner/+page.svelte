<script lang="ts">
	import { ApplyBanner } from 'chonky-ui';
	let count = $state(3);
</script>

<h1>ApplyBanner</h1>
<p>Banner showing pending changes with an apply action.</p>

<h2>Example</h2>
<div class="example">
	<ApplyBanner {count} onapply={() => (count = 0)} />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>count</code></td><td><code>number</code></td><td>—</td><td>Number of pending changes</td></tr>
		<tr><td><code>onapply</code></td><td><code>() => void</code></td><td>—</td><td>Callback when apply is clicked</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ApplyBanner } from 'chonky-ui';
</script>

<ApplyBanner count={5} onapply={() => save()} />`}</code></pre>
