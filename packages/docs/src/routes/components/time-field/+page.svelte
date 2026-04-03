<script lang="ts">
	import { TimeField } from 'chonky-ui';
	import { Time } from '@internationalized/date';

	let value = $state(new Time(14, 30));
</script>

<h1>TimeField</h1>
<p>A segmented time input field. Each part (hour, minute, second) is an individually editable segment.</p>

<h2>Example</h2>
<div class="example">
	<TimeField.Root bind:value>
		<TimeField.Label>Time</TimeField.Label>
		<TimeField.Input />
	</TimeField.Root>
	<p>Value: {value ? `${String(value.hour).padStart(2, '0')}:${String(value.minute).padStart(2, '0')}` : 'none'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>TimeValue</code></td><td>—</td><td>Current time value, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when value changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>TimeValue</code></td><td>—</td><td>Placeholder time, bindable</td></tr>
		<tr><td><code>minValue</code></td><td><code>TimeValue</code></td><td>—</td><td>Minimum allowed time</td></tr>
		<tr><td><code>maxValue</code></td><td><code>TimeValue</code></td><td>—</td><td>Maximum allowed time</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the field</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the field read-only</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for segment formatting</td></tr>
		<tr><td><code>granularity</code></td><td><code>'hour' | 'minute' | 'second'</code></td><td>—</td><td>Finest unit to display</td></tr>
		<tr><td><code>hourCycle</code></td><td><code>12 | 24</code></td><td>—</td><td>12 or 24-hour time format</td></tr>
		<tr><td><code>hideTimeZone</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hide time zone segment</td></tr>
		<tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark as required</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>TimeField.Label</code></td><td><code>class</code></td><td>Label for the field</td></tr>
		<tr><td><code>TimeField.Input</code></td><td><code>name</code>, <code>class</code></td><td>Container that auto-renders time segments</td></tr>
		<tr><td><code>TimeField.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual editable time segment</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { TimeField } from 'chonky-ui';
  import { Time } from '@internationalized/date';

  let value = $state(new Time(14, 30));
</script>

<TimeField.Root bind:value>
  <TimeField.Label>Time</TimeField.Label>
  <TimeField.Input />
</TimeField.Root>`}</code></pre>
