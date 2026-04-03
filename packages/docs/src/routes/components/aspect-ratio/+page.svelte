<script lang="ts">
	import { AspectRatio } from '@chrissnell/chonky-ui';
</script>

<h1>AspectRatio</h1>
<p>Constrains content to a specific aspect ratio. Wraps bits-ui AspectRatio.</p>

<h2>Example</h2>
<div class="example" style="max-width: 300px;">
	<AspectRatio ratio={16 / 9}>
		<div style="background: var(--color-surface-raised); display: flex; align-items: center; justify-content: center; height: 100%; font-size: var(--text-sm); color: var(--color-text-dim); border-radius: var(--radius);">
			16:9
		</div>
	</AspectRatio>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>ratio</code></td><td><code>number</code></td><td><code>16/9</code></td><td>Width-to-height ratio</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Content to constrain</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { AspectRatio } from '@chrissnell/chonky-ui';
</script>

<AspectRatio ratio={4 / 3}>
  <img src="photo.jpg" alt="Photo" />
</AspectRatio>`}</code></pre>
