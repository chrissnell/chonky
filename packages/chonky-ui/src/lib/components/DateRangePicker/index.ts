import Root from './DateRangePickerRoot.svelte';
import Input from './DateRangePickerInput.svelte';
import Trigger from './DateRangePickerTrigger.svelte';
import Content from './DateRangePickerContent.svelte';
import Calendar from './DateRangePickerCalendar.svelte';
import Label from './DateRangePickerLabel.svelte';
import Segment from './DateRangePickerSegment.svelte';

export type { DateRangePickerRootProps } from './DateRangePickerRoot.svelte';
export type { DateRangePickerInputProps } from './DateRangePickerInput.svelte';
export type { DateRangePickerTriggerProps } from './DateRangePickerTrigger.svelte';
export type { DateRangePickerContentProps } from './DateRangePickerContent.svelte';
export type { DateRangePickerCalendarProps } from './DateRangePickerCalendar.svelte';
export type { DateRangePickerLabelProps } from './DateRangePickerLabel.svelte';
export type { DateRangePickerSegmentProps } from './DateRangePickerSegment.svelte';

const DateRangePicker = Object.assign(Root, { Input, Trigger, Content, Calendar, Label, Segment });
export { DateRangePicker };
