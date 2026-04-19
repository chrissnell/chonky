<script lang="ts">
	import { Icon } from '@chrissnell/chonky-ui';
	import type { IconName } from '@chrissnell/chonky-ui';
	// Ad-hoc Lucide passthrough example — any icon from lucide-svelte is usable
	// without being on the Chonky allowlist; see the Ad-hoc example below.
	import Sparkles from 'lucide-svelte/icons/sparkles';

	// Full allowlist, ordered roughly by theme for scanability.
	const allowlist: IconName[] = [
		// status / feedback
		'clock', 'check', 'check-check', 'alert-circle', 'refresh-cw',
		// connectivity
		'radio', 'radio-tower', 'wifi', 'wifi-off',
		// messaging
		'send', 'reply', 'message-square', 'bot',
		// people
		'user', 'users', 'user-x',
		// navigation
		'chevron-left', 'chevron-right', 'chevron-down',
		'arrow-up', 'arrow-down',
		// actions
		'plus', 'x', 'copy', 'pencil', 'trash-2', 'search', 'filter',
		'download', 'upload', 'settings',
		'more-vertical', 'more-horizontal',
		// visibility / audio
		'eye', 'eye-off', 'volume-2', 'volume-x',
		// geo
		'map-pin',
	];

	const sizes: Array<['xs' | 'sm' | 'md' | 'lg' | 'xl', number]> = [
		['xs', 12],
		['sm', 14],
		['md', 16],
		['lg', 20],
		['xl', 24],
	];
</script>

<h1>Icon</h1>
<p>
	Thin wrapper over a curated subset of <a href="https://lucide.dev">Lucide</a> icons. Enforces
	Chonky's stroke width (1.5), size tokens, and <code>currentColor</code> inheritance so icons feel
	consistent across the library. Consumers use <code>&lt;Icon name="clock" /&gt;</code> for
	allowlisted icons or pass an arbitrary Lucide component via <code>icon=&#123;...&#125;</code> for one-offs.
</p>

<h2>Sizes</h2>
<p>
	Size tokens: <code>xs</code> (12px), <code>sm</code> (14px, default), <code>md</code> (16px),
	<code>lg</code> (20px), <code>xl</code> (24px). Accepts a raw number too.
