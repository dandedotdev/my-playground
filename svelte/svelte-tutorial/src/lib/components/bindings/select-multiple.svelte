<script lang="ts">
  let scoops = $state(1);
  let flavours = $state([]);

  const formatter = new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' });
</script>

<div class="flex gap-4 rounded-md border p-4">
  <div class="rounded-md border p-4">
    <h2>Size</h2>
    {#each [1, 2, 3] as number}
      <label class="block">
        <input type="radio" bind:group={scoops} value={number} />
        {number}
        {number === 1 ? 'scoop' : 'scoops'}
      </label>
    {/each}
  </div>
  <div class="rounded-md border p-4">
    <h2>Flavours</h2>
    <select multiple bind:value={flavours} class="scrollbar-none">
      {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
        <option class="block">
          {flavour}
        </option>
      {/each}
    </select>
  </div>
</div>

{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops}
    {scoops === 1 ? 'scoop' : 'scoops'}
    of {formatter.format(flavours)}
  </p>
{/if}
