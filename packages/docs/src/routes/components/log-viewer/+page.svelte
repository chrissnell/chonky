<script lang="ts">
	import { LogViewer } from '@chrissnell/chonky-ui';

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

	// --- Mobile/card demo: more columns + a footer snippet -----------------
	// First 3 columns become the primary line in card mode (default ordering).
	// Remaining columns render as labeled rows. The footer snippet renders
	// below each card body and (in grid mode) spans all columns.
	const mobileColumns = [
		{ key: 'time', label: 'Time', width: '80px' },
		{ key: 'type', label: 'Type', width: '60px' },
		{ key: 'src', label: 'Src', width: '120px' },
		{ key: 'channel', label: 'Channel', width: '90px' },
		{ key: 'origin', label: 'Origin', width: '90px' }
	];

	const packetEntries = [
		{
			level: 'info' as const,
			time: '12:01:14',
			type: 'POS',
			src: 'W7ION-9',
			channel: '144.39',
			origin: 'RF',
			raw: 'W7ION-9>APRS,WIDE1-1:!4738.21N/12219.45W>180/030 /A=000312 Mobile'
		},
		{
			level: 'warn' as const,
			time: '12:01:18',
			type: 'STA',
			src: 'KD7ZZZ-1',
			channel: '144.39',
			origin: 'RF',
			raw: 'KD7ZZZ-1>APRS,WIDE2-2:>QRT for the night'
		},
		{
			level: 'info' as const,
			time: '12:01:25',
			type: 'MSG',
			src: 'AC7AB',
			channel: 'IS',
			origin: 'IS',
			raw: 'AC7AB>APRS::W7ION-9  :Got your beacon, copy 5/5{42}'
		},
		{
			level: 'error' as const,
			time: '12:01:31',
			type: 'POS',
			src: 'N0CALL-3',
			channel: '144.39',
			origin: 'RF',
			raw: 'N0CALL-3>APRS,WIDE1-1:!INVALID/PACKET malformed APRS data'
		},
		{
			level: 'debug' as const,
			time: '12:01:39',
			type: 'TLM',
			src: 'KF7XYZ-2',
			channel: '144.39',
			origin: 'RF',
			raw: 'KF7XYZ-2>APRS,WIDE1-1:T#012,123,045,067,089,012,11000000'
		}
	];
</script>

<h1>LogViewer</h1>
<p>A styled log output panel with column layout, level-based coloring, and optional live indicator. Useful for displaying structured log entries.</p>

<h2>Example</h2>
<div class="example">
	<LogViewer {columns} {entries} showHeader live />
</div>

<h2>Mobile-aware: card layout + per-entry footer</h2>
<p>
	Below <code>mobileBreakpoint</code> (default <code>640px</code>), <code>mobileLayout="card"</code>
	renders one stacked card per entry. The first three columns become the primary inline line; the
	remaining columns render as <code>label: value</code> rows. The optional <code>footer</code>
	snippet renders below each card body (and on desktop spans all grid columns). To see the card
	layout, narrow the browser to ≤640px or watch the next demo, which forces card mode by embedding
	the viewer in a narrow column on a wide viewport.
