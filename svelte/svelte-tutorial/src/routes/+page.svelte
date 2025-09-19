<script lang="ts">
  import TheUseDirective from '$lib/components/actions/the-use-directive.svelte';

  const name = 'dandelion';
</script>

<svelte:head>
  <meta name="description" content="This is a demo page for Svelte Tutorial" />
  <title>Svelte Tutorial</title>
</svelte:head>

<div class="flex h-dvh flex-col items-center justify-center gap-4 bg-slate-800 text-white">
  <h1 class="opacity-50">
    Hello
    <span class="user-select-none uppercase text-sky-500">
      {name}
    </span>
  </h1>
  <TheUseDirective />
</div>
