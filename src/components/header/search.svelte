<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import Input from "$lib/components/ui/input/input.svelte";
    import { Search } from "lucide-svelte";
</script>
    
<Dialog.Root>
    <Dialog.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon" class="md:hidden search-mobile">
            <Search />
        </Button>
        <Button builders={[builder]} variant="search outline" class="hidden md:block search-desktop relative h-8 w-auto justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64">
            <span class="text-left text-lg">Search...</span>
        </Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Search</Dialog.Title>
        </Dialog.Header>
        <Input placeholder="Search..." class="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"/>
        <ul class="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <li class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                검색 목록
            </li>
            <li class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                검색목록
            </li>
        </ul>
    </Dialog.Content>
</Dialog.Root>