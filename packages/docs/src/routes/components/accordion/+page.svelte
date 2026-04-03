<script lang="ts">
	import { Accordion } from '@chrissnell/chonky-ui';
</script>

<h1>Accordion</h1>
<p>Vertically stacked collapsible sections. Wraps bits-ui Accordion.</p>

<h2>Example</h2>
<div class="example">
	<Accordion.Root type="single" value="item-1">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Section one</Accordion.Trigger>
			<Accordion.Content>Content for section one.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Section two</Accordion.Trigger>
			<Accordion.Content>Content for section two.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Section three</Accordion.Trigger>
			<Accordion.Content>Content for section three.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>

<h2>Sub-components</h2>

<h3>Accordion.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>type</code></td><td><code>'single' | 'multiple'</code></td><td><code>'single'</code></td><td>Whether one or many items can be open</td></tr>
		<tr><td><code>value</code></td><td><code>string | string[]</code></td><td><code>''</code></td><td>Active item value(s) (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string | string[]) =&gt; void</code></td><td>—</td><td>Called when active item changes</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Accordion.Item</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Item identifier</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Accordion.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Accordion.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Accordion } from '@chrissnell/chonky-ui';
</script>

<Accordion.Root type="single" value="first">
  <Accordion.Item value="first">
    <Accordion.Trigger>First section</Accordion.Trigger>
    <Accordion.Content>First section content.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="second">
    <Accordion.Trigger>Second section</Accordion.Trigger>
    <Accordion.Content>Second section content.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}</code></pre>
