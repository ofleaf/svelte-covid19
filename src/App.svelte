<script>
	export let title;
</script>

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
      <tr>
        <td>South Korea</td>
        <td>2020-10-17</td>
        <td>1111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
      </tr>
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
