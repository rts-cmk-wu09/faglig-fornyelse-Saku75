<script lang="ts">
  import "../app.scss";
  import { appWindow } from "@tauri-apps/api/window";

  async function toggleFullscreen() {
    appWindow.setFullscreen(!(await appWindow.isFullscreen()));
  }
</script>

<button
  class="fixed right-4 top-4 z-50 rounded-md bg-neutral-700 p-2 opacity-25 transition-opacity hover:opacity-75"
  on:click={toggleFullscreen}>Fullscreen</button
>

<slot />
