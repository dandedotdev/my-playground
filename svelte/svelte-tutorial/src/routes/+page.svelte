<script lang="ts">
	import Nested from '$lib/components/nested.svelte';

	let name = 'dandelion';
</script>

<div
	class="flex h-dvh flex-col items-center justify-center gap-4 bg-amber-100 dark:bg-slate-900 dark:text-white"
>
	<h1>
		Hello
		<span class="text-indigo-500 uppercase dark:text-sky-500">
			{name}
		</span>
	</h1>
	<Nested />
</div>
