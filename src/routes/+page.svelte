<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>
  
<h1>계정 목록</h1>
{#if data.data.length > 0}
  <ul>
      {#each data.data as account}
          <li>{account.powerlink_id}</li>
      {/each}
  </ul>
{:else}
  <p>계정 정보를 불러올 수 없습니다!!</p>
{/if}