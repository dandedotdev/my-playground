<script lang="ts">
  let m = $state({ x: 0, y: 0 });
</script>

<div
  class="flex size-100 items-center justify-center bg-cyan-900 italic"
  onpointermove={(event) => {
    m = { x: event.offsetX, y: event.offsetY };
  }}
>
  The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
