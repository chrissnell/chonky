<script lang="ts">
	import { Collapsible } from '@chrissnell/chonky-ui';
</script>

<h1>Collapsible</h1>
<p>A single collapsible section that can be toggled open and closed. Wraps bits-ui Collapsible.</p>

<h2>Example</h2>
<div class="example">
	<Collapsible.Root>
		<Collapsible.Trigger>Toggle details</Collapsible.Trigger>
		<Collapsible.Content>
			<p>Here are some hidden details that can be revealed by clicking the trigger above.</p>
		</Collapsible.Content>
	</Collapsible.Root>
</div>

<h2>Sub-components</h2>

<h3>Collapsible.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the section is open (bindable)</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) =&gt; void</code></td><td>—</td><td>Called when open state changes</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the collapsible</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Collapsible.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>Collapsible.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Collapsible } from '@chrissnell/chonky-ui';
</script>

<Collapsible.Root>
  <Collapsible.Trigger>Show more</Collapsible.Trigger>
  <Collapsible.Content>
    <p>Revealed content goes here.</p>
  </Collapsible.Content>
</Collapsible.Root>`}</code></pre>
