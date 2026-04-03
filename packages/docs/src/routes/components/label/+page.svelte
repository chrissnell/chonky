<script lang="ts">
	import { Label, Input } from '@chrissnell/chonky-ui';
</script>

<h1>Label</h1>
<p>Accessible label for form controls. Wraps bits-ui Label.</p>

<h2>Example</h2>
<div class="example">
	<Label for="demo-input">Username</Label>
	<Input id="demo-input" placeholder="enter username" />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>for</code></td><td><code>string</code></td><td>—</td><td>ID of the associated form control</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Label text</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Label, Input } from '@chrissnell/chonky-ui';
</script>

<Label for="email">Email</Label>
<Input id="email" type="text" />`}</code></pre>
