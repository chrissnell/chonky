<script lang="ts">
	import { TimeRangeField } from '@chrissnell/chonky-ui';
	import { Time } from '@internationalized/date';

	let value = $state({ start: new Time(9, 0), end: new Time(17, 0) });
</script>

<h1>TimeRangeField</h1>
<p>A segmented time range input with start and end time segments. Each part of both times is individually editable.</p>

<h2>Example</h2>
<div class="example">
	<TimeRangeField.Root bind:value>
		<TimeRangeField.Label>Time range</TimeRangeField.Label>
		<div style="display: flex; align-items: center; gap: 0.25rem;">
			<TimeRangeField.Input type="start" />
			<span class="time-range-field-separator">–</span>
			<TimeRangeField.Input type="end" />
		</div>
	</TimeRangeField.Root>
	<p>Range: {value?.start ? `${String(value.start.hour).padStart(2, '0')}:${String(value.start.minute).padStart(2, '0')}` : '?'} to {value?.end ? `${String(value.end.hour).padStart(2, '0')}:${String(value.end.minute).padStart(2, '0')}` : '?'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>{`{ start: TimeValue; end: TimeValue }`}</code></td><td>—</td><td>Selected time range, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when range changes</td></tr>
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
		<tr><td><code>onStartValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when start time changes</td></tr>
		<tr><td><code>onEndValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when end time changes</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>TimeRangeField.Label</code></td><td><code>class</code></td><td>Label for the field</td></tr>
		<tr><td><code>TimeRangeField.Input</code></td><td><code>type</code>, <code>name</code>, <code>class</code></td><td>Segmented time input for start or end (<code>type="start" | "end"</code>)</td></tr>
		<tr><td><code>TimeRangeField.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual time segment</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { TimeRangeField } from '@chrissnell/chonky-ui';
  import { Time } from '@internationalized/date';

  let value = $state({
    start: new Time(9, 0),
    end: new Time(17, 0)
  });
</script>

<TimeRangeField.Root bind:value>
  <TimeRangeField.Label>Time range</TimeRangeField.Label>
  <div style="display: flex; align-items: center; gap: 0.25rem;">
    <TimeRangeField.Input type="start" />
    <span class="time-range-field-separator">–</span>
    <TimeRangeField.Input type="end" />
  </div>
</TimeRangeField.Root>`}</code></pre>
