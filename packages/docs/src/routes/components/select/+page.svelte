<script lang="ts">
	import { Select } from 'chonky-ui';

	let value = $state('');

	const options = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<h1>Select</h1>
<p>Dropdown select built on bits-ui. Supports bindable value and custom placeholder.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px;">
	<Select {options} bind:value placeholder="Pick a fruit..." />
	<p>Selected: <code>{value || 'none'}</code></p>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>options</code></td><td><code>{'{ value: string; label: string }[]'}</code></td><td>—</td><td>Array of selectable options (required)</td></tr>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Selected value (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Callback when value changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>'Select...'</code></td><td>Placeholder text</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Select } from 'chonky-ui';
  let value = $state('');

  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' }
  ];
</script>

<Select {options} bind:value placeholder="Choose..." />`}</code></pre>
