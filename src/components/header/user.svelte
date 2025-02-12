<script>
    import * as Avatar from "$lib/components/ui/avatar";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    const session = window.session;
    let isLoggedIn;
    if (session.account.type == 1) {
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
</script>
<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} size="icon" variant="ghost">
            <Avatar.Root className="h-8 w-8">
                {#if session.gravatar_url}
                    <Avatar.Image src={session.gravatar_url} alt={session.account.name} />
                {:else}
                    <Avatar.Image src="https://avatar.iran.liara.run/public" alt={session.account.name} />
                {/if}
                <Avatar.Fallback>🔄</Avatar.Fallback>
            </Avatar.Root>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Label>
            {#if isLoggedIn}
                {session.account.name}<br/>Member
            {:else}
                {session.account.name}<br/>IP
            {/if}
        </DropdownMenu.Label>
            {#if isLoggedIn}
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                    <a class="text-black dark:text-white font-bold" href="/member/mypage">내정보</a>
                </DropdownMenu.Item>
            {/if}
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
            {#if isLoggedIn}
                <a class="text-black dark:text-white font-bold" href="/member/logout">로그아웃</a>
            {:else}
                <a class="text-black dark:text-white font-bold" href="/member/login">로그인</a>
            {/if}
        </DropdownMenu.Item>
        </DropdownMenu.Content>
</DropdownMenu.Root>