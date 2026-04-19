<script lang="ts">
	import { Drawer, Button, Input, Label } from '@chrissnell/chonky-ui';

	let openRight = $state(false);
	let openLeft = $state(false);
	let openTop = $state(false);
	let openBottom = $state(false);
	let openForm = $state(false);
	let openLong = $state(false);

	let formName = $state('');
	let formEmail = $state('');

	function saveForm() {
		// no-op demo
		openForm = false;
	}
</script>

<h1>Drawer</h1>
<p>
	Edge-anchored sheet / panel built on bits-ui Dialog. Supports <code>right</code>,
	<code>left</code>, <code>top</code>, and <code>bottom</code> anchors. Backdrop
	click and Escape close; focus is trapped while open.
</p>

<h2>Anchors</h2>
<div class="example">
	<div class="demo-row">
		<Button onclick={() => (openRight = true)}>Open Right</Button>
		<Button onclick={() => (openLeft = true)}>Open Left</Button>
		<Button onclick={() => (openTop = true)}>Open Top</Button>
		<Button onclick={() => (openBottom = true)}>Open Bottom</Button>
	</div>

	<Drawer.Root bind:open={openRight} anchor="right">
		<Drawer.Header>
			<h3>Right Drawer</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>Anchored to the right edge. Default 320px width on desktop, full-width on mobile.</p>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openRight = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>

	<Drawer.Root bind:open={openLeft} anchor="left">
		<Drawer.Header>
			<h3>Left Drawer</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>Anchored to the left edge.</p>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openLeft = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>

	<Drawer.Root bind:open={openTop} anchor="top">
		<Drawer.Header>
			<h3>Top Drawer</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>Anchored to the top edge. Height is content-driven, capped at 70vh.</p>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openTop = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>

	<Drawer.Root bind:open={openBottom} anchor="bottom">
		<Drawer.Header>
			<h3>Bottom Drawer</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>Anchored to the bottom edge. Common mobile pattern for sheets.</p>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openBottom = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>
</div>

<h2>With Form</h2>
<div class="example">
	<Button onclick={() => (openForm = true)}>Edit Profile</Button>
	<Drawer.Root bind:open={openForm} anchor="right">
		<Drawer.Header>
			<h3>Edit Profile</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<div class="form-field">
				<Label for="drawer-name">Name</Label>
				<Input id="drawer-name" bind:value={formName} placeholder="Your name" />
			</div>
			<div class="form-field">
				<Label for="drawer-email">Email</Label>
				<Input id="drawer-email" type="email" bind:value={formEmail} placeholder="you@example.com" />
			</div>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openForm = false)}>Cancel</Button>
			<Button variant="primary" onclick={saveForm}>Save</Button>
		</Drawer.Footer>
	</Drawer.Root>
</div>

<h2>Long Content (Scrolling)</h2>
<div class="example">
	<Button onclick={() => (openLong = true)}>Open Long Drawer</Button>
	<Drawer.Root bind:open={openLong} anchor="right">
		<Drawer.Header>
			<h3>Long Content</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			{#each Array.from({ length: 24 }, (_, i) => i + 1) as n}
				<p>
					Paragraph {n}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			{/each}
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openLong = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>
</div>

<h2>Props</h2>
<h3>Drawer.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls drawer visibility (bindable)</td></tr>
		<tr><td><code>anchor</code></td><td><code>'right' | 'left' | 'top' | 'bottom'</code></td><td><code>'right'</code></td><td>Edge the drawer attaches to</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) =&gt; void</code></td><td>—</td><td>Callback when open state changes</td></tr>
		<tr><td><code>onClose</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when drawer closes</td></tr>
		<tr><td><code>onOpenAutoFocus</code></td><td><code>(e: Event) =&gt; void</code></td><td>—</td><td>Passthrough to override initial focus target</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Drawer content</td></tr>
	</tbody>
</table>

<h3>Drawer.Header / Drawer.Body / Drawer.Footer</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Section content</td></tr>
	</tbody>
</table>

<h3>Drawer.Close</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td><code>"x"</code></td><td>Close button content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Drawer, Button } from '@chrissnell/chonky-ui';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open</Button>
<Drawer.Root bind:open anchor="right">
  <Drawer.Header>
    <h3>Details</h3>
    <Drawer.Close />
  </Drawer.Header>
  <Drawer.Body>
    <p>Panel content here.</p>
  </Drawer.Body>
  <Drawer.Footer>
    <Button onclick={() => (open = false)}>Close</Button>
  </Drawer.Footer>
</Drawer.Root>`}</code></pre>

<style>
	.demo-row {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.form-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 1rem;
	}
</style>
