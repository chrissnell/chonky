<script lang="ts">
	import { Badge } from '@chrissnell/chonky-ui';
</script>

<h1>Badge</h1>
<p>Inline status indicator with color variants.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
	<Badge>default</Badge>
	<Badge variant="success">success</Badge>
	<Badge variant="warning">warning</Badge>
	<Badge variant="danger">danger</Badge>
	<Badge variant="info">info</Badge>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>variant</code></td><td><code>'default' | 'success' | 'warning' | 'danger' | 'info'</code></td><td><code>'default'</code></td><td>Color variant</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Badge content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Badge } from '@chrissnell/chonky-ui';
</script>

<Badge variant="success">online</Badge>`}</code></pre>
