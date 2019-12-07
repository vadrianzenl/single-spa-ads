<script>
	import { onMount } from 'svelte';
	import * as transactionsApi from "api/transactionsApi.js";
	import AuthService from "services/AuthService";

	let transactions = [];

	onMount(async () => {
    	const res = await transactionsApi.getTransactions();
    	transactions = res.filter(transaction => transaction.account.customer.id === AuthService.getCustomerInfo().id);
    });
</script>

<style>
    .container {
        margin-top: 80px;
    }
</style>

<div class="container">
    <h2>Listado de Transacciones</h2>
    <hr />
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Comercio</th>
                <th scope="col">Número de Ticket</th>
                <th scope="col">Fecha</th>
                <th scope="col">Monto</th>
                <th scope="col">Total de Puntos</th>
            </tr>
        </thead>
        <tbody>
        {#each transactions as transaction}
            <tr>
                <th scope="row">{transaction.id}</th>
                <td>{transaction.account.commerce.name}</td>
                <td>{transaction.ticket_number}</td>
                <td>{transaction.ticket_date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.total_points}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>