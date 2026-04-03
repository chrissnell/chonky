<script lang="ts">
	import { Spinner } from 'chonky-ui';
</script>

<h1>Spinner</h1>
<p>Animated loading indicator.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 1rem; align-items: center;">
	<Spinner />
	<Spinner size={24} />
	<Spinner size={32} />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>size</code></td><td><code>number</code></td><td><code>16</code></td><td>Size in pixels</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Spinner } from 'chonky-ui';
</script>

<Spinner size={24} />`}</code></pre>
