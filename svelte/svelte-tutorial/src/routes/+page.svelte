<script lang="ts">
  import ComponentEvents from '$lib/components/events/component-events.svelte';

  const name = 'dandelion';

  let value = $state(0);
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
  <ComponentEvents increment={() => (value += 1)} decrement={() => (value -= 1)} />
  <p>Value: {value}</p>
</div>
