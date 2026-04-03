<script lang="ts">
	import { Modal, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
</script>

<h1>Modal</h1>
<p>Dialog overlay with header, body, footer, and close sub-components. Wraps bits-ui Dialog.</p>

<h2>Example</h2>
<div class="example">
	<Button onclick={() => (open = true)}>Open Modal</Button>
	<Modal.Root bind:open>
		<Modal.Header>
			<h3>Modal Title</h3>
			<Modal.Close />
		</Modal.Header>
		<Modal.Body>
			<p>This is the modal body content.</p>
		</Modal.Body>
		<Modal.Footer>
			<Button onclick={() => (open = false)}>Close</Button>
			<Button variant="primary" onclick={() => (open = false)}>Confirm</Button>
		</Modal.Footer>
	</Modal.Root>
</div>

<h2>Props</h2>
<h3>Modal.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls modal visibility (bindable)</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) =&gt; void</code></td><td>—</td><td>Callback when open state changes</td></tr>
		<tr><td><code>onclose</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when modal closes</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Modal content</td></tr>
	</tbody>
</table>

<h3>Modal.Header / Modal.Body / Modal.Footer</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Section content</td></tr>
	</tbody>
</table>

<h3>Modal.Close</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td><code>"x"</code></td><td>Close button content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Modal, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open Modal</Button>
<Modal.Root bind:open>
  <Modal.Header>
    <h3>Title</h3>
    <Modal.Close />
  </Modal.Header>
  <Modal.Body>
    <p>Body content here.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button onclick={() => (open = false)}>Close</Button>
    <Button variant="primary">Save</Button>
  </Modal.Footer>
</Modal.Root>`}</code></pre>
