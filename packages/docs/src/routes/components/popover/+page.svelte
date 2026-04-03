<script lang="ts">
	import { Popover, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
</script>

<h1>Popover</h1>
<p>Floating content panel anchored to a trigger element. Supports controlled open state and a close button.</p>

<h2>Example</h2>
<div class="example">
	<Popover.Root bind:open>
		<Popover.Trigger>
			<Button>Toggle Popover</Button>
		</Popover.Trigger>
		<Popover.Content>
			<p style="margin: 0 0 0.5rem;">Popover content goes here.</p>
			<Popover.Close>
				<Button size="sm">Close</Button>
			</Popover.Close>
		</Popover.Content>
	</Popover.Root>
</div>

<h2>Props</h2>
<h3>Popover.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls visibility (bindable)</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger and content</td></tr>
	</tbody>
</table>

<h3>Popover.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger element</td></tr>
	</tbody>
</table>

<h3>Popover.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>side</code></td><td><code>'top' | 'right' | 'bottom' | 'left'</code></td><td><code>'bottom'</code></td><td>Preferred side of the trigger</td></tr>
		<tr><td><code>sideOffset</code></td><td><code>number</code></td><td><code>4</code></td><td>Distance from trigger in px</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Popover body</td></tr>
	</tbody>
</table>

<h3>Popover.Close</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Close button content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Popover, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
</script>

<Popover.Root bind:open>
  <Popover.Trigger>
    <Button>Toggle</Button>
  </Popover.Trigger>
  <Popover.Content side="bottom">
    <p>Popover content here.</p>
    <Popover.Close>
      <Button size="sm">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>`}</code></pre>
