<script lang="ts">
  let { color, size } = $props();

  let canvas = $state<HTMLCanvasElement | null>();
  let context = $state<CanvasRenderingContext2D | null>();
  let coords = $state<{ x: number; y: number } | null>();

  $effect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    context = ctx;
    resize();
  });

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
</script>

<svelte:window onresize={resize} />

<canvas
  bind:this={canvas}
  onpointerdown={(e) => {
    coords = { x: e.offsetX, y: e.offsetY };
    if (!context) return;
    context.fillStyle = color;
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, size / 2, 0, 2 * Math.PI);
    context.fill();
  }}
  onpointerleave={() => {
    coords = null;
  }}
  onpointermove={(e) => {
    const previous_coords = coords;
    coords = { x: e.offsetX, y: e.offsetY };
    if (e.buttons === 1) {
      e.preventDefault();
      if (!context || !previous_coords) return;
      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(previous_coords.x, previous_coords.y);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
    }
  }}
></canvas>

{#if coords}
  <div
    class="preview"
    style:--color={color}
    style:--size="{size}px"
    style:--x="{coords.x}px"
    style:--y="{coords.y}px"
  ></div>
{/if}

<style>
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .preview {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, -50%);
    background: var(--color);
    border-radius: 50%;
    opacity: 0.5;
    pointer-events: none;
  }
</style>
