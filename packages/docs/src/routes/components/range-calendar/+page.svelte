<script lang="ts">
	import { RangeCalendar } from '@chrissnell/chonky-ui';
	import { CalendarDate } from '@internationalized/date';

	let value = $state({ start: new CalendarDate(2026, 4, 3), end: new CalendarDate(2026, 4, 10) });
</script>

<h1>RangeCalendar</h1>
<p>A calendar for selecting a date range. Uses the same grid structure as Calendar but supports start/end range selection.</p>

<h2>Example</h2>
<div class="example">
	<RangeCalendar.Root bind:value>
		{#snippet children({ months, weekdays })}
			<RangeCalendar.Header>
				<RangeCalendar.PrevButton>&larr;</RangeCalendar.PrevButton>
				<RangeCalendar.Heading />
				<RangeCalendar.NextButton>&rarr;</RangeCalendar.NextButton>
			</RangeCalendar.Header>
			{#each months as month}
				<RangeCalendar.Grid>
					<RangeCalendar.GridHead>
						<RangeCalendar.GridRow>
							{#each weekdays as day}
								<RangeCalendar.HeadCell>{day}</RangeCalendar.HeadCell>
							{/each}
						</RangeCalendar.GridRow>
					</RangeCalendar.GridHead>
					<RangeCalendar.GridBody>
						{#each month.weeks as week}
							<RangeCalendar.GridRow>
								{#each week as date}
									<RangeCalendar.Cell {date} month={month.value} />
								{/each}
							</RangeCalendar.GridRow>
						{/each}
					</RangeCalendar.GridBody>
				</RangeCalendar.Grid>
			{/each}
		{/snippet}
	</RangeCalendar.Root>
	<p>Range: {value?.start ? `${value.start.year}-${String(value.start.month).padStart(2, '0')}-${String(value.start.day).padStart(2, '0')}` : '?'} to {value?.end ? `${value.end.year}-${String(value.end.month).padStart(2, '0')}-${String(value.end.day).padStart(2, '0')}` : '?'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>value</code></td><td><code>{`{ start: DateValue; end: DateValue }`}</code></td><td>—</td><td>Selected date range, bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when range changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Controls visible month, bindable</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum selectable date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum selectable date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the calendar</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevent selection changes</td></tr>
		<tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td><code>1</code></td><td>Months shown at once</td></tr>
		<tr><td><code>pagedNavigation</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Navigate by full page of months</td></tr>
		<tr><td><code>weekStartsOn</code></td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td><td>First day of week (0 = Sunday)</td></tr>
		<tr><td><code>weekdayFormat</code></td><td><code>'long' | 'short' | 'narrow'</code></td><td><code>'narrow'</code></td><td>Weekday header format</td></tr>
		<tr><td><code>isDateDisabled</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to disable specific dates</td></tr>
		<tr><td><code>isDateUnavailable</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to mark dates unavailable</td></tr>
		<tr><td><code>fixedWeeks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Always show 6 weeks</td></tr>
		<tr><td><code>minDays</code></td><td><code>number</code></td><td>—</td><td>Minimum range length in days</td></tr>
		<tr><td><code>maxDays</code></td><td><code>number</code></td><td>—</td><td>Maximum range length in days</td></tr>
		<tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>Locale for formatting</td></tr>
		<tr><td><code>calendarLabel</code></td><td><code>string</code></td><td>—</td><td>Accessible label</td></tr>
		<tr><td><code>initialFocus</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Focus calendar on mount</td></tr>
		<tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
	</tbody>
</table>

<h2>Sub-components</h2>
<table class="props-table">
	<thead><tr><th>Component</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>RangeCalendar.Header</code></td><td>Container for navigation controls</td></tr>
		<tr><td><code>RangeCalendar.Heading</code></td><td>Displays current month/year</td></tr>
		<tr><td><code>RangeCalendar.PrevButton</code></td><td>Navigate to previous month</td></tr>
		<tr><td><code>RangeCalendar.NextButton</code></td><td>Navigate to next month</td></tr>
		<tr><td><code>RangeCalendar.Grid</code></td><td>Table wrapper for a month grid</td></tr>
		<tr><td><code>RangeCalendar.GridHead</code></td><td>Table header for weekday labels</td></tr>
		<tr><td><code>RangeCalendar.HeadCell</code></td><td>Individual weekday label cell</td></tr>
		<tr><td><code>RangeCalendar.GridBody</code></td><td>Table body containing date rows</td></tr>
		<tr><td><code>RangeCalendar.GridRow</code></td><td>A row of date cells</td></tr>
		<tr><td><code>RangeCalendar.Cell</code></td><td>Container for a day (requires <code>date</code> and <code>month</code>)</td></tr>
		<tr><td><code>RangeCalendar.Day</code></td><td>Renders the day number button</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { RangeCalendar } from '@chrissnell/chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state({
    start: new CalendarDate(2026, 4, 3),
    end: new CalendarDate(2026, 4, 10)
  });
</script>

<RangeCalendar.Root bind:value>
  {#snippet children({ months, weekdays })}
    <RangeCalendar.Header>
      <RangeCalendar.PrevButton>&larr;</RangeCalendar.PrevButton>
      <RangeCalendar.Heading />
      <RangeCalendar.NextButton>&rarr;</RangeCalendar.NextButton>
    </RangeCalendar.Header>
    {#each months as month}
      <RangeCalendar.Grid>
        <RangeCalendar.GridHead>
          <RangeCalendar.GridRow>
            {#each weekdays as day}
              <RangeCalendar.HeadCell>{day}</RangeCalendar.HeadCell>
            {/each}
          </RangeCalendar.GridRow>
        </RangeCalendar.GridHead>
        <RangeCalendar.GridBody>
          {#each month.weeks as week}
            <RangeCalendar.GridRow>
              {#each week as date}
                <RangeCalendar.Cell {date} month={month.value} />
              {/each}
            </RangeCalendar.GridRow>
          {/each}
        </RangeCalendar.GridBody>
      </RangeCalendar.Grid>
    {/each}
  {/snippet}
</RangeCalendar.Root>`}</code></pre>
