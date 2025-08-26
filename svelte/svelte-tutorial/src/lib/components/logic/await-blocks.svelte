<script lang="ts">
  import { roll, roll_with_error } from './roll.js';

  let promise = $state(roll());
  let promise_with_error = $state(roll_with_error());
</script>

<button
  class="inline-flex justify-between gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500"
  onclick={() => {
    promise = roll();
    promise_with_error = roll_with_error();
  }}
>
  roll the dice
</button>

{#await promise then number}
  <p class="text-amber-500">never reject: {number}</p>
{/await}

{#await promise_with_error}
  <p class="text-gray-500">rolling...</p>
{:then number}
  <p class="text-green-500">you rolled a {number}</p>
{:catch error}
  <p class="text-red-500">error: {error.message}</p>
{/await}
