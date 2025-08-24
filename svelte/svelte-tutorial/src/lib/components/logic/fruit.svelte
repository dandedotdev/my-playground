<script lang="ts">
  const emojis = {
    apple: '🍎',
    banana: '🍌',
    carrot: '🥕',
    doughnut: '🍩',
    egg: '🥚'
  } as const;

  let { name, index } = $props();
  let emoji = emojis[name as keyof typeof emojis];
</script>

<p>{emoji}: {name}(index: {index})</p>
