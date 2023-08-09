<script lang="ts">
  import { dev } from "$app/environment";

  import Board from "./components/Board.svelte";
  import Debug from "./components/Debug.svelte";
  import Player from "./components/Player.svelte";
</script>

<Board>
  <Player />
</Board>

{#if dev}
  <Debug />
{/if}
