<template>
  <section>
    <div class="content">
      <div class="container">
        <div class="row d-flex flex-row-reverse">
          <div class="col-12 col-md-6 partners-content-right">
            <div>
              <p class="title">
                {{ title }}
              </p>
              <p class="subtitle">
                {{ subtitle }}
              </p>
              <p class="description">
                {{ description }}
              </p>
            </div>
            <div>
              <div class="d-flex justify-content-center row">
                <div v-for="(partner, index) in partnersList" :key="index" class="col-4">
                  <img :src="require(`~/assets/images/${partner}`)" class="w-100" :alt="partner">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 float-right partners-wrapper-left">
            <!-- <img src="~assets/images/partners-wapper.png" class="wapper-image"> -->
            <img src="~assets/images/partners-image.png" class="partners-image ">
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
  background-color: #15161e;
  background: url("./assets/images/partners-wapper.png") no-repeat;
  background-size: auto 100%;
  padding-bottom: 13rem;
  .wapper-image{
    width: 90%;
  }
  .partners-wrapper-left {
    position: relative;
  }
  .partners-image {
    width: 100%;
    position: absolute;
    top: 25%;
    left: -10%;
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
    padding-bottom: 0;
    text-align: center;
    background-size: 90%;
    background-position-y: bottom;
    .partners-content-right {
      margin-bottom: 5rem;
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
    }
    .partners-image {
      width: 90%;
      position: static;
      left: 5%;
      padding-top: 0;
    }
  }
}
</style>
