<script>
    import * as Sheet from "$lib/components/ui/sheet";
    import { Button } from "$lib/components/ui/button";
    import { Menu } from "lucide-svelte";
    import { Clock, MessageCircle } from 'lucide-svelte';

    let isMobileMenuOpen = false;

    function toggleMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    const navLinks = [
    { href: '/RecentChanges', icon: Clock, label: '최근 변경' },
    { href: '/RecentDiscuss', icon: MessageCircle, label: '최근 토론' }
    ];
</script>

<Sheet.Root>
    <Sheet.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon" class="md:hidden" on:click="{toggleMenu}" open={isMobileMenuOpen}>
            <Menu class="h-5 w-5" />
            <span class="sr-only">Open menu</span>
        </Button>
    </Sheet.Trigger>
    <Sheet.Content side="right" class="w-[240px] sm:w-[300px]">
        <Sheet.Header>
            <Sheet.Title>메뉴</Sheet.Title>
        </Sheet.Header>
            <div class="flex flex-col space-y-4 mt-4">
                {#each navLinks as link (link.href)}
                <a
                    href={link.href}
                    class="text-sm font-bold hover:text-primary flex gap-2 text-black dark:text-white"
                    on:click="{() => isMobileMenuOpen = false}"
                >
                <svelte:component this={link.icon} class="h-5 w-5" /> {link.label}
                </a>
                {/each}
            </div>
    </Sheet.Content>
</Sheet.Root>