<script lang="ts">
	import { Badge, NotificationBadge } from '@chrissnell/chonky-ui';

	// Demo counter for the nav-mock interactive example.
	let liveCount = $state(3);
</script>

<h1>Badge</h1>
<p>Inline status indicator with color variants.</p>

<h2>Example</h2>
<div class="example" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
	<Badge>default</Badge>
	<Badge variant="success">success</Badge>
	<Badge variant="warning">warning</Badge>
	<Badge variant="danger">danger</Badge>
	<Badge variant="info">info</Badge>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>variant</code></td><td><code>'default' | 'success' | 'warning' | 'danger' | 'info'</code></td><td><code>'default'</code></td><td>Color variant</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
		<tr><td><code>children</code></td><td><code>Snippet</code></td><td>—</td><td>Badge content</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Badge } from '@chrissnell/chonky-ui';
</script>

<Badge variant="success">online</Badge>`}</code></pre>

<hr style="margin: 3rem 0; border: none; border-top: 1px dotted var(--color-border);" />

<h1>NotificationBadge</h1>
<p>
	Compact count pill that auto-hides at zero and caps large counts (e.g. <code>99+</code>).
	Companion to <code>Badge</code> — use <code>Badge</code> for inline status text,
	<code>NotificationBadge</code> for unread/pending counts adjacent to an element.
</p>

<h2>Badge vs NotificationBadge</h2>
<p>Side-by-side comparison:</p>
<div class="example" style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<span style="color: var(--color-text-dim); font-size: var(--text-xs);">Badge:</span>
		<Badge variant="danger">unread</Badge>
	</div>
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<span style="color: var(--color-text-dim); font-size: var(--text-xs);">NotificationBadge:</span>
		<NotificationBadge count={5} />
	</div>
</div>

<h2>Counts</h2>
<p>Count=0 is hidden by default; over-cap counts render as <code>{'${cap}+'}</code>.</p>
<div class="example" style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
	<div class="nb-cell">
		<NotificationBadge count={0} />
		<span class="nb-cell-label">count=0 (hidden)</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={0} showZero />
		<span class="nb-cell-label">count=0, showZero</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={1} />
		<span class="nb-cell-label">count=1</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={12} />
		<span class="nb-cell-label">count=12</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={100} />
		<span class="nb-cell-label">count=100 (default cap)</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={9999} />
		<span class="nb-cell-label">count=9999 (default cap)</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={9999} cap={999} />
		<span class="nb-cell-label">count=9999, cap=999</span>
	</div>
</div>

<h2>Adjacent to a nav link</h2>
<p>
	Typical use case: positioned next to a nav item in a sidebar, indicating unread items
	for that destination. The badge's fixed small footprint slots neatly against text.
</p>
<div class="example">
	<nav class="nb-sidebar-mock">
		<a class="nb-nav-link" href="javascript:void(0)">
			<span>Inbox</span>
			<NotificationBadge count={liveCount} />
		</a>
		<a class="nb-nav-link" href="javascript:void(0)">
			<span>Drafts</span>
			<NotificationBadge count={0} />
		</a>
		<a class="nb-nav-link" href="javascript:void(0)">
			<span>Broadcasts</span>
			<NotificationBadge count={142} />
		</a>
		<a class="nb-nav-link" href="javascript:void(0)">
			<span>Archive</span>
		</a>
	</nav>
	<div style="margin-top: 0.75rem; display: flex; gap: 0.5rem; align-items: center;">
		<button
			type="button"
			class="nb-btn"
			onclick={() => (liveCount = Math.max(0, liveCount - 1))}
		>−</button>
		<span style="font-size: var(--text-xs); color: var(--color-text-muted);">
			Inbox count: {liveCount}
		</span>
		<button
			type="button"
			class="nb-btn"
			onclick={() => (liveCount += 1)}
		>+</button>
	</div>
</div>

<h2>Accessibility</h2>
<p>
	Renders <code>role="status"</code> with an auto-generated <code>aria-label</code>
	like <code>"5 unread"</code> or <code>"99+ unread"</code>. Screen readers announce
	the label rather than the visible digits, so <code>99+</code> reads as
	<code>"99+ unread"</code>. Override via the <code>label</code> prop for different
	semantics (e.g. <code>"3 in queue"</code>, <code>"12 pending approvals"</code>).
</p>
<div class="example" style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
	<div class="nb-cell">
		<NotificationBadge count={3} />
		<span class="nb-cell-label">default label ("3 unread")</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={3} label="3 in queue" />
		<span class="nb-cell-label">label="3 in queue"</span>
	</div>
	<div class="nb-cell">
		<NotificationBadge count={150} label="150 pending approvals" />
		<span class="nb-cell-label">over-cap, custom label</span>
	</div>
</div>

<h2>Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>count</code></td><td><code>number</code></td><td>—</td><td>Required. Count to display.</td></tr>
		<tr><td><code>cap</code></td><td><code>number</code></td><td><code>99</code></td><td>Counts above this render as <code>{'${cap}+'}</code>.</td></tr>
		<tr><td><code>showZero</code></td><td><code>boolean</code></td><td><code>false</code></td><td>When <code>false</code>, count=0 renders nothing.</td></tr>
		<tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Override the default <code>aria-label</code>.</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes.</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { NotificationBadge } from '@chrissnell/chonky-ui';
</script>

<!-- Hidden when count is 0 -->
<NotificationBadge count={unreadCount} />

<!-- Always visible, even at zero -->
<NotificationBadge count={unreadCount} showZero />

<!-- Custom cap and aria label -->
<NotificationBadge count={pending} cap={999} label={\`\${pending} pending approvals\`} />`}</code></pre>

<style>
	.nb-cell {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		min-height: 2rem;
	}
	.nb-cell-label {
		font-size: var(--text-xs);
		color: var(--color-text-dim);
	}

	.nb-sidebar-mock {
		width: 220px;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 0.5rem;
		background: var(--color-bg);
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
	.nb-nav-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.35rem 0.5rem;
		border-radius: var(--radius);
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		text-decoration: none;
	}
	.nb-nav-link:hover {
		color: var(--color-text);
		background: var(--color-surface);
	}

	.nb-btn {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		color: var(--color-text);
		font-family: var(--font-mono);
		padding: 0.1rem 0.5rem;
		cursor: pointer;
	}
	.nb-btn:hover {
		border-color: var(--color-primary);
	}
</style>
