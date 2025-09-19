<script lang="ts">
  import Box from './box.svelte';
</script>

<div class="boxes">
  <Box --bg="red" />
  <Box --bg="green" />
  <Box --bg="blue" />
</div>

<!--
  <svelte-css-wrapper style="display: contents; --bg: red;">
    <div class="box .."></div>
  </svelte-css-wrapper>
-->
