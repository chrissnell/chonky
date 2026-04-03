<script lang="ts">
	import { DateField } from '@chrissnell/chonky-ui';
	import { CalendarDate } from '@internationalized/date';

	let value: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
</script>

<h1>DateField</h1>
<p>A segmented date input field. Each part of the date (month, day, year) is an individually editable segment.</p>

<h2>Example</h2>
<div class="example">
	<DateField.Root bind:value>
		<DateField.Label>Date</DateField.Label>
		<DateField.Input />
	</DateField.Root>
	<p>Value: {value ? `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}` : 'none'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>DateValue</code></td><td>—</td><td>Current date value, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when value changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Placeholder date, bindable</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum allowed date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum allowed date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the field</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the field read-only</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for segment formatting</td></tr>
		<tr><td><code>granularity</code></td><td><code>'day' | 'month' | 'year' | 'hour' | 'minute' | 'second'</code></td><td>—</td><td>Finest unit to display</td></tr>
		<tr><td><code>hourCycle</code></td><td><code>12 | 24</code></td><td>—</td><td>12 or 24-hour time format</td></tr>
		<tr><td><code>hideTimeZone</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hide time zone segment</td></tr>
		<tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark as required for forms</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>DateField.Label</code></td><td><code>class</code></td><td>Label associated with the field</td></tr>
		<tr><td><code>DateField.Input</code></td><td><code>name</code>, <code>class</code></td><td>Container that auto-renders date segments</td></tr>
		<tr><td><code>DateField.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual editable date segment (used internally by Input)</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { DateField } from '@chrissnell/chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state(new CalendarDate(2026, 4, 3));
</script>

<DateField.Root bind:value>
  <DateField.Label>Date</DateField.Label>
  <DateField.Input />
</DateField.Root>`}</code></pre>
