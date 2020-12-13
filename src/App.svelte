<script>
import { onMount } from 'svelte';

import CovidApi from './api/CovidApi.svelte'
import ChartComponent from './components/Chart.svelte'

let countries = [];
let country = 'korea-south';
let totalStatus = [];

onMount(async () => {
  fetchCountryByTotalStatus()
})

function handleChange () {
  fetchCountryByTotalStatus()
};

async function fetchCountryByTotalStatus() {
  const totalStatusAPI = `https://api.covid19api.com/total/country/${country}`;
  try {
    const response = await fetch(totalStatusAPI);
    totalStatus = await response.json();
    totalStatus.sort((a, b) => {
      if (a.Date < b.Date) {
        return 1;
      }
      if (a.Date > b.Date) {
        return -1;
      }
      return 0;
    })
  } catch (err) {
    console.error(err)
  }
}

export let title;
</script>

<CovidApi bind:countries={countries}/>

<main>
  <h1>{title}</h1>
  <select bind:value={country} on:change={handleChange}>
  {#each countries as country}
    <option value="{country.Slug}">{country.Country}</option>
  {/each}
  </select>
  <ChartComponent/>
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
      {#each totalStatus as item}
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
  .table {
    td {
      border: 1px solid black;
    }
  }
</style>
