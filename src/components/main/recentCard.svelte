<script>
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card";
    import { Separator } from "$lib/components/ui/separator";
    import { Clock } from "lucide-svelte";

    let recentList = [];
    let recentLength;

    const getDateStr = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString();
    };

    const doc_action_link = (document, action) => {
        return `/${action}/${document}`;
    };

    const updateRecentList = () => {
        recentList = window.Alpine.store('state').recent.slice(0, 15);
        recentLength = window.Alpine.store('state').recent.length
    };

    onMount(() => {
        updateRecentList();

        const interval = setInterval(() => {
            updateRecentList();
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<Card.Root class="w-full md:w-1/4 md:mt-4 md:mr-4">
    <Card.Header>
        <Card.Title class="flex gap-3 text-xl mb-2"><Clock />최근변경</Card.Title>
    </Card.Header>
    <Separator/>
    <Card.Content>
        {#if recentLength > 0}
            <ul>
                {#each recentList as r, i}
                    <li>
                        <a class="recent-item" class:removed={r.status === 'delete'} href={doc_action_link(r.document, 'w')} on:click={() => window.Alpine.store('state').aClickHandler()}>
                            [<time data-type="keep" datetime={new Date(r.date * 1000).toISOString()}>{getDateStr(r.date)}</time>] <span>{r.document}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        {:else}
            <h1>최근 변경 없음</h1>
        {/if}
    </Card.Content>
    <Card.Footer>
        <a href="/RecentChanges" class="text-black dark:text-white font-bold">더보기</a>
    </Card.Footer>
</Card.Root>