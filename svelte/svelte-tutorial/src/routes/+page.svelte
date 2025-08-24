<script lang="ts">
  import KeyedEachBlocks from '$lib/components/logic/keyed-each-blocks.svelte';

  const name = 'dandelion';
</script>

<svelte:head>
  <meta name="description" content="This is a demo page for Svelte Tutorial" />
  <title>Svelte Tutorial</title>
</svelte:head>

<div
  class="flex h-dvh flex-col items-center justify-center gap-4 bg-amber-100 dark:bg-slate-900 dark:text-white"
>
  <h1>
    Hello
    <span class="text-indigo-500 uppercase dark:text-sky-500">
      {name}
    </span>
  </h1>
  <KeyedEachBlocks />
</div>
