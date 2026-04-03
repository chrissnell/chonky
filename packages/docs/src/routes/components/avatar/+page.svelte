<script lang="ts">
	import { Avatar } from '@chrissnell/chonky-ui';
</script>

<h1>Avatar</h1>
<p>User avatar with image or fallback initials. Wraps bits-ui Avatar.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 0.75rem; align-items: center;">
	<Avatar fallback="Jim" />
	<Avatar fallback="Pat" size={40} />
	<Avatar src="https://i.pravatar.cc/64" alt="User" size={48} />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>src</code></td><td><code>string</code></td><td>—</td><td>Image URL</td></tr>
		<tr><td><code>alt</code></td><td><code>string</code></td><td><code>''</code></td><td>Alt text for the image</td></tr>
		<tr><td><code>fallback</code></td><td><code>string</code></td><td><code>'?'</code></td><td>Text shown when no image</td></tr>
		<tr><td><code>size</code></td><td><code>number</code></td><td><code>32</code></td><td>Size in pixels</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Avatar } from '@chrissnell/chonky-ui';
</script>

<Avatar fallback="Jim" size={40} />`}</code></pre>
