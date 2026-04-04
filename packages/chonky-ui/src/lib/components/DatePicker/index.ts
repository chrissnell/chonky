import Root from './DatePickerRoot.svelte';
import Input from './DatePickerInput.svelte';
import Trigger from './DatePickerTrigger.svelte';
import Content from './DatePickerContent.svelte';
import Calendar from './DatePickerCalendar.svelte';
import Label from './DatePickerLabel.svelte';
import Segment from './DatePickerSegment.svelte';

export type { DatePickerRootProps } from './DatePickerRoot.svelte';
export type { DatePickerInputProps } from './DatePickerInput.svelte';
export type { DatePickerTriggerProps } from './DatePickerTrigger.svelte';
export type { DatePickerContentProps } from './DatePickerContent.svelte';
export type { DatePickerCalendarProps } from './DatePickerCalendar.svelte';
export type { DatePickerLabelProps } from './DatePickerLabel.svelte';
export type { DatePickerSegmentProps } from './DatePickerSegment.svelte';

const DatePicker = Object.assign(Root, { Root, Input, Trigger, Content, Calendar, Label, Segment });
export { DatePicker };
