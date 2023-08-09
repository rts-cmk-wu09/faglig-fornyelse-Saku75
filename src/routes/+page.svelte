<script lang="ts">
  import FullscreenButton from "$lib/components/FullscreenButton/FullscreenButton.svelte";
  import Game from "$lib/components/Game/Game.svelte";
</script>

<main class="grid min-h-screen">
  <FullscreenButton />
  <div class="w-full place-self-center">
    <Game />
  </div>
</main>
