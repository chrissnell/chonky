<script lang="ts">
	import { Calendar } from '@chrissnell/chonky-ui';
	import { CalendarDate } from '@internationalized/date';
	import { browser } from '$app/environment';

	let value: CalendarDate | undefined = $state(new CalendarDate(2026, 4, 3));
</script>

<h1>Calendar</h1>
<p>A date calendar for selecting a single date or multiple dates. Compound component using dot notation.</p>

<h2>Example</h2>
<div class="example">
	{#if browser}
		<Calendar.Root bind:value>
			{#snippet children({ months, weekdays })}
				<Calendar.Header>
					<Calendar.PrevButton>&larr;</Calendar.PrevButton>
					<Calendar.Heading />
					<Calendar.NextButton>&rarr;</Calendar.NextButton>
				</Calendar.Header>
				{#each months as month}
					<Calendar.Grid>
						<Calendar.GridHead>
							<Calendar.GridRow>
								{#each weekdays as day}
									<Calendar.HeadCell>{day}</Calendar.HeadCell>
								{/each}
							</Calendar.GridRow>
						</Calendar.GridHead>
						<Calendar.GridBody>
							{#each month.weeks as week}
								<Calendar.GridRow>
									{#each week as date}
										<Calendar.Cell {date} month={month.value} />
									{/each}
								</Calendar.GridRow>
							{/each}
						</Calendar.GridBody>
					</Calendar.Grid>
				{/each}
			{/snippet}
		</Calendar.Root>
	{/if}
	<p>Selected: {value ? `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}` : 'none'}</p>
</div>

<h2>Root Props</h2>
<table class="props-table">
	<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr><td><code>type</code></td><td><code>'single' | 'multiple'</code></td><td><code>'single'</code></td><td>Selection mode</td></tr>
		<tr><td><code>value</code></td><td><code>DateValue | DateValue[]</code></td><td>—</td><td>Selected date(s), bindable</td></tr>
		<tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>—</td><td>Called when selection changes</td></tr>
		<tr><td><code>placeholder</code></td><td><code>DateValue</code></td><td>—</td><td>Controls visible month, bindable</td></tr>
		<tr><td><code>minValue</code></td><td><code>DateValue</code></td><td>—</td><td>Minimum selectable date</td></tr>
		<tr><td><code>maxValue</code></td><td><code>DateValue</code></td><td>—</td><td>Maximum selectable date</td></tr>
		<tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the calendar</td></tr>
		<tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevent date selection</td></tr>
		<tr><td><code>preventDeselect</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevent clearing selection</td></tr>
		<tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td><code>1</code></td><td>Months shown at once</td></tr>
		<tr><td><code>pagedNavigation</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Navigate by full page of months</td></tr>
		<tr><td><code>weekStartsOn</code></td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td><td>First day of week (0 = Sunday)</td></tr>
		<tr><td><code>weekdayFormat</code></td><td><code>'long' | 'short' | 'narrow'</code></td><td><code>'narrow'</code></td><td>Weekday header format</td></tr>
		<tr><td><code>isDateDisabled</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to disable specific dates</td></tr>
		<tr><td><code>isDateUnavailable</code></td><td><code>DateMatcher</code></td><td>—</td><td>Function to mark dates unavailable</td></tr>
		<tr><td><code>fixedWeeks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Always show 6 weeks</td></tr>
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
		<tr><td><code>Calendar.Header</code></td><td>Container for navigation controls</td></tr>
		<tr><td><code>Calendar.Heading</code></td><td>Displays current month/year</td></tr>
		<tr><td><code>Calendar.PrevButton</code></td><td>Navigate to previous month</td></tr>
		<tr><td><code>Calendar.NextButton</code></td><td>Navigate to next month</td></tr>
		<tr><td><code>Calendar.Grid</code></td><td>Table wrapper for a month grid</td></tr>
		<tr><td><code>Calendar.GridHead</code></td><td>Table header for weekday labels</td></tr>
		<tr><td><code>Calendar.HeadCell</code></td><td>Individual weekday label cell</td></tr>
		<tr><td><code>Calendar.GridBody</code></td><td>Table body containing date rows</td></tr>
		<tr><td><code>Calendar.GridRow</code></td><td>A row of date cells</td></tr>
		<tr><td><code>Calendar.Cell</code></td><td>Container for a single day (requires <code>date</code> and <code>month</code> props)</td></tr>
		<tr><td><code>Calendar.Day</code></td><td>Renders the day number button</td></tr>
	</tbody>
</table>

<h2>Usage</h2>
<pre><code>{`<script>
  import { Calendar } from '@chrissnell/chonky-ui';
  import { CalendarDate } from '@internationalized/date';

  let value = $state(new CalendarDate(2026, 4, 3));
</script>

<Calendar.Root bind:value>
  {#snippet children({ months, weekdays })}
    <Calendar.Header>
      <Calendar.PrevButton>&larr;</Calendar.PrevButton>
      <Calendar.Heading />
      <Calendar.NextButton>&rarr;</Calendar.NextButton>
    </Calendar.Header>
    {#each months as month}
      <Calendar.Grid>
        <Calendar.GridHead>
          <Calendar.GridRow>
            {#each weekdays as day}
              <Calendar.HeadCell>{day}</Calendar.HeadCell>
            {/each}
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody>
          {#each month.weeks as week}
            <Calendar.GridRow>
              {#each week as date}
                <Calendar.Cell {date} month={month.value} />
              {/each}
            </Calendar.GridRow>
          {/each}
        </Calendar.GridBody>
      </Calendar.Grid>
    {/each}
  {/snippet}
</Calendar.Root>`}</code></pre>
