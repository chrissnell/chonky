<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface ComboboxInputProps {
    class?: string;
    placeholder?: string;
  }

  let {
    class: className,
    placeholder,
    ...restProps
  }: ComboboxInputProps = $props();
</script>

<BitsCombobox.Input class={cn(className)} {placeholder} {...restProps} />
