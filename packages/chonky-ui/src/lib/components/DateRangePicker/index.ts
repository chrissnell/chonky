import Root from './DateRangePickerRoot.svelte';
import Input from './DateRangePickerInput.svelte';
import Trigger from './DateRangePickerTrigger.svelte';
import Content from './DateRangePickerContent.svelte';
import Calendar from './DateRangePickerCalendar.svelte';
import Label from './DateRangePickerLabel.svelte';
import Segment from './DateRangePickerSegment.svelte';

const DateRangePicker = Object.assign(Root, { Input, Trigger, Content, Calendar, Label, Segment });
export { DateRangePicker };
