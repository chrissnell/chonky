<script lang="ts">
	import { StatCard } from '@chrissnell/chonky-ui';
</script>

<h1>StatCard</h1>
<p>Compact metric card with a colored left border, uppercase label, and prominent value. Use for dashboard summaries.</p>

<h2>Example</h2>
<div class="example" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
	<StatCard label="status" value="running" variant="success" />
	<StatCard label="total queries" value="30,476" variant="info" />
	<StatCard label="queries blocked" value="1,338" variant="danger" />
	<StatCard label="block rate" value="4.4%" variant="warning" />
</div>

<h2>Variants</h2>
<div class="example" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
	<StatCard label="default" value="1,024" />
	<StatCard label="success" value="1,024" variant="success" />
	<StatCard label="info" value="1,024" variant="info" />
	<StatCard label="danger" value="1,024" variant="danger" />
	<StatCard label="warning" value="1,024" variant="warning" />
	<StatCard label="primary" value="1,024" variant="primary" />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Uppercase label shown above the value</td></tr>
		<tr><td><code>value</code></td><td><code>string | number</code></td><td>—</td><td>The metric value (ignored if <code>children</code> provided)</td></tr>
		<tr><td><code>variant</code></td><td><code>'default' | 'success' | 'info' | 'danger' | 'warning' | 'primary'</code></td><td><code>'default'</code></td><td>Color theme for left border and background tint</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Custom value content (overrides <code>value</code>)</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { StatCard } from '@chrissnell/chonky-ui';
</script>

<StatCard label="total queries" value="30,476" variant="info" />
<StatCard label="queries blocked" value={1338} variant="danger" />`}</code></pre>
