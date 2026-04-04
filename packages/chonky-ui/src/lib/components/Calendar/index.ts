import Root from './CalendarRoot.svelte';
import Header from './CalendarHeader.svelte';
import Heading from './CalendarHeading.svelte';
import Grid from './CalendarGrid.svelte';
import GridHead from './CalendarGridHead.svelte';
import HeadCell from './CalendarHeadCell.svelte';
import GridBody from './CalendarGridBody.svelte';
import GridRow from './CalendarGridRow.svelte';
import Cell from './CalendarCell.svelte';
import Day from './CalendarDay.svelte';
import PrevButton from './CalendarPrevButton.svelte';
import NextButton from './CalendarNextButton.svelte';

export type { CalendarRootProps } from './CalendarRoot.svelte';
export type { CalendarHeaderProps } from './CalendarHeader.svelte';
export type { CalendarHeadingProps } from './CalendarHeading.svelte';
export type { CalendarGridProps } from './CalendarGrid.svelte';
export type { CalendarGridHeadProps } from './CalendarGridHead.svelte';
export type { CalendarHeadCellProps } from './CalendarHeadCell.svelte';
export type { CalendarGridBodyProps } from './CalendarGridBody.svelte';
export type { CalendarGridRowProps } from './CalendarGridRow.svelte';
export type { CalendarCellProps } from './CalendarCell.svelte';
export type { CalendarDayProps } from './CalendarDay.svelte';
export type { CalendarPrevButtonProps } from './CalendarPrevButton.svelte';
export type { CalendarNextButtonProps } from './CalendarNextButton.svelte';

const Calendar = Object.assign(Root, { Root, Header, Heading, Grid, GridHead, HeadCell, GridBody, GridRow, Cell, Day, PrevButton, NextButton });
export { Calendar };