</p>
<div class="example" style="display: flex; gap: 1.5rem; align-items: center;">
	{#each sizes as [token, px]}
		<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
			<Icon name="send" size={token} />
			<span style="font-size: var(--text-xs); color: var(--color-text-dim);">
				{token} ({px}px)
			</span>
		</div>
	{/each}
	<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
		<Icon name="send" size={40} />
		<span style="font-size: var(--text-xs); color: var(--color-text-dim);">size=40</span>
	</div>
</div>

<h2>Allowlist</h2>
<p>
	Every icon currently on the allowlist, rendered at each size token. Import as
	<code>&lt;Icon name="clock" /&gt;</code> or the direct component
	<code>import &#123; ClockIcon &#125; from '@chrissnell/chonky-ui/icons'</code>.
</p>
<div class="example">
	<table class="icon-grid">
		<thead>
			<tr>
				<th>name</th>
				{#each sizes as [token]}
					<th>{token}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each allowlist as name}
				<tr>
					<td><code>{name}</code></td>
					{#each sizes as [token]}
						<td><Icon {name} size={token} /></td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<h2>Stroke width override</h2>
<p>Chonky default is 1.5. Override via <code>strokeWidth</code> only when needed.</p>
<div class="example" style="display: flex; gap: 1.5rem; align-items: center;">
	<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
		<Icon name="radio-tower" size="lg" strokeWidth={1} />
		<span style="font-size: var(--text-xs); color: var(--color-text-dim);">1.0 (thin)</span>
	</div>
	<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
		<Icon name="radio-tower" size="lg" />
		<span style="font-size: var(--text-xs); color: var(--color-text-dim);">1.5 (default)</span>
	</div>
	<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
		<Icon name="radio-tower" size="lg" strokeWidth={2} />
		<span style="font-size: var(--text-xs); color: var(--color-text-dim);">2.0 (lucide default)</span>
	</div>
	<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
		<Icon name="radio-tower" size="lg" strokeWidth={2.5} />
		<span style="font-size: var(--text-xs); color: var(--color-text-dim);">2.5 (bold)</span>
	</div>
</div>

<h2>Color inheritance</h2>
<p>
	Icons use <code>currentColor</code>; to tint one, set <code>color</code> on the parent. There is
	no <code>color</code> prop on <code>&lt;Icon /&gt;</code>.
</p>
<div class="example" style="display: flex; gap: 1rem; align-items: center;">
	<span style="color: var(--color-text);"><Icon name="alert-circle" size="md" /> default</span>
	<span style="color: var(--color-danger);"><Icon name="alert-circle" size="md" /> danger</span>
	<span style="color: var(--color-warning);"><Icon name="alert-circle" size="md" /> warning</span>
	<span style="color: var(--color-info);"><Icon name="alert-circle" size="md" /> info</span>
	<span style="color: var(--color-accent);"><Icon name="alert-circle" size="md" /> accent</span>
</div>

<h2>Accessibility</h2>
<p>
	Icons are decorative by default (<code>aria-hidden="true"</code>). Pass a <code>label</code> to
	announce the icon as an image to assistive tech (<code>role="img"</code> + <code>aria-label</code>).
</p>
<div class="example" style="display: flex; flex-direction: column; gap: 0.75rem;">
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<Icon name="trash-2" size="md" />
		<span>decorative — accompanied by visible "delete" text</span>
	</div>
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<Icon name="trash-2" size="md" label="Delete message" />
		<span>labeled — icon-only button would use this form</span>
	</div>
</div>

<h2>Ad-hoc Lucide passthrough</h2>
<p>
	For icons not on the allowlist, pass any <code>lucide-svelte</code> component directly via
	<code>icon</code>. Same stroke/color/size behavior applies.
</p>
<pre><code>{`<script>
  import { Icon } from '@chrissnell/chonky-ui';
  import Sparkles from 'lucide-svelte/icons/sparkles';
</script>

<Icon icon={Sparkles} size="md" />`}</code></pre>
<div class="example" style="display: flex; gap: 0.75rem; align-items: center;">
	<Icon icon={Sparkles} size="xs" />
	<Icon icon={Sparkles} size="sm" />
	<Icon icon={Sparkles} size="md" />
	<Icon icon={Sparkles} size="lg" />
	<Icon icon={Sparkles} size="xl" />
</div>

<h2>Direct import (tree-shake-friendly)</h2>
<p>
	For callers who want the raw component without going through <code>&lt;Icon /&gt;</code>, the
	allowlist is re-exported under <code>/icons</code> with PascalCase + <code>Icon</code> suffix.
	These ship the Lucide defaults (stroke 2, variable color) — no Chonky wrapping.
</p>
<pre><code>{`import { ClockIcon, RadioTowerIcon } from '@chrissnell/chonky-ui/icons';

<ClockIcon size={14} strokeWidth={1.5} color="currentColor" />`}</code></pre>

<h2>Props</h2>
<table class="props-table">
	<thead>
		<tr>
			<th>Prop</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>name</code></td>
			<td><code>IconName</code></td>
			<td>—</td>
			<td>Allowlisted icon name (kebab-case)</td>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td><code>LucideIconComponent</code></td>
			<td>—</td>
			<td>Ad-hoc Lucide component; wins over <code>name</code></td>
		</tr>
		<tr>
			<td><code>size</code></td>
			<td><code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | number</code></td>
			<td><code>'sm'</code> (14px)</td>
			<td>Size token or raw px</td>
		</tr>
		<tr>
			<td><code>strokeWidth</code></td>
			<td><code>number</code></td>
			<td><code>1.5</code></td>
			<td>SVG stroke width</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td>—</td>
			<td>Announced label; omit for decorative icons</td>
		</tr>
		<tr>
			<td><code>class</code></td>
			<td><code>string</code></td>
			<td>—</td>
			<td>Additional CSS classes (merged with <code>chonky-icon</code>)</td>
		</tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Icon } from '@chrissnell/chonky-ui';
</script>

<!-- decorative -->
<Icon name="clock" size="sm" />

<!-- button with labeled icon -->
<button aria-label="Delete">
  <Icon name="trash-2" size="md" label="Delete" />
</button>

<!-- tinted via parent color -->
<span style="color: var(--color-danger);">
  <Icon name="alert-circle" /> Error
</span>`}</code></pre>

<style>
	.icon-grid {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--text-sm);
	}
	.icon-grid th,
	.icon-grid td {
		padding: 0.35rem 0.6rem;
		border-bottom: 1px dotted var(--color-border);
		text-align: left;
		vertical-align: middle;
	}
	.icon-grid thead th {
		color: var(--color-text-dim);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 400;
	}
	.icon-grid thead th:not(:first-child),
	.icon-grid tbody td:not(:first-child) {
		text-align: center;
	}
	.icon-grid tbody td code {
		font-size: var(--text-xs);
		color: var(--color-text-muted);
	}
</style>
