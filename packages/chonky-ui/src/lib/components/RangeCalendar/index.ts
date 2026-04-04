import Root from './RangeCalendarRoot.svelte';
import Header from './RangeCalendarHeader.svelte';
import Heading from './RangeCalendarHeading.svelte';
import Grid from './RangeCalendarGrid.svelte';
import GridHead from './RangeCalendarGridHead.svelte';
import HeadCell from './RangeCalendarHeadCell.svelte';
import GridBody from './RangeCalendarGridBody.svelte';
import GridRow from './RangeCalendarGridRow.svelte';
import Cell from './RangeCalendarCell.svelte';
import Day from './RangeCalendarDay.svelte';
import PrevButton from './RangeCalendarPrevButton.svelte';
import NextButton from './RangeCalendarNextButton.svelte';

export type { RangeCalendarRootProps } from './RangeCalendarRoot.svelte';

const RangeCalendar = Object.assign(Root, { Root, Header, Heading, Grid, GridHead, HeadCell, GridBody, GridRow, Cell, Day, PrevButton, NextButton });
export { RangeCalendar };
