import Root from './TimeFieldRoot.svelte';
import Input from './TimeFieldInput.svelte';
import Label from './TimeFieldLabel.svelte';
import Segment from './TimeFieldSegment.svelte';

const TimeField = Object.assign(Root, { Input, Label, Segment });
export { TimeField };
