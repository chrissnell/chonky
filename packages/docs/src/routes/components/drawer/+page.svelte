<script lang="ts">
	import { Drawer, Button, Input, Label } from '@chrissnell/chonky-ui';

	let openRight = $state(false);
	let openLeft = $state(false);
	let openTop = $state(false);
	let openBottom = $state(false);
	let openForm = $state(false);
	let openLong = $state(false);
	let openExternalTrigger = $state(false);

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

	<Drawer.Root bind:open={openRight} anchor="right" aria-label="Right drawer demo">
		<Drawer.Header>
			<h3>Right Drawer</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>Anchored to the right edge. Width is <code>min(85vw, 320px)</code>.</p>
		</Drawer.Body>
		<Drawer.Footer>
			<Button onclick={() => (openRight = false)}>Close</Button>
		</Drawer.Footer>
	</Drawer.Root>

	<Drawer.Root bind:open={openLeft} anchor="left" aria-label="Left drawer demo">
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

	<Drawer.Root bind:open={openTop} anchor="top" aria-label="Top drawer demo">
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

	<Drawer.Root bind:open={openBottom} anchor="bottom" aria-label="Bottom drawer demo">
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

<h2>External trigger with <code>aria-controls</code></h2>
<p>
	When the trigger button lives <em>outside</em> the <code>Drawer.Root</code> tree
	(e.g., a top-bar hamburger), bits-ui can't auto-wire <code>aria-controls</code>
	for you. Pass an <code>id</code> to the drawer and reference it from the
	external trigger:
</p>
<div class="example">
	<button
		type="button"
		class="hamburger-demo"
		aria-controls="demo-drawer"
		aria-expanded={openExternalTrigger}
		aria-haspopup="dialog"
		aria-label="Open menu"
		onclick={() => (openExternalTrigger = true)}
	>
		Open via external trigger
	</button>
	<Drawer.Root
		bind:open={openExternalTrigger}
		anchor="left"
		id="demo-drawer"
		aria-label="External-trigger drawer demo"
	>
		<Drawer.Header>
			<h3>External Trigger</h3>
			<Drawer.Close />
		</Drawer.Header>
		<Drawer.Body>
			<p>
				The button above sets <code>aria-controls="demo-drawer"</code>, which
				matches the <code>id</code> passed to <code>Drawer.Root</code>.
			</p>
		</Drawer.Body>
	</Drawer.Root>
</div>

<h2>With Form</h2>
<div class="example">
	<Button onclick={() => (openForm = true)}>Edit Profile</Button>
	<Drawer.Root bind:open={openForm} anchor="right" aria-label="Edit profile">
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
	<Drawer.Root bind:open={openLong} anchor="right" aria-label="Long content drawer">
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

<h2>Accessibility contract</h2>
<p>
	Verified against bits-ui Dialog (vendored under
	<code>node_modules/bits-ui/dist/bits/dialog/</code>). Source-of-truth files cited
	below.
</p>
<table class="props-table">
	<thead>
		<tr>
			<th>Behavior</th>
			<th>Provided by</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Focus trap (Tab loops within drawer)</td>
			<td>bits-ui</td>
			<td>
				<code>dialog-content.svelte</code> wraps content in
				<code>FocusScope</code> with <code>trapFocus={'{true}'}</code> and
				<code>loop</code>.
			</td>
		</tr>
		<tr>
			<td>Focus moves to first tabbable on open</td>
			<td>bits-ui</td>
			<td>
				<code>FocusScope.#handleOpenAutoFocus</code> via
				<code>requestAnimationFrame</code>. Override with
				<code>onOpenAutoFocus</code>.
			</td>
		</tr>
		<tr>
			<td>Focus returns to trigger on close</td>
			<td>bits-ui</td>
			<td>
				<code>FocusScope.#handleCloseAutoFocus</code> restores via
				<code>getPreFocusMemory</code>.
			</td>
		</tr>
		<tr>
			<td>ESC closes</td>
			<td>bits-ui</td>
			<td>
				<code>EscapeLayer</code> calls <code>handleClose</code>.
				<code>onOpenChange(false)</code> fires.
			</td>
		</tr>
		<tr>
			<td>Scrim/overlay click closes</td>
			<td>bits-ui</td>
			<td>
				<code>DismissibleLayer.onInteractOutside</code> →
				<code>handleClose</code>. <code>onOpenChange(false)</code> fires.
			</td>
		</tr>
		<tr>
			<td><code>role="dialog"</code> + <code>aria-modal="true"</code></td>
			<td>bits-ui</td>
			<td>Set on Content via <code>DialogContentState.props</code>.</td>
		</tr>
		<tr>
			<td>Body scroll lock while open</td>
			<td>bits-ui</td>
			<td>
				<code>&lt;ScrollLock preventScroll&gt;</code> mounted while open by default.
			</td>
		</tr>
		<tr>
			<td>
				<code>aria-controls</code> / <code>aria-expanded</code> on trigger
			</td>
			<td>bits-ui (Dialog.Trigger only)</td>
			<td>
				Auto-wired when using <code>&lt;Dialog.Trigger&gt;</code>. For external
				triggers (e.g., a top-bar hamburger that lives outside
				<code>Drawer.Root</code>), the consumer wires it manually using the
				drawer's <code>id</code>. See "External trigger" demo above.
			</td>
		</tr>
		<tr>
			<td>Accessible name on dialog</td>
			<td>Consumer responsibility</td>
			<td>
				Either render a <code>Dialog.Title</code> inside the drawer (bits-ui
				will set <code>aria-labelledby</code> automatically), or pass
				<code>aria-label="..."</code> to <code>Drawer.Root</code> — it
				forwards to <code>Dialog.Content</code>. <strong>One of the two is
				required</strong> for screen-reader compliance.
			</td>
		</tr>
		<tr>
			<td>Safe-area insets respected</td>
			<td>Drawer.svelte (CSS)</td>
			<td>
				<code>padding-top/bottom: env(safe-area-inset-*)</code> always;
				side-anchored variants additionally pad the matching inset side.
			</td>
		</tr>
	</tbody>
