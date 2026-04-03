<script lang="ts">
	import { Checkbox } from '@chrissnell/chonky-ui';

	let checked: boolean | 'indeterminate' = $state(false);
</script>

<h1>Checkbox</h1>
<p>Checkbox built on bits-ui with support for indeterminate state, labels, and custom children.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem;">
	<Checkbox bind:checked label="Accept terms" />
	<p>State: <code>{checked}</code></p>
	<Checkbox checked={'indeterminate'} label="Indeterminate" />
	<Checkbox disabled label="Disabled" />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>checked</code></td><td><code>boolean | 'indeterminate'</code></td><td><code>false</code></td><td>Checked state (bindable)</td></tr>
		<tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean | 'indeterminate') =&gt; void</code></td><td>—</td><td>Callback when state changes</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Label text</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Custom label content (overrides label prop)</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Checkbox } from '@chrissnell/chonky-ui';
  let agreed = $state(false);
</script>

<Checkbox bind:checked={agreed} label="I agree" />
<Checkbox checked={'indeterminate'} label="Partial" />`}</code></pre>
