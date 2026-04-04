<script lang="ts">
	import { DateRangePicker } from '@chrissnell/chonky-ui';
	import { CalendarDate } from '@internationalized/date';

	let value = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
</script>

<h1>DateRangePicker</h1>
<p>A date range field with a calendar popover for visual range selection. Combines segmented range input with a dropdown range calendar.</p>

<h2>Example</h2>
<div class="example">
	<DateRangePicker.Root bind:value>
		<DateRangePicker.Label>Select range</DateRangePicker.Label>
		<div style="display: flex; align-items: center; gap: 0.25rem;">
			<DateRangePicker.Input type="start" />
			<span class="date-range-field-separator">–</span>
			<DateRangePicker.Input type="end" />
			<DateRangePicker.Trigger />
		</div>
		<DateRangePicker.Content>
			<DateRangePicker.Calendar />
		</DateRangePicker.Content>
	</DateRangePicker.Root>
	<p>Range: {value?.start ? `${value.start.year}-${String(value.start.month).padStart(2, '0')}-${String(value.start.day).padStart(2, '0')}` : '?'} to {value?.end ? `${value.end.year}-${String(value.end.month).padStart(2, '0')}-${String(value.end.day).padStart(2, '0')}` : '?'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>{`{ start: DateValue; end: DateValue }`}</code></td><td>—</td><td>Selected date range, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when range changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Placeholder date, bindable</td></tr>
		<tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls popover state, bindable</td></tr>
		<tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>—</td><td>Called when popover toggles</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum selectable date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum selectable date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the picker</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the field read-only</td></tr>
		<tr><td><code>isDateDisabled</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to disable specific dates</td></tr>
		<tr><td><code>isDateUnavailable</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to mark dates unavailable</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for formatting</td></tr>
		<tr><td><code>granularity</code></td><td><code>'day' | 'month' | 'year' | 'hour' | 'minute' | 'second'</code></td><td>—</td><td>Finest unit to display</td></tr>
		<tr><td><code>closeOnRangeSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Close popover after selecting range</td></tr>
		<tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td><code>1</code></td><td>Months shown in calendar</td></tr>
		<tr><td><code>weekStartsOn</code></td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td><td>First day of week</td></tr>
		<tr><td><code>fixedWeeks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Always show 6 weeks</td></tr>
		<tr><td><code>minDays</code></td><td><code>number</code></td><td>—</td><td>Minimum range length</td></tr>
		<tr><td><code>maxDays</code></td><td><code>number</code></td><td>—</td><td>Maximum range length</td></tr>
		<tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark as required</td></tr>
		<tr><td><code>onStartValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when start date changes</td></tr>
		<tr><td><code>onEndValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when end date changes</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Key Props</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>DateRangePicker.Label</code></td><td><code>class</code></td><td>Label for the picker</td></tr>
		<tr><td><code>DateRangePicker.Input</code></td><td><code>type</code>, <code>name</code>, <code>class</code></td><td>Segmented date input for start or end (<code>type="start" | "end"</code>)</td></tr>
		<tr><td><code>DateRangePicker.Segment</code></td><td><code>part</code>, <code>class</code></td><td>Individual date segment</td></tr>
		<tr><td><code>DateRangePicker.Trigger</code></td><td><code>class</code></td><td>Button to open the calendar popover</td></tr>
		<tr><td><code>DateRangePicker.Content</code></td><td><code>side</code>, <code>sideOffset</code>, <code>class</code></td><td>Popover container</td></tr>
		<tr><td><code>DateRangePicker.Calendar</code></td><td><code>class</code></td><td>Pre-built range calendar with header and grid</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { DateRangePicker } from '@chrissnell/chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state({
    start: new CalendarDate(2026, 4, 3),
    end: new CalendarDate(2026, 4, 10)
  });
</script>

<DateRangePicker.Root bind:value>
  <DateRangePicker.Label>Select range</DateRangePicker.Label>
  <div style="display: flex; align-items: center; gap: 0.25rem;">
    <DateRangePicker.Input type="start" />
    <span class="date-range-field-separator">–</span>
    <DateRangePicker.Input type="end" />
    <DateRangePicker.Trigger />
  </div>
  <DateRangePicker.Content>
    <DateRangePicker.Calendar />
  </DateRangePicker.Content>
</DateRangePicker.Root>`}</code></pre>
