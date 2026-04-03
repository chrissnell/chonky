<script lang="ts">
  import { Progress as BitsProgress } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface ProgressProps {
    value?: number;
    max?: number;
    class?: string;
  }

  let {
    value = 0,
    max = 100,
    class: className,
  }: ProgressProps = $props();
</script>

<BitsProgress.Root
  {value}
  {max}
  class={cn(className)}
>
  <div
    data-bits-progress-indicator
    style="width: {Math.min(100, Math.max(0, (value / max) * 100))}%"
  ></div>
</BitsProgress.Root>
