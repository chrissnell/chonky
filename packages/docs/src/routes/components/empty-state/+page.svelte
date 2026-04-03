<script lang="ts">
	import { EmptyState } from 'chonky-ui';
</script>

<h1>EmptyState</h1>
<p>Placeholder for empty content areas.</p>

<h2>Example</h2>
<div class="example">
	<EmptyState>no items found</EmptyState>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Message content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { EmptyState } from 'chonky-ui';
</script>

<EmptyState>no results</EmptyState>`}</code></pre>
