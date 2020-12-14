<script>
import { onMount } from 'svelte';

import CovidApi from './api/CovidApi.svelte'
import ChartComponent from './components/Chart.svelte'

let countries = [];
let country = 'korea-south';
let totalStatus = [];

onMount(async () => {
  await fetchCountryByTotalStatus();
});

function handleChange () {
  fetchCountryByTotalStatus();
}

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
  <div class="container">
    <h1 class="title">{title}</h1>
    <div class="country-div">
      <select bind:value={country} on:change={handleChange}>
      {#each countries as country}
        <option value="{country.Slug}">{country.Country}</option>
      {/each}
      </select>
    </div>
    <ChartComponent/>
    <table class="status-table">
      <thead>
        <tr class="status-table__tr">
          <th class="status-table__th">Country</th>
          <th class="status-table__th">Date</th>
          <th class="status-table__th">Confirmed</th>
          <th class="status-table__th">Deaths</th>
          <th class="status-table__th">Recovered</th>
          <th class="status-table__th">Active</th>
        </tr>
      </thead>
      <tbody>
        {#each totalStatus as item}
        <tr class="status-table__tr">
          <td class="status-table__td">{item.Country}</td>
          <td class="status-table__td">{item.Date}</td>
          <td class="status-table__td">{item.Confirmed}</td>
          <td class="status-table__td">{item.Deaths}</td>
          <td class="status-table__td">{item.Recovered}</td>
          <td class="status-table__td">{item.Active}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style lang="scss">
  @import "./assets/styles/_mixin";

  @include sm {
    .container {
      width: 540px;
    }
  }

  @include md {
    .container {
      width: 720px;
    }
  }

  @include lg {
    .container {
      width: 960px;
    }
  }

  @include xl {
    .container {
      width: 1140px;
    }
  }

  @include xxl {
    .container {
      width: 1320px;
    }
  }

  .container {
    margin: 0 auto;
    padding: 1rem 0;
  }

  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

  .country-div {
    text-align: center;
  }

  .status-table {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    .status-table__tr {
      border: 1px solid black;
      .status-table__th {
        font-weight: bold;
        padding: .5rem 1rem;
      }
      .status-table__td {
        padding: .25rem 1rem;
      }
    }
  }
</style>
