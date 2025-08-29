<script lang="ts">
  let a = $state(1);
  let b = $state(2);
</script>

<label>
  <input type="number" min="0" max="10" bind:value={a} />
  <input type="range" min="0" max="10" bind:value={a} />
</label>

<label>
  <input type="number" min="0" max="10" bind:value={b} />
  <input type="range" min="0" max="10" bind:value={b} />
</label>

<p>{a} + {b} = {a + b}</p>
