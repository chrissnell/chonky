<script lang="ts">
	import { PinInput } from '@chrissnell/chonky-ui';
	import { browser } from '$app/environment';

	let value = $state('');
</script>

<h1>PinInput</h1>
<p>PIN/OTP code input built on bits-ui. Renders individual cells for each character.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem;">
	{#if browser}
		<PinInput bind:value length={4} />
		<p>Value: <code>{value}</code></p>
		<PinInput length={6} placeholder="*" />
	{/if}
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Entered value (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Callback when value changes</td></tr>
		<tr><td><code>length</code></td><td><code>number</code></td><td><code>4</code></td><td>Number of input cells</td></tr>
		<tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>'○'</code></td><td>Placeholder for empty cells</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable interaction</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { PinInput } from '@chrissnell/chonky-ui';
  let code = $state('');
</script>

<PinInput bind:value={code} length={6} />
<PinInput placeholder="*" />`}</code></pre>
