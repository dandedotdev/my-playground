<script lang="ts">
  let numbers = $state([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let derivedNumbers = $derived(numbers.map((num) => num * 2));
</script>

<div class="grid grid-cols-9 grid-rows-9 gap-2">
  {#each derivedNumbers as num}
    <p class="flex size-10 items-center justify-center bg-sky-900">{num}</p>
  {/each}
</div>
