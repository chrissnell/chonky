import Root from './DateRangeFieldRoot.svelte';
import Input from './DateRangeFieldInput.svelte';
import Label from './DateRangeFieldLabel.svelte';
import Segment from './DateRangeFieldSegment.svelte';

const DateRangeField = Object.assign(Root, { Input, Label, Segment });
export { DateRangeField };
