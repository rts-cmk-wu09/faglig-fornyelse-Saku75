<script lang="ts">
  import { gameStore } from "../gameStore";
</script>

<div
  class="fixed bottom-4 left-4 z-50 max-h-64 overflow-y-auto rounded-md bg-neutral-700 px-3 py-2 opacity-25 transition-opacity hover:opacity-75"
>
  <h2 class="text-lg font-bold">Debug</h2>
  <ul class="flex flex-col gap-1 pl-2">
    <li>
      <h3 class="font-bold">Game:</h3>
      <ul class="pl-2">
        <li>Score: {$gameStore.game.score}</li>
      </ul>
    </li>
    <li>
      <h3 class="font-bold">Player:</h3>
      <ul class="pl-2">
        <li>Name: {$gameStore.player.name}</li>
        <li>Speed: {$gameStore.player.speed}</li>
        <li>Width: {$gameStore.player.width}</li>
        <li>Height: {$gameStore.player.height}</li>
        <li>X: {$gameStore.player.x}</li>
        <li>X Limit: {$gameStore.player.xLimit}</li>
        <li>Y: {$gameStore.player.y}</li>
        <li>Y Limit: {$gameStore.player.yLimit}</li>
        <li>
          <h4 class="font-bold">Keys:</h4>
          <ul class="pl-2">
            <li>Up: {$gameStore.player.keys.up}</li>
            <li>Down: {$gameStore.player.keys.down}</li>
            <li>Left: {$gameStore.player.keys.left}</li>
            <li>Right: {$gameStore.player.keys.right}</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <h3 class="font-bold">Board:</h3>
      <ul class="pl-2">
        <li>Width: {$gameStore.board.width}</li>
        <li>Height: {$gameStore.board.height}</li>
        <li>Aspect ratio: {$gameStore.board.aspectRatio}</li>
        <li>Aspect ratio changed: {$gameStore.board.aspectRatioChanged}</li>
      </ul>
    </li>
  </ul>
</div>
