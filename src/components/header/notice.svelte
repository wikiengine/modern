<script>
    import { Megaphone } from 'lucide-svelte';
  
    let notice = window.CONFIG?.notice;
  </script>
  
  {#if notice}
    <div class="hs-removing:-translate-y-full bg-blue-500 dark:bg-blue-800">
      <div class="max-w-[85rem] px-2 py-2 sm:px-6 lg:px-8 mx-auto">
        <div class="flex">
          <Megaphone size={22} color="#ffffff" />
          &nbsp;
          <p class="text-white">{notice}</p>
        </div>
      </div>
    </div>
  {/if}