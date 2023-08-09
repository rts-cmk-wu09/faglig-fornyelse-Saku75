<script lang="ts">
  import { roundNumber } from "$lib/utils/roundNumber";
  import { gameStore } from "../gameStore";

  // Listen for keydown
  window.addEventListener("keydown", (e) => {
    // Get the key
    const key = e.key;

    switch (key) {
      case "w":
      case "ArrowUp":
        $gameStore.player.keys.up = true;
        break;
      case "s":
      case "ArrowDown":
        $gameStore.player.keys.down = true;
        break;
      case "a":
      case "ArrowLeft":
        $gameStore.player.keys.left = true;
        break;
      case "d":
      case "ArrowRight":
        $gameStore.player.keys.right = true;
        break;
    }
  });

  // Listen for keyup
  window.addEventListener("keyup", (e) => {
    // Get the key
    const key = e.key;

    switch (key) {
      case "w":
      case "ArrowUp":
        $gameStore.player.keys.up = false;
        break;
      case "s":
      case "ArrowDown":
        $gameStore.player.keys.down = false;
        break;
      case "a":
      case "ArrowLeft":
        $gameStore.player.keys.left = false;
        break;
      case "d":
      case "ArrowRight":
        $gameStore.player.keys.right = false;
        break;
    }
  });

  $gameStore.player.xLimit = roundNumber(
    100 - ($gameStore.player.width / $gameStore.board.width) * 100,
    { precision: 2 }
  );
  $gameStore.player.yLimit = roundNumber(
    100 - ($gameStore.player.height / $gameStore.board.height) * 100,
    { precision: 2 }
  );
</script>

<div
  class="absolute aspect-square w-[2%] bg-red-600"
  style={`left: ${$gameStore.player.x}%; top: ${$gameStore.player.y}%`}
  bind:clientWidth={$gameStore.player.width}
  bind:clientHeight={$gameStore.player.height}
/>