</table>

<h2>Visual specs</h2>
<table class="props-table">
	<thead>
		<tr>
			<th>Property</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Width (left/right)</td>
			<td><code>min(85vw, 320px)</code></td>
		</tr>
		<tr>
			<td>Max height (top/bottom)</td>
			<td><code>min(85vh, 70vh)</code></td>
		</tr>
		<tr>
			<td>Scrim background</td>
			<td><code>rgba(0, 0, 0, 0.5)</code></td>
		</tr>
		<tr>
			<td>Slide-in animation</td>
			<td>200ms ease-out</td>
		</tr>
		<tr>
			<td>Slide-out animation</td>
			<td>150ms ease-in</td>
		</tr>
		<tr>
			<td>Reduced motion</td>
			<td>animations collapse to 1ms (PresenceManager still waits)</td>
		</tr>
	</tbody>
</table>

<h2>Keyboard test plan</h2>
<ol>
	<li>Place focus on a control <em>before</em> the trigger button.</li>
	<li>Press <kbd>Tab</kbd> until focus reaches the trigger.</li>
	<li>Press <kbd>Enter</kbd> or <kbd>Space</kbd> to open.</li>
	<li>Confirm focus has moved into the drawer (first focusable: typically the close button or first link).</li>
	<li>Press <kbd>Tab</kbd> repeatedly through every focusable control inside the drawer.</li>
	<li>From the last control, press <kbd>Tab</kbd> once more — focus must wrap to the first control (focus trap).</li>
	<li>Press <kbd>Shift+Tab</kbd> from the first control — focus must wrap to the last control.</li>
	<li>Press <kbd>Esc</kbd>.</li>
	<li>Confirm focus has returned to the original trigger button.</li>
	<li>Re-open and click the scrim/overlay outside the drawer — drawer closes, focus returns to trigger.</li>
</ol>

<h2>Props</h2>
<h3>Drawer.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls drawer visibility (bindable)</td></tr>
		<tr><td><code>anchor</code></td><td><code>'right' | 'left' | 'top' | 'bottom'</code></td><td><code>'right'</code></td><td>Edge the drawer attaches to</td></tr>
		<tr><td><code>id</code></td><td><code>string</code></td><td>auto</td><td>Forwarded to Dialog.Content. Use this id with an external trigger's <code>aria-controls</code>.</td></tr>
		<tr><td><code>aria-label</code></td><td><code>string</code></td><td>—</td><td>Required if no Dialog.Title is rendered inside. Forwarded to Dialog.Content.</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) =&gt; void</code></td><td>—</td><td>Callback when open state changes</td></tr>
		<tr><td><code>onClose</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Callback when drawer closes</td></tr>
		<tr><td><code>onOpenAutoFocus</code></td><td><code>(e: Event) =&gt; void</code></td><td>—</td><td>Passthrough to override initial focus target</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Drawer content</td></tr>
		<tr><td>Other HTML div attrs</td><td>—</td><td>—</td><td>Forwarded to Dialog.Content (e.g., <code>aria-labelledby</code>, <code>data-*</code>).</td></tr>
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
<Drawer.Root bind:open anchor="right" aria-label="Details">
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

<h3>External trigger pattern</h3>
<pre><code>{`<script>
  import { Drawer } from '@chrissnell/chonky-ui';
  let menuOpen = $state(false);
</script>

<button
  type="button"
  aria-controls="main-nav"
  aria-expanded={menuOpen}
  aria-haspopup="dialog"
  aria-label="Open menu"
  onclick={() => (menuOpen = true)}
>
  ☰
</button>

<Drawer.Root bind:open={menuOpen} anchor="left" id="main-nav" aria-label="Main navigation">
  <Drawer.Body>
    <!-- nav links -->
  </Drawer.Body>
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
	.hamburger-demo {
		font-family: var(--font-mono);
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
		padding: 0.5rem 0.75rem;
		cursor: pointer;
	}
	.hamburger-demo:hover {
		background: var(--color-surface-raised);
	}
</style>
