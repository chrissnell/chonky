<script lang="ts">
	import { LinkPreview } from '@chrissnell/chonky-ui';
</script>

<h1>LinkPreview</h1>
<p>Hover preview card for links. Shows content when the user hovers over a trigger link.</p>

<h2>Example</h2>
<div class="example">
	<LinkPreview.Root>
		<LinkPreview.Trigger href="https://svelte.dev">
			Hover to preview Svelte
		</LinkPreview.Trigger>
		<LinkPreview.Content>
			<div style="padding: 0.75rem;">
				<strong>Svelte</strong>
				<p style="margin: 0.25rem 0 0;">Cybernetically enhanced web apps. A compiler that converts declarative components into efficient JavaScript.</p>
			</div>
		</LinkPreview.Content>
	</LinkPreview.Root>
</div>

<h2>Props</h2>
<h3>LinkPreview.Root</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>openDelay</code></td><td><code>number</code></td><td><code>500</code></td><td>Delay in ms before preview opens</td></tr>
		<tr><td><code>closeDelay</code></td><td><code>number</code></td><td><code>300</code></td><td>Delay in ms before preview closes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Trigger and content</td></tr>
	</tbody>
</table>

<h3>LinkPreview.Trigger</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>href</code></td><td><code>string</code></td><td>—</td><td>Link URL</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Link text</td></tr>
	</tbody>
</table>

<h3>LinkPreview.Content</h3>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>side</code></td><td><code>'top' | 'right' | 'bottom' | 'left'</code></td><td><code>'bottom'</code></td><td>Preferred side of the trigger</td></tr>
		<tr><td><code>sideOffset</code></td><td><code>number</code></td><td><code>4</code></td><td>Distance from trigger in px</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Preview content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { LinkPreview } from '@chrissnell/chonky-ui';
</script>

<LinkPreview.Root>
  <LinkPreview.Trigger href="https://example.com">
    Hover to preview
  </LinkPreview.Trigger>
  <LinkPreview.Content>
    <div style="padding: 0.75rem;">
      <strong>Example Site</strong>
      <p>A description of the linked content.</p>
    </div>
  </LinkPreview.Content>
</LinkPreview.Root>`}</code></pre>
