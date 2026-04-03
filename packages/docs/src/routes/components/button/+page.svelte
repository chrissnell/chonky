<script lang="ts">
	import { Button } from '@chrissnell/chonky-ui';
</script>

<h1>Button</h1>
<p>Accessible button with variant and size options. Wraps bits-ui Button.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
	<Button>default</Button>
	<Button variant="primary">primary</Button>
	<Button variant="accent">accent</Button>
	<Button variant="danger">danger</Button>
	<Button variant="ghost">ghost</Button>
	<Button size="sm">small</Button>
	<Button size="lg">large</Button>
	<Button disabled>disabled</Button>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>variant</code></td><td><code>'default' | 'primary' | 'accent' | 'danger' | 'ghost'</code></td><td><code>'default'</code></td><td>Visual style</td></tr>
		<tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Button size</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Button content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Button } from '@chrissnell/chonky-ui';
</script>

<Button variant="primary" onclick={() => alert('clicked')}>
  save
</Button>`}</code></pre>
