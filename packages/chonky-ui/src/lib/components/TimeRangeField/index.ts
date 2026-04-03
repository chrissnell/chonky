import Root from './TimeRangeFieldRoot.svelte';
import Input from './TimeRangeFieldInput.svelte';
import Label from './TimeRangeFieldLabel.svelte';
import Segment from './TimeRangeFieldSegment.svelte';

const TimeRangeField = Object.assign(Root, { Input, Label, Segment });
export { TimeRangeField };
