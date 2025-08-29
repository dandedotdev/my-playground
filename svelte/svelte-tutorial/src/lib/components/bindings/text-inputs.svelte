<script lang="ts">
  let name = $state('world');
</script>

<div class="rounded-md bg-sky-900">
  <input class="p-2" bind:value={name} />
</div>
<h2>Hello {name}!</h2>
