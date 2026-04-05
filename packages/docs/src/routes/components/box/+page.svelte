<script lang="ts">
	import { Box } from '@chrissnell/chonky-ui';
</script>

<h1>Box</h1>
<p>Bordered container for grouping content. Pass a <code>title</code> to render a full-width titled panel with an uppercase header bar.</p>

<h2>Example</h2>
<div class="example">
	<Box>
		<div style="padding: 0.75rem; font-size: var(--text-sm);">Content inside a box</div>
	</Box>
</div>

<h2>Titled Box</h2>
<div class="example">
	<Box title="top permitted domains">
		<div style="font-size: var(--text-sm);">Content inside a titled box. The header bar spans the full width with a dotted bottom border.</div>
	</Box>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>title</code></td><td><code>string</code></td><td>—</td><td>If set, renders a full-width uppercase title bar at the top of the box</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Box content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Box } from '@chrissnell/chonky-ui';
</script>

<Box>
  <p>Grouped content here</p>
</Box>

<Box title="query types">
  <p>Content below a titled header bar</p>
</Box>`}</code></pre>
