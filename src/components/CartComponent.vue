<template lang="html">

  <section class="cart-component">
    <h1 class="text-center mt-5">Cart</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cart-component',
    props: [],
    mounted () {

      // ! guardamos en una variable el token que nos devuelve el servidor
      let isLogged = localStorage.getItem("isLogged");

      // ! si el token existe, entonces redirigimos al usuario a la pagina de home sino al login
      if (isLogged != "true") {
        this.$router.push("/login");
      }

    },
    data () {
      return {
        cart: [],
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >

</style>
