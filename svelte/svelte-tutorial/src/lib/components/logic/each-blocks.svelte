<script lang="ts">
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];
  let selectedColor = $state(colors[0]);

  function handleClick(color: string) {
    selectedColor = color;
  }
</script>

<div class="grid grid-cols-3 gap-2">
  {#each colors as color, i}
    <button
      class="inline-flex justify-between gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white dark:bg-sky-500"
      aria-current={selectedColor === color}
      aria-label={color}
      onclick={() => handleClick(color)}
    >
      {color}
      <span>{i}</span>
    </button>
  {/each}
</div>
<p style="color: {selectedColor}">Selected color: {selectedColor}</p>
