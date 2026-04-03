<script lang="ts">
	import { Box, BoxHeader } from 'chonky-ui';
</script>

<h1>BoxHeader</h1>
<p>Header row for Box containers.</p>

<h2>Example</h2>
<div class="example">
	<Box>
		<BoxHeader>section title</BoxHeader>
		<div style="padding: 0.75rem; font-size: var(--text-sm);">Content below the header</div>
	</Box>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Header content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Box, BoxHeader } from 'chonky-ui';
</script>

<Box>
  <BoxHeader>settings</BoxHeader>
  <div>content</div>
</Box>`}</code></pre>
