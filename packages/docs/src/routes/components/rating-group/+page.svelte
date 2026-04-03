<script lang="ts">
	import { RatingGroup } from 'chonky-ui';

	let value = $state(0);
</script>

<h1>RatingGroup</h1>
<p>Star rating input built on bits-ui. Renders clickable star items with highlighted state.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
	<RatingGroup bind:value max={5} />
	<p>Rating: <code>{value}</code> / 5</p>
	<RatingGroup value={3} max={5} disabled />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>Current rating (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: number) =&gt; void</code></td><td>—</td><td>Callback when rating changes</td></tr>
		<tr><td><code>max</code></td><td><code>number</code></td><td><code>5</code></td><td>Maximum number of stars</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { RatingGroup } from 'chonky-ui';
  let rating = $state(0);
</script>

<RatingGroup bind:value={rating} max={5} />`}</code></pre>
