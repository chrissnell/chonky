import Root from './DatePickerRoot.svelte';
import Input from './DatePickerInput.svelte';
import Trigger from './DatePickerTrigger.svelte';
import Content from './DatePickerContent.svelte';
import Calendar from './DatePickerCalendar.svelte';
import Label from './DatePickerLabel.svelte';
import Segment from './DatePickerSegment.svelte';

const DatePicker = Object.assign(Root, { Input, Trigger, Content, Calendar, Label, Segment });
export { DatePicker };
