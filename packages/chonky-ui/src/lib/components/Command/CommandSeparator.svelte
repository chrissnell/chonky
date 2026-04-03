<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface CommandSeparatorProps {
    class?: string;
  }

  let {
    class: className,
    ...restProps
  }: CommandSeparatorProps = $props();
</script>

<BitsCommand.Separator class={cn(className)} {...restProps} />
