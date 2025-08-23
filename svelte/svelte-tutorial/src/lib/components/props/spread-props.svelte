<script lang="ts">
  let { name, age, description } = $props();
</script>

<div class="w-80 rounded-lg border border-gray-300 p-4">
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  <p>Description: {description}</p>
</div>
