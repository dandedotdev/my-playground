<script lang="ts">
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    let interval_id = setInterval(() => {
      elapsed++;
    }, interval);

    return () => {
      clearInterval(interval_id);
    };
  });
</script>

<button onclick={() => interval /= 2}>Speed up</button>
<button onclick={() => interval *= 2}>Slow down</button>
<p>Elapsed: {elapsed}</p>
