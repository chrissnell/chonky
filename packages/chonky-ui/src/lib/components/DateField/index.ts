import Root from './DateFieldRoot.svelte';
import Input from './DateFieldInput.svelte';
import Label from './DateFieldLabel.svelte';
import Segment from './DateFieldSegment.svelte';

export type { DateFieldRootProps } from './DateFieldRoot.svelte';
export type { DateFieldInputProps } from './DateFieldInput.svelte';
export type { DateFieldLabelProps } from './DateFieldLabel.svelte';
export type { DateFieldSegmentProps } from './DateFieldSegment.svelte';

const DateField = Object.assign(Root, { Input, Label, Segment });
export { DateField };
