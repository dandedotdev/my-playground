<script lang="ts">
  let flipped = $state(false);
</script>

<h2>Flip the card</h2>

<!-- Converted by clsx -->
<button class={['card', { flipped }]} onclick={() => (flipped = !flipped)}>
  <div class="front">
    <span class="symbol">♠</span>
  </div>
  <div class="back">
    <div class="pattern"></div>
  </div>
</button>

<style>
  .card {
    position: relative;
    aspect-ratio: 2.5 / 3.5;
    font-size: min(1vh, 0.25rem);
    height: 80em;
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 400ms;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card.flipped {
    transform: rotateY(0);
  }

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    border: 1px solid white;
    box-sizing: border-box;
    padding: 2em;
  }

  .back {
    transform: rotateY(180deg);
  }

  .symbol {
    font-size: 30em;
  }

  .pattern {
    width: 100%;
    height: 100%;
    /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
    background-image:
      radial-gradient(midnightblue 0.9em, transparent 1em),
      repeating-radial-gradient(
        purple 0,
        purple 0.4em,
        transparent 0.5em,
        transparent 2em,
        purple 2.1em,
        purple 2.5em,
        transparent 2.6em,
        transparent 5em
      );
    background-size:
      3em 3em,
      9em 9em;
    background-position: 0 0;
    border-radius: 1em;
  }
</style>
