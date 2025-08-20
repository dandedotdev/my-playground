<script lang="ts">
  import { counter } from '$lib/shared/counter.svelte';

  function handleClick() {
    counter.count++;
  }
</script>

<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  clicks: {counter.count}
</button>
<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  clicks: {counter.count}
</button>
<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  clicks: {counter.count}
</button>
