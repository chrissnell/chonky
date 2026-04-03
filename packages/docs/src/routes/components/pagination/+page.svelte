<script lang="ts">
	import { Pagination } from 'chonky-ui';

	let page = $state(1);
</script>

<h1>Pagination</h1>
<p>Page navigation control with prev/next buttons and page numbers. Wraps bits-ui Pagination.</p>

<h2>Example</h2>
<div class="example">
	<Pagination count={100} perPage={10} bind:page />
	<p style="margin-top: 0.5rem;">Current page: {page}</p>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>count</code></td><td><code>number</code></td><td>—</td><td>Total number of items</td></tr>
		<tr><td><code>perPage</code></td><td><code>number</code></td><td><code>10</code></td><td>Items per page</td></tr>
		<tr><td><code>page</code></td><td><code>number</code></td><td><code>1</code></td><td>Current page (bindable)</td></tr>
		<tr><td><code>onPageChange</code></td><td><code>(page: number) =&gt; void</code></td><td>—</td><td>Called when page changes</td></tr>
		<tr><td><code>siblingCount</code></td><td><code>number</code></td><td><code>1</code></td><td>Number of sibling pages shown around current</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Pagination } from 'chonky-ui';

  let page = $state(1);
</script>

<Pagination count={50} perPage={10} bind:page />`}</code></pre>
