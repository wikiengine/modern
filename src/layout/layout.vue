<template>
    <div class="Vue">
        <nav>
            <a href="/">{{ CONFIG.logo_text }}</a>
            &nbsp;|&nbsp;
            <a href="/RecentChanges">최근 변경</a>
            &nbsp;|&nbsp;
            <a href="/RecentDiscuss">최근 토론</a>
            <p x-text="$store.state.session.account.uuid"></p>
        </nav>
        <main>
            <Title />
            <content-html />
        </main>
    </div>
</template>

<script>
import Title from './components/Title.vue';

export default {
    components: {
        Title
    }
}
</script>