<script lang="ts">
	import src from '$lib/assets/HereAfter-logo-b.svg';

	let name = 'dandelion';
	let hereafterBrandName = 'HereAfter';
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
	<img {src} alt="{hereafterBrandName} logo (blue version)" />
</div>
