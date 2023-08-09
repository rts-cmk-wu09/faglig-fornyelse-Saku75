<script lang="ts">
  import { dev } from "$app/environment";

  import Board from "./components/Board.svelte";
  import Debug from "./components/Debug.svelte";
  import Player from "./components/Player.svelte";
  import { gameStore } from "./gameStore";

  // Game loop
  const gameClock = setInterval(() => {
    if ($gameStore.player.keys.up && $gameStore.player.y > 0) {
      if ($gameStore.player.y < $gameStore.player.speed) {
        $gameStore.player.y = 0;
      } else {
        $gameStore.player.y -= $gameStore.player.speed;
      }
    }

    if (
      $gameStore.player.keys.down &&
      $gameStore.player.y < $gameStore.player.yLimit
    ) {
      if (
        $gameStore.player.yLimit - $gameStore.player.y <
        $gameStore.player.speed
      ) {
        $gameStore.player.y = $gameStore.player.yLimit;
      } else {
        $gameStore.player.y += $gameStore.player.speed;
      }
    }

    if ($gameStore.player.keys.left && $gameStore.player.x > 0) {
      if ($gameStore.player.x < $gameStore.player.speed) {
        $gameStore.player.x = 0;
      } else {
        $gameStore.player.x -= $gameStore.player.speed;
      }
    }

    if (
      $gameStore.player.keys.right &&
      $gameStore.player.x < $gameStore.player.xLimit
    ) {
      if (
        $gameStore.player.xLimit - $gameStore.player.x <
        $gameStore.player.speed
      ) {
        $gameStore.player.x = $gameStore.player.xLimit;
      } else {
        $gameStore.player.x += $gameStore.player.speed;
      }
    }
  }, 1000 / 60);
</script>

<Board>
  <Player />
</Board>

{#if dev}
  <Debug />
{/if}
