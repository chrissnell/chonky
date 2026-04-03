<script lang="ts">
	import { StatusBar, Dot, Badge } from '@chrissnell/chonky-ui';
</script>

<h1>StatusBar</h1>
<p>Fixed-position bar for application status information.</p>

<h2>Example</h2>
<div class="example">
	<StatusBar>
		<span style="font-size: var(--text-xs); display: flex; align-items: center; gap: 0.5rem;">
			<Dot on={true} /> connected
			<Badge variant="info">v0.1.0</Badge>
		</span>
	</StatusBar>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Status bar content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { StatusBar, Dot } from '@chrissnell/chonky-ui';
</script>

<StatusBar>
  <Dot on={true} /> connected
</StatusBar>`}</code></pre>
