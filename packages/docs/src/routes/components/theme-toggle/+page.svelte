<script lang="ts">
	import { ThemeToggle } from 'chonky-ui';

	let theme: 'dark' | 'light' = $state('light');
</script>

<h1>ThemeToggle</h1>
<p>Toggle switch for dark/light theme. Persists preference to localStorage and sets <code>data-theme</code> on the document element.</p>

<h2>Example</h2>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
	<ThemeToggle bind:theme />
	<p>Theme: <code>{theme}</code></p>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>theme</code></td><td><code>'dark' | 'light'</code></td><td><code>'light'</code></td><td>Current theme (bindable)</td></tr>
		<tr><td><code>onThemeChange</code></td><td><code>(theme: 'dark' | 'light') =&gt; void</code></td><td>—</td><td>Callback when theme changes</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { ThemeToggle } from 'chonky-ui';
  let theme = $state<'dark' | 'light'>('dark');
</script>

<ThemeToggle bind:theme />
<ThemeToggle onThemeChange={(t) => console.log(t)} />`}</code></pre>
