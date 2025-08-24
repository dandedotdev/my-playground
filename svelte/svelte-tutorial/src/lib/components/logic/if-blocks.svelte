<script lang="ts">
  let count = $state(0);

  function handleClick() {
    count++;
  }
</script>

<button class="rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500" onclick={handleClick}>
  Click me
</button>
{#if count > 3}
  <p class="text-xs font-semibold text-gray-500 italic">Count is greater than 3...</p>
  <div class="h-60"></div>
{:else if count > 1}
  <p class="text-xs font-semibold italic">
    <span class="bg-gradient-to-r from-red-500 to-indigo-500 bg-clip-text text-transparent">
      Count is between 2 and 3!!!
    </span>
    🎉
  </p>
  <img class="h-60" src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy-downsized.gif" alt="Rick roll" />
{:else}
  <p class="text-xs font-semibold text-gray-500 italic">Count is less than 1...</p>
  <div class="h-60"></div>
{/if}
<p class="text-xs font-semibold text-gray-500 italic">Count: {count}</p>
