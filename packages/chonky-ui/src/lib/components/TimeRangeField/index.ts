import Root from './TimeRangeFieldRoot.svelte';
import Input from './TimeRangeFieldInput.svelte';
import Label from './TimeRangeFieldLabel.svelte';
import Segment from './TimeRangeFieldSegment.svelte';

export type { TimeRangeFieldRootProps } from './TimeRangeFieldRoot.svelte';
export type { TimeRangeFieldInputProps } from './TimeRangeFieldInput.svelte';
export type { TimeRangeFieldLabelProps } from './TimeRangeFieldLabel.svelte';
export type { TimeRangeFieldSegmentProps } from './TimeRangeFieldSegment.svelte';

const TimeRangeField = Object.assign(Root, { Input, Label, Segment });
export { TimeRangeField };
