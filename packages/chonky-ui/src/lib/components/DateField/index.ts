import Root from './DateFieldRoot.svelte';
import Input from './DateFieldInput.svelte';
import Label from './DateFieldLabel.svelte';
import Segment from './DateFieldSegment.svelte';

const DateField = Object.assign(Root, { Input, Label, Segment });
export { DateField };
