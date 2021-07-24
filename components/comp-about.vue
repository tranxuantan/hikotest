<template>
  <section>
    <div class="content">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 text-center">
            <p class="title">
              {{ title }}
            </p>
          </div>
          <div class="col-12 text-center">
            <p class="subtitle">
              {{ subtitle }}
            </p>
          </div>
          <div class="col-12 text-center">
            <p class="description">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <img v-if="!isMobile" src="~assets/images/about-maps.png" class="img-maps w-100">
      <img v-else src="~assets/images/about-maps-mobile.png" class="img-maps w-100">
      <div class="banner">
        <img src="~assets/images/about-banner.png" class="w-100">
        <div class="title-banner">
          <span class="title-year">{{ year }}</span>
          <span class="title-year-text">YEARS</span>
          <hr class="title-break-line">
          <span>of experience <br>in the <span class="text-red">iGaming</span></span>
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
      subtitle: 'WHO WE ARE?',
      description: `BPlay was founded in 2015 by a group of highly skilled professionals with over 15 years of experience in the iGaming industry. 
      Today we are an international company with more than 100 employees and have operations in Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...`,
      year: 15
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  background-color: #15161e;
  .img-maps {
    margin-top: -70px;
    margin-bottom: -70px;
  }
  .banner {
    position: relative;
    .title-banner {
      background-color: #15161E;
      position: absolute;
      top: 0;
      left: 13%;
      width: 16em;
      text-align: center;
      padding-bottom: 20px;
      color: white;
      opacity: 0.8;
      .title-year {
        color: red;
        font-weight: bold;
        line-height: 160px;
        font-size: 130px;
      }
      .title-year-text {
        font-size: 50px;
        line-height: 25px;
      }
      .title-break-line{
        color: red;
        border: solid 1px red;
        width: 70px;
        margin-bottom: 0;
      }
      .text-red{
        color: red;
      }
    }
  }
}
@media (max-width: 768px) {
  .content {
    padding-top: 4rem;
    .img-maps {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .banner {
      padding-top: 15rem;
      .title-banner {
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>
