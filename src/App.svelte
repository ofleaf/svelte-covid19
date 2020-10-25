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
	<table>
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

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
