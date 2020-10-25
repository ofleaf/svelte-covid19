<script>
  import { onMount } from "svelte";

  const apiURL = 'https://api.covid19api.com/total/country/south-korea';

  export let list = [];

  onMount(async () => {
    const response = await fetch(apiURL);
    list = await response.json();
  });
</script>