<script>
  import { writable } from 'svelte/store';
  import { Moon, Sun } from 'lucide-svelte';

  const currentTheme = writable(window.Alpine.store('state').currentTheme);

  function toDark() {
    window.Alpine.store("state").setLocalConfig("wiki.theme", "dark");
    currentTheme.set('dark');
  }

  function toLight() {
    window.Alpine.store("state").setLocalConfig("wiki.theme", "light");
    currentTheme.set('light');
  }
</script>

{#if $currentTheme === 'light'}
  <button class="ghost icon" on:click={toDark}>
    <Moon class="h-5 w-5" />
  </button>
{/if}

{#if $currentTheme === 'dark'}
  <button class="ghost icon" on:click={toLight}>
    <Sun class="h-5 w-5" />
  </button>
{/if}