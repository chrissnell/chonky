<script lang="ts">
	import { DateRangeField } from 'chonky-ui';
	import { CalendarDate } from '@internationalized/date';

	let value = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
</script>

<h1>DateRangeField</h1>
<p>A segmented date range input with start and end date segments. Each part of both dates is individually editable.</p>

<h2>Example</h2>
<div class="example">
	<DateRangeField.Root bind:value>
		<DateRangeField.Label>Date range</DateRangeField.Label>
		<DateRangeField.Input />
	</DateRangeField.Root>
	<p>Range: {value?.start ? `${value.start.year}-${String(value.start.month).padStart(2, '0')}-${String(value.start.day).padStart(2, '0')}` : '?'} to {value?.end ? `${value.end.year}-${String(value.end.month).padStart(2, '0')}-${String(value.end.day).padStart(2, '0')}` : '?'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>{`{ start: DateValue; end: DateValue }`}</code></td><td>—</td><td>Selected date range, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when range changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Placeholder date, bindable</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum allowed date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum allowed date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the field</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the field read-only</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for segment formatting</td></tr>
		<tr><td><code>granularity</code></td><td><code>'day' | 'month' | 'year' | 'hour' | 'minute' | 'second'</code></td><td>—</td><td>Finest unit to display</td></tr>
		<tr><td><code>hourCycle</code></td><td><code>12 | 24</code></td><td>—</td><td>12 or 24-hour time format</td></tr>
		<tr><td><code>hideTimeZone</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hide time zone segment</td></tr>
		<tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark as required</td></tr>
		<tr><td><code>onStartValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when start date changes</td></tr>
		<tr><td><code>onEndValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when end date changes</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>DateRangeField.Label</code></td><td><code>class</code></td><td>Label for the field</td></tr>
		<tr><td><code>DateRangeField.Input</code></td><td><code>name</code>, <code>class</code></td><td>Container that renders start and end date segments</td></tr>
		<tr><td><code>DateRangeField.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual date segment</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { DateRangeField } from 'chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state({
    start: new CalendarDate(2026, 4, 3),
    end: new CalendarDate(2026, 4, 10)
  });
</script>

<DateRangeField.Root bind:value>
  <DateRangeField.Label>Date range</DateRangeField.Label>
  <DateRangeField.Input />
</DateRangeField.Root>`}</code></pre>
