<script lang="ts">
	import { Toaster, toast, Button } from 'chonky-ui';
</script>

<h1>Toast</h1>
<p>Ephemeral notification messages triggered via a <code>toast()</code> function. Renders in a global <code>Toaster</code> container with auto-dismiss.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
	<Button onclick={() => toast('This is an info toast', 'info')}>Info</Button>
	<Button variant="primary" onclick={() => toast('Operation succeeded', 'success')}>Success</Button>
	<Button variant="danger" onclick={() => toast('Something went wrong', 'danger')}>Danger</Button>
</div>
<Toaster />

<h2>toast() Function</h2>
<table class="props-table">
	<thead><tr><th>Param</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>message</code></td><td><code>string</code></td><td>—</td><td>Toast message text</td></tr>
		<tr><td><code>variant</code></td><td><code>'success' | 'danger' | 'info'</code></td><td><code>'info'</code></td><td>Visual style</td></tr>
		<tr><td><code>duration</code></td><td><code>number</code></td><td><code>3000</code></td><td>Auto-dismiss time in ms (0 = manual)</td></tr>
	</tbody>
</table>
<p>Returns the toast <code>id</code> (string), which can be passed to <code>dismiss(id)</code> for manual removal.</p>

<h2>Components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>Toaster</code></td><td>Renders all active toasts. Place once in your layout.</td></tr>
		<tr><td><code>Toast</code></td><td>Individual toast element (used internally by Toaster).</td></tr>
	</tbody>
</table>

<h2>Toast Props (internal)</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>item</code></td><td><code>ToastItem</code></td><td>—</td><td>Toast data object with id, message, variant, duration</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Toaster, toast, dismiss, Button } from 'chonky-ui';
</script>

<!-- Place Toaster once in your layout -->
<Toaster />

<Button onclick={() => toast('Saved successfully', 'success')}>
  Save
</Button>

<Button onclick={() => toast('Connection lost', 'danger', 5000)}>
  Error (5s)
</Button>

<!-- Manual dismiss -->
<Button onclick={() => {
  const id = toast('Processing...', 'info', 0);
  setTimeout(() => dismiss(id), 2000);
}}>
  Manual dismiss
</Button>`}</code></pre>
