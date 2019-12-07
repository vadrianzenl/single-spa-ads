<script>
	import { onMount } from 'svelte';
	import AuthService from "services/AuthService";

	let customerInfo = {};
    let userInfo = {};

	onMount(async () => {
        customerInfo = AuthService.getCustomerInfo();
        userInfo = customerInfo.user;
    });
</script>

<style>
    .container {
        margin-top: 80px;
    }
</style>

<div class="container" style="margin-top: 80px">
    <h2>My Profile</h2>
    <hr />
    <form>
        <div class="form-group">
            <label for="fullName">Nombre Completo </label>
            <input id="fullName" class="form-control" type="text" value="{customerInfo.full_name}" readonly>
        </div>
        <div class="form-group">
            <label for="cellphone">Teléfono </label>
            <input id="cellphone" class="form-control" type="text" value="{customerInfo.cellphone}" readonly>
        </div>
        <div class="form-group">
            <label for="username">Usuario </label>
            <input id="username" class="form-control" type="text" value="{userInfo.username}"  readonly>
        </div>
        <div class="form-group">
            <label for="email">Email </label>
            <input id="email" class="form-control" type="text" value="{userInfo.email}" readonly>
        </div>
    </form>
</div>