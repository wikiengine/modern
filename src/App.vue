<template>
	<nav>
		<a href="/">{{ CONFIG.logo_text }}</a>
		&nbsp;|&nbsp;
		<a href="/RecentChanges">최근 변경</a>
		&nbsp;|&nbsp;
		<a href="/RecentDiscuss">최근 토론</a>
		<!--alpine사용 예제-->
		<p x-text="$store.state.session.account.uuid"></p>
	</nav>
	<main>
		<!--제목-->
		<div>
			<h1 v-if="page.data.document && page.viewName !== 'error'">
				<a href="#">
					<span v-if="page.data.document.forceShowNamespace !== false" class="namespace">{{ page.data.document.namespace }}: </span>{{ page.data.document.title }}
				</a>
				<small v-if="page.viewName === 'edit_edit_request' && page.viewName === 'edit_request'">(편집요청)</small>
				<small v-if="page.viewName === 'edit' && page.data.body.section">(r{{ page.data.body.baserev }} 문단편집)</small>
				<small v-if="page.viewName === 'edit' && page.data.body.baserev === '0'">(새 문서 생성)</small>
				<small v-if="page.viewName === 'edit'">(r{{ page.data.body.baserev }} 편집)</small>
				<small v-if="page.viewName === 'history'">(역사)</small>
				<small v-if="page.viewName === 'backlink'">(역링크)</small>
				<small v-if="page.viewName === 'move'">(이동)</small>
				<small v-if="page.viewName === 'delete'">(삭제)</small>
				<small v-if="page.viewName === 'acl'">(ACL)</small>
				<small v-if="page.viewName === 'thread'">(토론)</small>
				<small v-if="page.viewName === 'thread_list'">(토론 목록)</small>
				<small v-if="page.viewName === 'thread_list_close'">(닫힌 토론)</small>
				<small v-if="page.viewName === 'thread_request_list'">(닫힌 편집 요청)</small>
				<small v-if="page.viewName === 'diff'">(비교)</small>
				<small v-if="page.viewName === 'revert' && page.data.rev">(r{{  page.data.rev  }}로 되돌리기)</small>
				<small v-if="page.viewName === 'raw' && page.data.rev">(r{{  page.data.rev  }} RAW)</small>
				<small v-if="page.viewName === 'blame' && page.data.rev">(r{{  page.data.rev  }} Blame)</small>
				<small v-if="page.viewName === 'wiki' && page.data.rev">(r{{  page.data.rev  }} 판)</small>
			</h1>
			<h1 v-else>{{ page.title }}</h1> 
		</div>
		<content />
	</main>
	<footer>
		<a href="//testwiki.hyonsu.com">the tree</a>
	</footer>
</template>

<style scoped>
main {
	margin: 2px;
}
.namespace {
	color: #8d8d8d;
}
</style>