</p>
<div class="example">
	{#snippet rawFooter(entry)}
		<code class="log-raw">{entry.raw}</code>
	{/snippet}
	<LogViewer
		columns={mobileColumns}
		entries={packetEntries}
		showHeader
		live
		height="320px"
		footer={rawFooter}
	/>
</div>

<h2>ResizeObserver: card mode in a narrow embed</h2>
<p>
	Detection uses <code>ResizeObserver</code> against the component root, not <code>matchMedia</code>.
	That way, embedding the viewer in a narrow column on a wide viewport (split panes, side panels,
	modals) still triggers card mode based on the actual rendered width. The container below is fixed
	at 360px wide regardless of viewport, so the viewer should switch to card mode even at desktop
	widths.
</p>
<div class="example narrow-embed-row">
	{#snippet rawFooter2(entry)}
		<code class="log-raw">{entry.raw}</code>
	{/snippet}
	<div class="narrow-embed">
		<LogViewer
			columns={mobileColumns}
			entries={packetEntries}
			showHeader
			live
			height="320px"
			footer={rawFooter2}
		/>
	</div>
	<div class="narrow-embed-caption">
		<p>↖ Forced 360px column.</p>
		<p>The viewer falls back to card mode here even though the page is wide.</p>
	</div>
</div>

<h2>Force scroll layout on mobile</h2>
<p>
	If you'd rather keep the grid and let mobile users scroll horizontally (matches pre-0.2.1
	behavior), pass <code>mobileLayout="scroll"</code>.
</p>
<div class="example">
	<LogViewer {columns} {entries} showHeader live mobileLayout="scroll" />
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>entries</code></td><td><code>LogEntry[]</code></td><td>—</td><td>Array of log entries to display</td></tr>
		<tr><td><code>columns</code></td><td><code>LogColumn[]</code></td><td>—</td><td>Column definitions for the grid layout. <strong>In card mode</strong>, the first 3 columns are primary; the rest render as <code>label: value</code> rows.</td></tr>
		<tr><td><code>showHeader</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show column header row (grid mode only)</td></tr>
		<tr><td><code>live</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show live/paused indicator dot</td></tr>
		<tr><td><code>height</code></td><td><code>string</code></td><td><code>'220px'</code></td><td>Height of the scrollable log body</td></tr>
		<tr><td><code>autoscroll</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Auto-scroll to bottom on new entries (debounced ~250ms in card mode)</td></tr>
		<tr><td><code>mobileBreakpoint</code></td><td><code>string</code></td><td><code>'640px'</code></td><td>Width threshold (CSS px or rem) below which card layout activates. Compared against the component's observed width via <code>ResizeObserver</code>, not <code>matchMedia</code>.</td></tr>
		<tr><td><code>mobileLayout</code></td><td><code>'card' | 'scroll'</code></td><td><code>'card'</code></td><td><code>'card'</code> stacks each entry into a card. <code>'scroll'</code> keeps the grid and lets it scroll horizontally.</td></tr>
		<tr><td><code>footer</code></td><td><code>{`Snippet<[entry: LogEntry]>`}</code></td><td>—</td><td>Optional per-entry footer. Spans all grid columns on desktop; renders below the card body on mobile.</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Types</h2>
<table class="props-table">
	<thead><tr><th>Type</th><th>Definition</th></tr></thead>
	<tbody>
		<tr><td><code>LogEntry</code></td><td><code>{`{ level?: 'info' | 'error' | 'warn' | 'debug'; [key: string]: any }`}</code></td></tr>
		<tr><td><code>LogColumn</code></td><td><code>{`{ key: string; label?: string; align?: 'left' | 'right' | 'center'; width?: string; class?: string; render?: Snippet<[value, entry]> }`}</code></td></tr>
	</tbody>
</table>

<h2>Card-mode CSS hooks</h2>
<p>The component root carries <code>data-mode="card"</code> (or <code>"grid"</code>) plus a <code>.log-viewer-card</code> class when the card layout is active. Card-internal classes:</p>
<table class="props-table">
	<thead><tr><th>Class</th><th>Element</th></tr></thead>
	<tbody>
		<tr><td><code>.log-card</code></td><td>One block per entry (gets the level class — <code>log-ok</code>/<code>log-err</code>/<code>log-warn</code>/<code>log-dim</code>)</td></tr>
		<tr><td><code>.log-card-primary</code></td><td>Inline row for the first 3 columns</td></tr>
		<tr><td><code>.log-card-primary-cell</code></td><td>Each primary column value</td></tr>
		<tr><td><code>.log-card-row</code></td><td>One row per secondary column</td></tr>
		<tr><td><code>.log-card-label</code></td><td>Label half of a secondary row</td></tr>
		<tr><td><code>.log-card-value</code></td><td>Value half of a secondary row</td></tr>
		<tr><td><code>.log-card-footer</code></td><td>Per-entry footer (mobile)</td></tr>
		<tr><td><code>.log-grid-footer</code></td><td>Per-entry footer (desktop, spans all columns)</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { LogViewer } from '@chrissnell/chonky-ui';

  const columns = [
    { key: 'time',    label: 'Time',    width: '80px' },
    { key: 'type',    label: 'Type',    width: '60px' },
    { key: 'src',     label: 'Source',  width: '120px' },
    { key: 'channel', label: 'Channel', width: '90px' }
  ];

  const entries = [
    { level: 'info', time: '12:01:14', type: 'POS', src: 'W7ION-9', channel: '144.39', raw: 'W7ION-9>APRS,...' }
  ];
</script>

{#snippet rawFooter(entry)}
  <code class="raw">{entry.raw}</code>
{/snippet}

<LogViewer
  {columns}
  {entries}
  showHeader
  live
  height="400px"
  mobileBreakpoint="768px"
  footer={rawFooter}
/>`}</code></pre>

<style>
	/* Demo-only styles — not part of the component. */
	.narrow-embed-row {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}
	.narrow-embed {
		flex: 0 0 360px;
		max-width: 360px;
		min-width: 0;
	}
	.narrow-embed-caption {
		flex: 1 1 auto;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}
	.narrow-embed-caption p {
		margin: 0 0 0.5rem;
	}
	:global(.log-raw) {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		opacity: 0.85;
		word-break: break-all;
	}
	@media (max-width: 640px) {
		.narrow-embed-row {
			flex-direction: column;
		}
		.narrow-embed {
			flex: 1 1 auto;
			max-width: 100%;
			width: 100%;
		}
	}
</style>
