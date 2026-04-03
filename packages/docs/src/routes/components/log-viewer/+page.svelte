<script lang="ts">
	import { LogViewer } from 'chonky-ui';

	const columns = [
		{ key: 'time', label: 'Time', width: '80px' },
		{ key: 'level', label: 'Level', width: '50px' },
		{ key: 'message', label: 'Message', width: '1fr' }
	];

	const entries = [
		{ level: 'info' as const, time: '10:00', message: 'Server started on port 3000' },
		{ level: 'info' as const, time: '10:01', message: 'Database connected' },
		{ level: 'warn' as const, time: '10:02', message: 'Cache miss rate above threshold' },
		{ level: 'error' as const, time: '10:03', message: 'Failed to connect to Redis' },
		{ level: 'debug' as const, time: '10:04', message: 'Retrying connection...' },
		{ level: 'info' as const, time: '10:05', message: 'Redis reconnected' }
	];
</script>

<h1>LogViewer</h1>
<p>A styled log output panel with column layout, level-based coloring, and optional live indicator. Useful for displaying structured log entries.</p>

<h2>Example</h2>
<div class="example">
	<LogViewer {columns} {entries} showHeader live />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>entries</code></td><td><code>LogEntry[]</code></td><td>—</td><td>Array of log entries to display</td></tr>
		<tr><td><code>columns</code></td><td><code>LogColumn[]</code></td><td>—</td><td>Column definitions for the grid layout</td></tr>
		<tr><td><code>showHeader</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show column header row</td></tr>
		<tr><td><code>live</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show live/paused indicator dot</td></tr>
		<tr><td><code>height</code></td><td><code>string</code></td><td><code>'220px'</code></td><td>Height of the scrollable log body</td></tr>
		<tr><td><code>autoscroll</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Auto-scroll to bottom on new entries</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Types</h2>
<table class="props-table">
	<thead><tr><th>Type</th><th>Definition</th></tr></thead>
	<tbody>
		<tr><td><code>LogEntry</code></td><td><code>{`{ level: 'info' | 'error' | 'warn' | 'debug'; [key: string]: string }`}</code></td></tr>
		<tr><td><code>LogColumn</code></td><td><code>{`{ key: string; label?: string; align?: 'left' | 'right' | 'center'; width?: string }`}</code></td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { LogViewer } from 'chonky-ui';

  const columns = [
    { key: 'time', label: 'Time', width: '80px' },
    { key: 'level', label: 'Level', width: '50px' },
    { key: 'message', label: 'Message', width: '1fr' }
  ];

  const entries = [
    { level: 'info', time: '10:00', message: 'Server started on port 3000' },
    { level: 'warn', time: '10:02', message: 'Cache miss rate above threshold' },
    { level: 'error', time: '10:03', message: 'Failed to connect to Redis' },
    { level: 'debug', time: '10:04', message: 'Retrying connection...' },
  ];
</script>

<LogViewer {columns} {entries} showHeader live />`}</code></pre>
