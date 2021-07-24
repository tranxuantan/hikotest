<template>
  <footer>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img src="~assets/images/footer-logo.png" class="img-logo">
          </div>
          <div class="col-12 col-md-4">
            <p class="subtitle">
              {{ subtitle }}
            </p>
            <div class="mb-3">
              <div class="float-left mr-3">
                <img src="~assets/images/footer-address.png" class="img-address">
              </div>
              <div class="d-inline clearfix">
                {{ address }}
              </div>
            </div>
            <div class="mb-3">
              <div class="float-left mr-3">
                <img src="~assets/images/footer-mail.png" class="img-mail">
              </div>
              <div class="d-inline clearfix">
                {{ email }}
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr class="footer-horizontal mt-5 mb-5">
          </div>
          <div class="col-12 col-md-6 mb-5">
            <div class="row d-flex flex-row-reverse">
              <div class="col-4 col-md-2 text-center">
                <img src="~assets/images/footer-itech-1.png" class="img-fluid">
              </div>
              <div class="col-4 col-md-2 text-center">
                <img src="~assets/images/footer-curacao-1.png" class="img-fluid">
              </div>
              <div class="col-4 col-md-2 text-center">
                <img src="~assets/images/footer-sabs-1.png" class="img-fluid">
              </div>
              <div class="col-12 col-md-6 text-center footer-license">
                <img src="~assets/images/footer-license.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div v-if="isMobile" class="col-12 col-md-0">
            <hr class="footer-horizontal mt-2 mb-3">
          </div>
          <div class="col-12 col-md-6 text-right text-secondary pb-4">
            {{ copyright }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      subtitle: 'CONTACT US',
      address: '2901 Marmora Road, Glassgow,  Seattle, WA 98122-1090',
      email: 'info@bplay.com',
      copyright: 'Copyright © 2020 bplay.com. All rights reserved.'
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
  background-image: url("./assets/images/footer-background.png");
  background-size: 100% 100%;
  background-color: #15161e;
  color: white;
  padding-top: 30rem;
  .container {
    position: relative;
  }
  .title {
    color: red;
    font-weight: lighter;
    letter-spacing: 10px;
    margin-bottom: auto;
  }
  .subtitle {
    font-weight: bold;
    font-size: xx-large;
  }
  .footer-horizontal{
    border-top: solid 0.01rem #222330;
  }
}
@media (max-width: 768px) {
  .content {
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2rem;
    .img-logo {
      width: 35%;
    }
    .subtitle {
      font-size: large;
      padding-top: 2rem;
    }
    .img-address {
      width: 70%;
    }
    .img-mail {
      width: 70%;
    }
    .footer-license {
      margin-top: 3rem;
    }
  }
}
</style>
