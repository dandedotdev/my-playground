<script lang="ts">
  let count = $state(0);

  function handleClick() {
    count++;
  }
</script>

<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  Click me
</button>
<p>Count: {count}</p>
