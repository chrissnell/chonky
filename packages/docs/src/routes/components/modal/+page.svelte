<script lang="ts">
	import { Modal, Button } from '@chrissnell/chonky-ui';

	let open = $state(false);
</script>

<h1>Modal</h1>
<p>Dialog overlay with header, body, footer, and close sub-components. Wraps bits-ui Dialog.</p>
<p>
	The body scrolls internally when its content overflows the modal's max-height; the
	<code>Modal.Header</code> and <code>Modal.Footer</code> stay pinned to the top and bottom respectively,
	so action rows remain visible no matter how long the body content is.
</p>
<p>
	<strong>Accessibility:</strong> the dialog root carries <code>role="dialog"</code> and
	<code>aria-modal="true"</code>. <code>Modal.Header</code> wraps its children in bits-ui's
	<code>Dialog.Title</code>, so the heading inside it automatically becomes the dialog's
	<code>aria-labelledby</code> target — no manual <code>id</code> wiring required. Add a
	<code>Modal.Description</code> (visible or visually hidden via a <code>sr-only</code> class)
	to contribute an <code>aria-describedby</code> target when the modal needs a description for
	screen readers.
</p>

<h2>Example</h2>
<div class="example">
	<Button onclick={() => (open = true)}>Open Modal</Button>
	<Modal.Root bind:open>
		<Modal.Header>
			<h3>Modal Title</h3>
			<Modal.Close />
		</Modal.Header>
		<Modal.Body>
			<Modal.Description>Confirm the action described below.</Modal.Description>
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

<h3>Modal.Header</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>asTitle</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Wraps children in <code>Dialog.Title</code> so the dialog's <code>aria-labelledby</code> points at the header. Set <code>false</code> to opt out (e.g. if you render your own <code>Dialog.Title</code> or the modal is intentionally untitled).</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Header content (heading and/or <code>Modal.Close</code>)</td></tr>
	</tbody>
</table>

<h3>Modal.Body / Modal.Footer</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Section content</td></tr>
	</tbody>
</table>

<h3>Modal.Description</h3>
<p>
	Opt-in subcomponent that wraps its children in bits-ui's <code>Dialog.Description</code>,
	contributing an <code>aria-describedby</code> target to the dialog root. Pass
	<code>class="sr-only"</code> (or equivalent) to keep the description screen-reader-only when
	it would be redundant visually.
</p>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Description content</td></tr>
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
    <h2>Title</h2>  <!-- becomes aria-labelledby target automatically -->
    <Modal.Close />
  </Modal.Header>
  <Modal.Body>
    <Modal.Description class="sr-only">
      Short summary of what this dialog does — becomes aria-describedby.
    </Modal.Description>
    <p>Body content here.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button onclick={() => (open = false)}>Close</Button>
    <Button variant="primary">Save</Button>
  </Modal.Footer>
</Modal.Root>`}</code></pre>
