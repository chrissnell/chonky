<script lang="ts">
	import { ScrollArea } from '@chrissnell/chonky-ui';
</script>

<h1>ScrollArea</h1>
<p>Custom scrollable container with styled scrollbars. Wraps bits-ui ScrollArea.</p>

<h2>Example</h2>
<div class="example">
	<ScrollArea.Root style="height: 150px; width: 300px; border: 1px solid var(--color-border);">
		<ScrollArea.Viewport>
			<div style="padding: 1rem;">
				{#each Array(20) as _, i}
					<p>Scrollable item {i + 1}</p>
				{/each}
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar orientation="vertical" />
	</ScrollArea.Root>
</div>

<h2>Sub-components</h2>

<h3>ScrollArea.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>ScrollArea.Viewport</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h3>ScrollArea.Scrollbar</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>orientation</code></td><td><code>'vertical' | 'horizontal'</code></td><td><code>'vertical'</code></td><td>Scrollbar direction</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ScrollArea } from '@chrissnell/chonky-ui';
</script>

<ScrollArea.Root style="height: 200px;">
  <ScrollArea.Viewport>
    <!-- scrollable content -->
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical" />
</ScrollArea.Root>`}</code></pre>
