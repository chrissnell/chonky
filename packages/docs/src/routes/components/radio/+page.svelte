<script lang="ts">
	import { Radio, RadioGroup } from '@chrissnell/chonky-ui';

	let value = $state('');
</script>

<h1>Radio</h1>
<p>Radio group and individual radio items built on bits-ui. Use RadioGroup as a container with Radio items inside.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem;">
	<RadioGroup bind:value name="fruit">
		<Radio value="apple" label="Apple" />
		<Radio value="banana" label="Banana" />
		<Radio value="cherry" label="Cherry" />
	</RadioGroup>
	<p>Selected: <code>{value || 'none'}</code></p>
</div>

<h2>Props</h2>
<h3>RadioGroup</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Selected value (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Callback when selection changes</td></tr>
		<tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Form field name</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Radio items</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Radio</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Option value (required)</td></tr>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Label text</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable this option</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Radio, RadioGroup } from '@chrissnell/chonky-ui';
  let size = $state('md');
</script>

<RadioGroup bind:value={size} name="size">
  <Radio value="sm" label="Small" />
  <Radio value="md" label="Medium" />
  <Radio value="lg" label="Large" />
</RadioGroup>`}</code></pre>
