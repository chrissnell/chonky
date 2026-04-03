<script lang="ts">
	import { Input } from 'chonky-ui';

	let value = $state('');
</script>

<h1>Input</h1>
<p>Text input with error state support. Extends native HTML input attributes.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<Input placeholder="Type something..." bind:value />
	<p>Current value: <code>{value}</code></p>
	<Input type="password" placeholder="Password" />
	<Input error="This field is required" placeholder="With error" />
	<Input disabled placeholder="Disabled" />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>type</code></td><td><code>'text' | 'password' | 'number'</code></td><td><code>'text'</code></td><td>Input type</td></tr>
		<tr><td><code>error</code></td><td><code>string</code></td><td>—</td><td>Error message displayed below input</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>
<p>Also accepts all native <code>&lt;input&gt;</code> attributes (placeholder, disabled, etc.).</p>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Input } from 'chonky-ui';
  let value = $state('');
</script>

<Input bind:value placeholder="Enter name" />
<Input type="password" placeholder="Password" />
<Input error="Required field" />`}</code></pre>
