<script lang="ts">
	import { DatePicker } from 'chonky-ui';
	import { CalendarDate } from '@internationalized/date';

	let value: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
</script>

<h1>DatePicker</h1>
<p>A date field with a calendar popover for visual date selection. Combines segmented input with a dropdown calendar.</p>

<h2>Example</h2>
<div class="example">
	<DatePicker.Root bind:value>
		<DatePicker.Label>Pick a date</DatePicker.Label>
		<div style="display: flex; align-items: center; gap: 0.25rem;">
			<DatePicker.Input />
			<DatePicker.Trigger />
		</div>
		<DatePicker.Content>
			<DatePicker.Calendar />
		</DatePicker.Content>
	</DatePicker.Root>
	<p>Selected: {value ? `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}` : 'none'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>DateValue</code></td><td>—</td><td>Selected date, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when date changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Placeholder date, bindable</td></tr>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls popover open state, bindable</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>—</td><td>Called when popover toggles</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum selectable date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum selectable date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the picker</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the field read-only</td></tr>
		<tr><td><code>isDateDisabled</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to disable specific dates</td></tr>
		<tr><td><code>isDateUnavailable</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to mark dates unavailable</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for formatting</td></tr>
		<tr><td><code>granularity</code></td><td><code>'day' | 'month' | 'year' | 'hour' | 'minute' | 'second'</code></td><td>—</td><td>Finest unit to display</td></tr>
		<tr><td><code>hourCycle</code></td><td><code>12 | 24</code></td><td>—</td><td>12 or 24-hour time format</td></tr>
		<tr><td><code>closeOnDateSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Close popover after selecting</td></tr>
		<tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td><code>1</code></td><td>Months shown in calendar</td></tr>
		<tr><td><code>weekStartsOn</code></td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td><td>First day of week</td></tr>
		<tr><td><code>fixedWeeks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Always show 6 weeks</td></tr>
		<tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark as required</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>DatePicker.Label</code></td><td><code>class</code></td><td>Label for the picker</td></tr>
		<tr><td><code>DatePicker.Input</code></td><td><code>name</code>, <code>class</code></td><td>Segmented date input</td></tr>
		<tr><td><code>DatePicker.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual date segment</td></tr>
		<tr><td><code>DatePicker.Trigger</code></td><td><code>class</code></td><td>Button to open the calendar popover</td></tr>
		<tr><td><code>DatePicker.Content</code></td><td><code>side</code>, <code>sideOffset</code>, <code>class</code></td><td>Popover container for the calendar</td></tr>
		<tr><td><code>DatePicker.Calendar</code></td><td><code>class</code></td><td>Pre-built calendar with header and grid</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { DatePicker } from 'chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state(new CalendarDate(2026, 4, 3));
</script>

<DatePicker.Root bind:value>
  <DatePicker.Label>Pick a date</DatePicker.Label>
  <div style="display: flex; align-items: center; gap: 0.25rem;">
    <DatePicker.Input />
    <DatePicker.Trigger />
  </div>
  <DatePicker.Content>
    <DatePicker.Calendar />
  </DatePicker.Content>
</DatePicker.Root>`}</code></pre>
