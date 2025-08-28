<script lang="ts">
  import BigRedButton from './big-red-button.svelte';
  import horn from '$lib/assets/horn.mp3';

  let audioElement: HTMLAudioElement;

  function honk() {
    audioElement.load();
    audioElement.play();
  }
</script>

<audio bind:this={audioElement} src={horn}></audio>
<BigRedButton onclick={honk} />
