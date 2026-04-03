<script lang="ts">
	import { Table } from 'chonky-ui';
</script>

<h1>Table</h1>
<p>Styled HTML table.</p>

<h2>Example</h2>
<div class="example">
	<Table>
		<thead><tr><th>Name</th><th>Status</th><th>Role</th></tr></thead>
		<tbody>
			<tr><td>alice</td><td>active</td><td>admin</td></tr>
			<tr><td>bob</td><td>idle</td><td>user</td></tr>
			<tr><td>carol</td><td>offline</td><td>user</td></tr>
		</tbody>
	</Table>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Table content (thead, tbody)</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Table } from 'chonky-ui';
</script>

<Table>
  <thead><tr><th>Col</th></tr></thead>
  <tbody><tr><td>Value</td></tr></tbody>
</Table>`}</code></pre>
