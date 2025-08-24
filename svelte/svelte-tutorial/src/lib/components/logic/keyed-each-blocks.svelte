<script lang="ts">
  import Fruit from './fruit.svelte';

  let fruits = $state([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' }
  ]);
</script>

<button
  class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500"
  onclick={() => fruits.shift()}>Remove first fruit</button
>

<div class="w-52 rounded-lg border border-gray-300 p-4">
  {#each fruits as fruit, i (fruit.id)}
    <Fruit name={fruit.name} index={i} />
  {/each}
</div>
