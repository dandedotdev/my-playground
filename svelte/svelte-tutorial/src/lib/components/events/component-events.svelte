<script lang="ts">
  let { increment, decrement } = $props();
</script>

<div class="flex gap-2">
  <button
    class="inline-flex justify-between gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500"
    onclick={decrement}>-1</button
  >
  <button
    class="inline-flex justify-between gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500"
    onclick={increment}>+1</button
  >
</div>
