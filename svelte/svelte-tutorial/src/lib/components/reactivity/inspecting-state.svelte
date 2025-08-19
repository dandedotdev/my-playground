<script lang="ts">
  let numbers = $state([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function handleClick() {
    numbers.push(numbers.length + 1);
    // console.log($state.snapshot(numbers));
  }

  // automatically removed in production
  $inspect(numbers).with(console.trace);
</script>

<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  Click me
</button>
<div class="grid grid-cols-9 grid-rows-9 gap-2">
  {#each numbers as num}
    <p class="flex size-10 items-center justify-center bg-sky-900">{num}</p>
  {/each}
</div>
