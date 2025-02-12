<script>
  import { Clock, MessageCircle } from 'lucide-svelte';

  const navLinks = [
    { href: '/RecentChanges', icon: Clock, label: '최근 변경' },
    { href: '/RecentDiscuss', icon: MessageCircle, label: '최근 토론' }
  ];
</script>

<div class="hidden md:flex ml-6 space-x-4">
  {#each navLinks as link (link.href)}
    <a href={link.href} class="text-md font-bold hover:text-primary flex gap-1 text-black dark:text-white">
      <svelte:component this={link.icon} class="h-5 w-5" />
      {link.label}
    </a>
  {/each}
</div>