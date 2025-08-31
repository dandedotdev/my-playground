<script>
  let checked = $state(false);
</script>

<label>
  <input type="checkbox" bind:checked />
  Yes! Send me regular email spam
</label>

{#if checked}
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
  <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button
  class="rounded-md bg-indigo-500 px-4 py-2 text-white disabled:opacity-50 dark:bg-sky-500"
  disabled={!checked}
>
  Subscribe
</button>
