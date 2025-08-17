<script lang="ts">
	let name = 'dandelion';
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
	{@html `
    <div class="p-4 w-88 h-68 bg-indigo-900 dark:bg-sky-900">
      <img src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy-downsized.gif" alt="Rick roll" />
    </div>
  `}
</div>
