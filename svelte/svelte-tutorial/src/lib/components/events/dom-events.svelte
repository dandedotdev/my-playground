<script lang="ts">
  let m = $state({ x: 0, y: 0 });

  function onpointermove(event: PointerEvent) {
    m = { x: event.offsetX, y: event.offsetY };
  }
</script>

<div class="flex size-100 items-center justify-center bg-sky-900" {onpointermove}>
  The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
