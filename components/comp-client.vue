<template>
  <section id="client">
    <div class="content">
      <div class="container">
        <div class="col-12 row">
          <p class="title offset-4 col-4 text-center">
            BPLAY GAME
          </p>
          <p class="subtitle offset-4 col-4 text-center">
            OUR CLIENTS
          </p>
          <div class="row d-flex justify-content-center">
            <div v-for="(client, index) in clientList" :key="index" class="col-2dot4">
              <img :src="require(`~/assets/images/${client}`)" class="w-100 mb-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      clientList: [
        'client-9.png',
        'client-12.png',
        'client-16.png',
        'client-bet365.png',
        'client-betfair.png',
        'client-betway.png',
        'client-bwin.png',
        'client-williamhill.png',
        'client-1.png',
        'client-2.png',
        'client-5.png',
        'client-6.png'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
// .content {
//   padding-top: 10rem;
// }
</style>
