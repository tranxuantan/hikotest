<template>
  <section>
    <div class="content">
      <div class="col-12 col-lg-6 float-right">
        <p class="title col-12 col-md-8">
          {{ title }}
        </p>
        <p class="subtitle col-12 col-md-8">
          {{ subtitle }}
        </p>
        <p class="description col-12 col-md-8">
          {{ description }}
        </p>
        <div class="col-12 col-md-8">
          <div class="row d-flex justify-content-center">
            <div v-for="(partner, index) in partnersList" :key="index" class="col-4">
              <img :src="require(`~/assets/images/${partner}`)" class="w-100" :alt="partner">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 float-right partners-wrapper-left">
        <img src="~assets/images/partners-wapper.png" class="wapper-image">
        <img src="~assets/images/partners-image.png" class="partners-image ">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: 'BPLAY GAME',
      subtitle: 'PARTNERS',
      description: `As a BPlay client you will benefit from content from more than 20 top tier providers. 
      Based on your casino’s concept and targeted markets, we will tailor the perfect portfolio of games to offer to your players.`,
      partnersList: [
        'partners-sbtech.png',
        'partners-iovation.png',
        'partners-seon.png',
        'partners-hogaming.png',
        'partners-vivo.png'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.content{
  .wapper-image{
    width: 90%;
  }
  .partners-wrapper-left {
    position: relative;
  }
  .partners-image {
    width: 60%;
    position: absolute;
    right: 10%;
    transform: translate(0%, 25%);
  }
  .title {
    padding-top: 12rem;
  }
  .description {
    margin-bottom: 5rem;
  }
}
@media (max-width: 768px) {
  .content {
    text-align: center;
    .title {
      padding-top: 4rem;
    }
    .description {
      margin-bottom: 3rem;
    }
    .wapper-image{
      margin-top: 3rem;
      width: 100%;
    }
    .partners-image {
      width: 90%;
      right: 0;
    }
  }
}
</style>
