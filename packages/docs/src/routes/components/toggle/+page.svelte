<script lang="ts">
	import { Toggle } from '@chrissnell/chonky-ui';

	let checked = $state(false);
</script>

<h1>Toggle</h1>
<p>Switch toggle built on bits-ui. Supports label, disabled state, and bindable checked value.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem;">
	<Toggle bind:checked label="Notifications" />
	<p>Checked: <code>{checked}</code></p>
	<Toggle checked={true} label="Always on" disabled />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Toggle state (bindable)</td></tr>
		<tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) =&gt; void</code></td><td>—</td><td>Callback when state changes</td></tr>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Label text</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Toggle } from '@chrissnell/chonky-ui';
  let checked = $state(false);
</script>

<Toggle bind:checked label="Dark mode" />
<Toggle checked={true} disabled label="Locked" />`}</code></pre>
