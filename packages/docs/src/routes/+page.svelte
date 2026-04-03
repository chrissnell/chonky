<script lang="ts">
	import { Button, Badge, Box, BoxHeader, Spinner, Dot } from 'chonky-ui';
</script>

<h1>chonky-ui</h1>
<p>A Svelte 5 component library wrapping bits-ui with an opinionated monospace design system. Dark theme default, no shadows, no gradients — just clean borders and sharp type.</p>

<h2>Install</h2>
<pre><code>npm install chonky-ui bits-ui @internationalized/date</code></pre>

<h2>Setup</h2>
<p>Import the CSS once in your root layout:</p>
<pre><code>{`// src/routes/+layout.svelte
<script>
  import 'chonky-ui/css';
</script>`}</code></pre>

<h2>Quick start</h2>
<pre><code>{`<script>
  import { Button, Badge, Toggle } from 'chonky-ui';
</script>

<Button variant="primary">save</Button>
<Badge variant="success">online</Badge>
<Toggle label="dark mode" />`}</code></pre>

<h2>Preview</h2>
<div class="example" style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
	<Button>default</Button>
	<Button variant="primary">primary</Button>
	<Button variant="accent">accent</Button>
	<Button variant="danger">danger</Button>
	<Button variant="ghost">ghost</Button>
	<Badge>default</Badge>
	<Badge variant="success">online</Badge>
	<Badge variant="danger">error</Badge>
	<Spinner />
	<Dot />
	<Dot on={true} />
</div>

<h2>Components</h2>
<p>56 components across 6 categories. Browse the sidebar to see each one with live examples, props tables, and usage snippets.</p>

<Box>
	<BoxHeader>categories</BoxHeader>
	<div style="padding: 0.75rem; font-size: var(--text-sm); color: var(--color-text-muted);">
		<p style="margin: 0.25rem 0;"><strong>Core</strong> — Button, Badge, Box, Table, Separator, Label, Spinner, Dot, and more</p>
		<p style="margin: 0.25rem 0;"><strong>Navigation</strong> — Tabs, Breadcrumb, Pagination, Accordion, Toolbar</p>
		<p style="margin: 0.25rem 0;"><strong>Overlay</strong> — Modal, Tooltip, Popover, DropdownMenu, Command palette</p>
		<p style="margin: 0.25rem 0;"><strong>Form</strong> — Input, Select, Toggle, Checkbox, Radio, Slider, Progress</p>
		<p style="margin: 0.25rem 0;"><strong>Date/Time</strong> — Calendar, DatePicker, DateField, TimeField</p>
		<p style="margin: 0.25rem 0;"><strong>Custom</strong> — LogViewer, Toast notifications</p>
	</div>
</Box>
