<script lang="ts">
  import SpreadProps from '$lib/components/props/spread-props.svelte';

  const name = 'dandelion';

  const propsWayne = {
    name: 'Wayne',
    age: 90,
    description: 'I am a software engineer'
  };

  const propsHeather = {
    name: 'Heather',
    age: 'unknown',
    description: 'I am a UX designer'
  };
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
  <SpreadProps {...propsWayne} />
  <SpreadProps {...propsHeather} />
</div>
