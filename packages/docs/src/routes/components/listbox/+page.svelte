<script lang="ts">
	import { Listbox } from '@chrissnell/chonky-ui';

	let selected = $state('opt-1');

	const items = [
		{ value: 'opt-1', label: 'Option One' },
		{ value: 'opt-2', label: 'Option Two' },
		{ value: 'opt-3', label: 'Option Three' },
		{ value: 'opt-4', label: 'Disabled Option', disabled: true },
	];
</script>

<h1>Listbox</h1>
<p>Accessible list of selectable items with keyboard navigation. Uses native ARIA listbox/option roles.</p>

<h2>Example</h2>
<div class="example">
	<p>Selected: {selected}</p>
	<Listbox.Root>
		{#each items as item}
			<Listbox.Item
				value={item.value}
				selected={selected === item.value}
				disabled={item.disabled ?? false}
				onSelect={(v) => (selected = v)}
			>
				{item.label}
			</Listbox.Item>
		{/each}
	</Listbox.Root>
</div>

<h2>Props</h2>
<h3>Listbox.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Listbox items</td></tr>
	</tbody>
</table>

<h3>Listbox.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Item value (required)</td></tr>
		<tr><td><code>selected</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the item is selected</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the item</td></tr>
		<tr><td><code>onSelect</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Callback when item is selected</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Item content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Listbox } from '@chrissnell/chonky-ui';

  let selected = $state('opt-1');

  const items = [
    { value: 'opt-1', label: 'Option One' },
    { value: 'opt-2', label: 'Option Two' },
    { value: 'opt-3', label: 'Option Three' },
  ];
</script>

<Listbox.Root>
  {#each items as item}
    <Listbox.Item
      value={item.value}
      selected={selected === item.value}
      onSelect={(v) => (selected = v)}
    >
      {item.label}
    </Listbox.Item>
  {/each}
</Listbox.Root>`}</code></pre>
