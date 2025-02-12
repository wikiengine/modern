<script>
    import Footer from "./components/footer.svelte";
    import Header from "./components/header/header.svelte";
    import Notice from "./components/header/notice.svelte";
    import Main from "./components/main/main.svelte";
</script>
<div class="bg-neutral-100 dark:bg-neutral-900 w-full h-full">
    <Header/>
    <Notice/>
    <Main/>
    <Footer/>
</div>