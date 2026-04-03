<script lang="ts">
	import { Combobox, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
	let value = $state('');

	const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
</script>

<h1>Combobox</h1>
<p>Searchable dropdown combining a text input with a filterable list of options.</p>

<h2>Example</h2>
<div class="example">
	<p>Selected: {value || 'none'}</p>
	<Combobox.Root bind:open bind:value>
		<Combobox.Input placeholder="Search a fruit..." />
		<Combobox.Trigger>
			<Button size="sm">Open</Button>
		</Combobox.Trigger>
		<Combobox.Content>
			{#each fruits as fruit}
				<Combobox.Item value={fruit.toLowerCase()} label={fruit}>{fruit}</Combobox.Item>
			{/each}
		</Combobox.Content>
	</Combobox.Root>
</div>

<h2>Props</h2>
<h3>Combobox.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls dropdown visibility (bindable)</td></tr>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Selected value (bindable)</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Input, trigger, and content</td></tr>
	</tbody>
</table>

<h3>Combobox.Input</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>placeholder</code></td><td><code>string</code></td><td>—</td><td>Input placeholder text</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Combobox.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger element</td></tr>
	</tbody>
</table>

<h3>Combobox.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>sideOffset</code></td><td><code>number</code></td><td><code>4</code></td><td>Distance from trigger in px</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>List items</td></tr>
	</tbody>
</table>

<h3>Combobox.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Option value (required)</td></tr>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Display label</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td>—</td><td>Disables the option</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
	</tbody>
</table>

<h3>Combobox.Group / Combobox.GroupHeading</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Group content / heading text</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Combobox, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
  let value = $state('');

  const options = ['Apple', 'Banana', 'Cherry'];
</script>

<Combobox.Root bind:open bind:value>
  <Combobox.Input placeholder="Search..." />
  <Combobox.Trigger>
    <Button size="sm">Open</Button>
  </Combobox.Trigger>
  <Combobox.Content>
    {#each options as opt}
      <Combobox.Item value={opt.toLowerCase()} label={opt}>
        {opt}
      </Combobox.Item>
    {/each}
  </Combobox.Content>
</Combobox.Root>`}</code></pre>
