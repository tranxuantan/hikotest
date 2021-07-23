<template>
  <footer>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img src="~assets/images/footer-logo.png">
          </div>
          <div class="col-6">
            <p class="subtitle">
              CONTACT US
            </p>
            <div class="mb-3">
              <div class="float-left mr-3">
                <img src="~assets/images/footer-address.png">
              </div>
              <div class="d-inline clearfix">
                2901 Marmora Road, Glassgow,  Seattle,<br>
                WA 98122-1090
              </div>
            </div>
            <div class="mb-3">
              <div class="float-left mr-3">
                <img src="~assets/images/footer-mail.png">
              </div>
              <div class="d-inline clearfix">
                info@bplay.com
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr class="footer-horizontal mt-5 mb-5">
          </div>
          <div class="col-6 mb-5">
            <img src="~assets/images/footer-license.png" class="mr-3 img-fluid">
            <img src="~assets/images/footer-sabs-1.png" class="mr-3 img-fluid">
            <img src="~assets/images/footer-curacao-1.png" class="mr-3 img-fluid">
            <img src="~assets/images/footer-itech-1.png" class="mr-3 img-fluid">
          </div>
          <div class="col-6 text-right text-secondary">
            Copyright © 2020 bplay.com. All rights reserved.
          </div>
        </div>
        <div class="footer-scroll">
          <img src="~assets/images/footer-scrolltop.png" class="img-scroll img-fluid" @click="scrollTop">
          <br>
          Top
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    scrollTop () {
      this.$emit('scrollTop')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-image: url("./assets/images/footer-background.png");
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
    border-top: solid 0.01rem gray;
  }
  .footer-scroll {
    position: absolute;
    color: white;
    bottom: 20%;
    right: -5%;
    text-align: center;
  }
  .img-scroll {
    height: 25px;
    cursor: pointer;
  }
}
</style>
