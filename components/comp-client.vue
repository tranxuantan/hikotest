<template>
  <section>
    <div class="content">
      <div class="container">
        <div class="row">
          <p class="title col-12 text-center">
            {{ title }}
          </p>
          <p class="subtitle col-12 text-center">
            {{ subtitle }}
          </p>
          <div class="col-12">
            <div class="d-flex justify-content-center row">
              <div v-for="(client, index) in clientList" :key="index" class="col-4 col-md-2dot4">
                <img :src="require(`~/assets/images/${client}`)" class="w-100 img-client">
              </div>
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
      title: 'BPLAY GAME',
      subtitle: 'OUR CLIENTS',
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
.img-client {
  margin-bottom: 5rem;
}
@media (max-width: 768px) {
  .content {
    padding-top: 4rem;
  }
  .img-client {
    margin-bottom: 2rem;
  }
}
</style>
