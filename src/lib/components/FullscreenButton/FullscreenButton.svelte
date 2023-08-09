<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
  import { Expand, Shrink } from "lucide-svelte";

  let isFullscreen: boolean = false;

  if (window.__TAURI__) {
    appWindow.isFullscreen().then((fullscreen) => {
      isFullscreen = fullscreen;
    });
  } else {
    isFullscreen = !!document.fullscreenElement;
  }

  function toggleFullscreen() {
    if (window.__TAURI__) {
      appWindow.setFullscreen(!isFullscreen);
    } else {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }

    isFullscreen = !isFullscreen;
  }
</script>

{#if document.fullscreenEnabled}
  <button
    class="fixed right-4 top-4 z-50 rounded-md bg-neutral-700 p-2 opacity-25 transition-opacity hover:opacity-75"
    on:click={toggleFullscreen}
  >
    {#if isFullscreen}
      <Shrink />
    {:else}
      <Expand />
    {/if}
  </button>
{/if}
