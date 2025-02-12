<script>
    import * as Card from "$lib/components/ui/card";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import ContentHtml from "../contentHtml.svelte";
    import Title from "../title.svelte";
    import Toolbar from "./toolbar.svelte";
</script>

<Card.Root class="w-full mt-2 md:w-3/4 md:mt-4 md:ml-4">
    <Card.Content>
    <div>
        <div class="flex flex-col md:flex-row md:items-center mb-2">
            <h1 class="text-3xl font-bold mb-3 md:mb-0">
                <Title/>
            </h1>
            <div class="self-end md:self-auto md:ml-auto">
                <Toolbar/>
            </div>
        </div>        
        <Separator/>
        <div class="mt-3">
            <ContentHtml />
        </div>
    </div>
    </Card.Content>
    <Separator/>
    <Card.Footer class="mt-3">
        최근변경일
    </Card.Footer>
</Card.Root>