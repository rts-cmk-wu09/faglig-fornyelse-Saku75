<script lang="ts">
  import { roundNumber } from "$lib/utils/roundNumber";
  import { gameStore } from "../gameStore";

  // Calculate board aspect ratio
  $: $gameStore.board.aspectRatio = roundNumber(
    $gameStore.board.width / $gameStore.board.height,
    {
      direction: "up",
      precision: 2,
    }
  );

  // Check if aspect ratio has changed once
  $: if ($gameStore.board.aspectRatio !== 1.78) {
    $gameStore.board.aspectRatioChanged = true;
  }
</script>

<div
  class="relative mx-auto aspect-video max-h-screen outline outline-neutral-700"
  bind:clientWidth={$gameStore.board.width}
  bind:clientHeight={$gameStore.board.height}
>
  <slot />
</div>
