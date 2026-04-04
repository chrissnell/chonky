import Root from './TimeFieldRoot.svelte';
import Input from './TimeFieldInput.svelte';
import Label from './TimeFieldLabel.svelte';
import Segment from './TimeFieldSegment.svelte';

export type { TimeFieldRootProps } from './TimeFieldRoot.svelte';
export type { TimeFieldInputProps } from './TimeFieldInput.svelte';
export type { TimeFieldLabelProps } from './TimeFieldLabel.svelte';
export type { TimeFieldSegmentProps } from './TimeFieldSegment.svelte';

const TimeField = Object.assign(Root, { Root, Input, Label, Segment });
export { TimeField };
