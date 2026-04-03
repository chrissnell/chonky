import Root from './DateRangeFieldRoot.svelte';
import Input from './DateRangeFieldInput.svelte';
import Label from './DateRangeFieldLabel.svelte';
import Segment from './DateRangeFieldSegment.svelte';

export type { DateRangeFieldRootProps } from './DateRangeFieldRoot.svelte';
export type { DateRangeFieldInputProps } from './DateRangeFieldInput.svelte';
export type { DateRangeFieldLabelProps } from './DateRangeFieldLabel.svelte';
export type { DateRangeFieldSegmentProps } from './DateRangeFieldSegment.svelte';

const DateRangeField = Object.assign(Root, { Input, Label, Segment });
export { DateRangeField };
