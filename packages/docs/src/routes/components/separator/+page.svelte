<script lang="ts">
	import { Separator } from 'chonky-ui';
</script>

<h1>Separator</h1>
<p>Visual divider between content sections. Wraps bits-ui Separator.</p>

<h2>Example</h2>
<div class="example">
	<p style="margin: 0; font-size: var(--text-sm);">Above</p>
	<Separator />
	<p style="margin: 0; font-size: var(--text-sm);">Below</p>
	<div style="display: flex; align-items: stretch; gap: 1rem; height: 40px; margin-top: 1rem;">
		<span style="font-size: var(--text-sm);">Left</span>
		<Separator orientation="vertical" />
		<span style="font-size: var(--text-sm);">Right</span>
	</div>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>orientation</code></td><td><code>'horizontal' | 'vertical'</code></td><td><code>'horizontal'</code></td><td>Direction of the separator</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Separator } from 'chonky-ui';
</script>

<Separator />
<Separator orientation="vertical" />`}</code></pre>
