<script>
    let page = window.page;
  </script>
  
{#if page && page.data.document && page.viewName !== 'error'}
<h1>
    <a href="/" class="text-black dark:text-white font-bold">
        {#if page.data.document.forceShowNamespace !== true}
            <span class="text-gray-700 dark:text-gray-500 font-bold">{page.data.document.namespace}: </span>
        {/if}
        {page.data.document.title}
    </a>
    {#if page.viewName === 'edit_edit_request' || page.viewName === 'edit_request'}
    <small>(편집요청)</small>
    {:else if page.viewName === 'edit' && page.data.body.section}
    <small>(r{page.data.body.baserev} 문단편집)</small>
    {:else if page.viewName === 'edit' && page.data.body.baserev === '0'}
    <small>(새 문서 생성)</small>
    {:else if page.viewName === 'edit'}
    <small>(r{page.data.body.baserev} 편집)</small>
    {:else if page.viewName === 'history'}
    <small>(역사)</small>
    {:else if page.viewName === 'backlink'}
    <small>(역링크)</small>
    {:else if page.viewName === 'move'}
    <small>(이동)</small>
    {:else if page.viewName === 'delete'}
    <small>(삭제)</small>
    {:else if page.viewName === 'acl'}
    <small>(ACL)</small>
    {:else if page.viewName === 'thread'}
    <small>(토론)</small>
    {:else if page.viewName === 'thread_list'}
    <small>(토론 목록)</small>
    {:else if page.viewName === 'thread_list_close'}
    <small>(닫힌 토론)</small>
    {:else if page.viewName === 'thread_request_list'}
    <small>(닫힌 편집 요청)</small>
    {:else if page.viewName === 'diff'}
    <small>(비교)</small>
    {:else if page.viewName === 'revert' && page.data.rev}
    <small>(r{page.data.rev}로 되돌리기)</small>
    {:else if page.viewName === 'raw' && page.data.rev}
    <small>(r{page.data.rev} RAW)</small>
    {:else if page.viewName === 'blame' && page.data.rev}
    <small>(r{page.data.rev} Blame)</small>
    {:else if page.viewName === 'wiki' && page.data.rev}
    <small>(r{page.data.rev} 판)</small>
    {/if}
</h1>
{:else}
<h1>{page.title}</h1>
{/if}  