<script lang="ts">
  import { marked } from 'marked';

  let value = $state(`Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`);
</script>

<textarea
  class="scrollbar-none min-h-50 min-w-80 rounded-md bg-sky-900 p-2 ring-offset-slate-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus-visible:outline-none"
  bind:value
>
</textarea>

<div class="[&_ul]:list-disc">{@html marked(value)}</div>
