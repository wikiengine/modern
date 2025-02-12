<script>
    import Links from "./links.svelte";
    import MobileLinks from "./mobileLinks.svelte";
    import User from "./user.svelte";
    import ThemeToggle from "./themeToggle.svelte"
    import Search from "./search.svelte";
</script>
<header class="border-b bg-white dark:bg-black">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-black dark:text-white">{window.CONFIG.site_name}</a>
          <Links/>
        </div>
        <div class="flex items-center space-x-4">
            <Search/>
            <ThemeToggle/>
            <User/>
            <MobileLinks/>
        </div>
      </nav>
    </div>
</header>