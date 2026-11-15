<script lang="ts">
	import { Table } from '@chrissnell/chonky-ui';
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

<h2>Action columns</h2>
<p>
	Give the last column <code>class="actions"</code> on both the <code>th</code> and the
	<code>td</code>. Cells and header are right-aligned together, and buttons inside a cell are
	spaced for you — so a row with one button lines up with a row that has two.
</p>
<div class="example">
	<Table>
		<thead>
			<tr><th>Name</th><th>Status</th><th class="actions">Actions</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>alice</td><td>active</td>
				<td class="actions"><button class="btn btn-sm">Run now</button><button class="btn btn-sm">Restart</button></td>
			</tr>
			<tr>
				<td>bob</td><td>idle</td>
				<td class="actions"><button class="btn btn-sm">Restart</button></td>
			</tr>
		</tbody>
	</Table>
</div>
<p>
	Do not set <code>display: flex</code> on the cell to space the buttons: that discards the
	alignment and is what makes rows with different numbers of buttons drift apart.
</p>

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
  import { Table } from '@chrissnell/chonky-ui';
</script>

<Table>
  <thead><tr><th>Col</th></tr></thead>
  <tbody><tr><td>Value</td></tr></tbody>
</Table>`}</code></pre>
