<template lang="html">

  <div class="container">
    <div class="row">
      <div v-for="(item, index) in this.products" :key="index" class="col-md py-5">
        <div class="col-md">
          <div class="card-body shadow-5-strong">
            <h5 class="card-title"><b>{{item.title}}</b></h5>
            <p class="card-text fst-italic" style="font-size: 90%">{{item.description}}</p>
            <p class="card-text">Price: {{item.price}}$</p>
            <p class="card-text">Amount: {{item.amount}} units</p>
            <button type="button" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import {mapGetters} from 'vuex';

  export default  {
    name: 'home-component',
    props: [],
    async mounted () {
      let isLogged = localStorage.getItem("isLogged");

      if (isLogged != "true") {
        this.$router.push("/login");
      }

      this.$store.dispatch('showProducts');
    },
    data () {
      return {
        
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters({
        products: 'getProducts'
      })
    }
}


</script>

<style scoped>

</style>
