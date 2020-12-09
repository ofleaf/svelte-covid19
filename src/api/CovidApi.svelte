<script>
  import { onMount } from "svelte";

  const countryAPI = 'https://api.covid19api.com/countries';

  export let countries = [];

  onMount(async () => {
    try {
      const response = await fetch(countryAPI);
      countries = await response.json();
      countries.sort((a, b) => {
        return a.Slug > b.Slug
        ? 1
        : -1
      });
    } catch (err) {
      console.error(err)
    }
  });
</script>