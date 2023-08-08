<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";

  async function toggleFullscreen() {
    if (window.__TAURI__) {
      appWindow.setFullscreen(!(await appWindow.isFullscreen()));
    } else {
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
    }
  }
</script>

{#if document.fullscreenEnabled}
  <button
    class="fixed right-4 top-4 z-50 rounded-md bg-neutral-700 p-2 opacity-25 transition-opacity hover:opacity-75"
    on:click={toggleFullscreen}
  >
    Fullscreen
  </button>
{/if}
