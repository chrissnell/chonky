<script lang="ts">
	import { Tabs } from '@chrissnell/chonky-ui';
</script>

<h1>Tabs</h1>
<p>Tabbed content panels. Wraps bits-ui Tabs.</p>

<h2>Example</h2>
<div class="example">
	<Tabs.Root value="one">
		<Tabs.List>
			<Tabs.Trigger value="one">Tab one</Tabs.Trigger>
			<Tabs.Trigger value="two">Tab two</Tabs.Trigger>
			<Tabs.Trigger value="three">Tab three</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="one">Content for tab one</Tabs.Content>
		<Tabs.Content value="two">Content for tab two</Tabs.Content>
		<Tabs.Content value="three">Content for tab three</Tabs.Content>
	</Tabs.Root>
</div>

<h2>Sub-components</h2>

<h3>Tabs.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td><code>''</code></td><td>Active tab value (bindable)</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Called when active tab changes</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Tabs.List</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Tabs.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Tab identifier</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Tabs.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Matching tab identifier</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Tabs } from '@chrissnell/chonky-ui';
</script>

<Tabs.Root value="first">
  <Tabs.List>
    <Tabs.Trigger value="first">First</Tabs.Trigger>
    <Tabs.Trigger value="second">Second</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="first">First panel</Tabs.Content>
  <Tabs.Content value="second">Second panel</Tabs.Content>
</Tabs.Root>`}</code></pre>
