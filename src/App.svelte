<script>
  import CovidApi from './api/CovidApi.svelte'
  let list = [];
	export let title;
</script>

<CovidApi bind:list={list}/>

<main>
	<h1>{title}</h1>
	<select>
	  <option>South Korea</option>
	</select>
	<table class="table">
	  <thead>
      <tr>
        <th>Country</th>
        <th>Date</th>
        <th>Confirmed</th>
        <th>Deaths</th>
        <th>Recovered</th>
        <th>Active</th>
      </tr>
	  </thead>
	  <tbody>
      {#each list as item}
      <tr>
        <td>{item.Country}</td>
        <td>{item.Date}</td>
        <td>{item.Confirmed}</td>
        <td>{item.Deaths}</td>
        <td>{item.Recovered}</td>
        <td>{item.Active}</td>
      </tr>
      {/each}
	  </tbody>
	</table>
</main>

<style lang="scss">
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  $color: #ff3e00;
  main {
    text-align: center;
    padding: 1em;
    max-width: 1920px;
    margin: 0 auto;
  }

  h1 {
    color: $color;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  };

  table, th, tr, td {
    border: 1px solid gray;
    border-collapse: collapse;
  }

  .table {
    width: 100%;
  }
</style>
