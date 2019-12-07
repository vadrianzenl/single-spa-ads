<script>
	import { onMount } from 'svelte';
	import * as exchangesApi from "api/exchangesApi.js";
	import AuthService from "services/AuthService";

	let exchanges = [];

	onMount(async () => {
		const res = await exchangesApi.getExchanges();
		exchanges = res.filter(exchange => exchange.account.customer.id === AuthService.getCustomerInfo().id);
	});
</script>

<style>
	.container {
		margin-top: 80px;
	}
</style>

<div class="container">
	<h2>Listado de Canjes</h2>
	<hr />
	<table class="table">
		<thead class="thead-dark">
		<tr>
			<th scope="col">#</th>
			<th scope="col">Comercio</th>
			<th scope="col">Beneficio</th>
			<th scope="col">Fecha</th>
			<th scope="col">Total de Puntos</th>
		</tr>
		</thead>
		<tbody>
		{#each exchanges as exchange}
			<tr>
				<th scope="row">{exchange.id}</th>
				<td>{exchange.account.commerce.name}</td>
				<td>{exchange.reward_detail.reward.name}</td>
				<td>{exchange.exchange_date}</td>
				<td>{exchange.total_points}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>