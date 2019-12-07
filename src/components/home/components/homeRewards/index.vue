<template>
    <div class="container">
        <h2>Listado de Beneficios</h2>
        <hr />
        <div class="card text-center" v-if="accountCustomer">
            <div class="card-header">
                Tus estadísticas en {{ accountCustomer.commerce.name }}
            </div>
            <div class="card-body">
                <h4 class="card-title">{{ accountCustomer.total_points }} puntos</h4>
                <p class="card-text">{{ accountCustomer.total_visits }} visitas</p>
            </div>
            <div class="card-footer text-muted">
                El {{ accountCustomer.first_joined }} fue tu primera visita
            </div>
        </div>
        <br />
        <button type="button" class="btn btn-primary" v-on:click="goBack">Regresar</button>
        <br /><br />
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Beneficio</th>
                <th scope="col">Puntos</th>
                <th scope="col">Fecha Inicio</th>
                <th scope="col">Fecha Fin</th>
            </tr>
            </thead>
            <tbody v-if="rewards.length > 0">
            <tr v-for="reward in rewards" :key="reward.id">
                <th scope="row">{{ reward.id }}</th>
                <td>{{ reward.reward.name }}</td>
                <td>{{ reward.points }}</td>
                <td>{{ reward.start_date }}</td>
                <td>{{ reward.end_date }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
  import * as rewardApi from "api/rewardApi.js";
  import * as accountApi from "api/accountApi.js";
  import AuthService from "services/AuthService";

  export default {
    name: 'HomeRewards',
    components: {},
    props: {
      commerceId: {
        type: Number
      }
    },
    data() {
      return {
        rewards: [],
        customerInfo: '',
        accounts: [],
        accountCustomer: ''
      }
    },
    watch: {
      commerceId(newValue) {
        rewardApi.getRewards().then(rewardsList => {
          this.rewards = rewardsList.filter(reward => reward.reward.commerce.id === newValue);
        });
        this.accountCustomer = this.accounts.find(account => account.commerce.id === newValue);
        console.log(JSON.stringify(this.accountCustomer))
      }
    },
    methods: {
      goBack() {
        this.$emit('goBack');
      }
    },
    mounted () {
      this.customerInfo = AuthService.getCustomerInfo();
      accountApi.getAccounts().then(accounts => {
        this.accounts = accounts.filter(account => account.customer.id === this.customerInfo.id);
      });
    }
  }
</script>

<style type="text/css">
    .container {
        margin-top: 80px;
        background-image: none;
    }
</style>