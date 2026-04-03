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

const Calendar = Object.assign(Root, { Header, Heading, Grid, GridHead, HeadCell, GridBody, GridRow, Cell, Day, PrevButton, NextButton });
export { Calendar };
