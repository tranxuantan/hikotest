<template>
  <section>
    <div class="content">
      <div class="col-12 col-lg-6 float-right">
        <p class="title col-12 col-lg-8">
          BPLAY GAME
        </p>
        <p class="subtitle col-12 col-lg-8">
          PARTNERS
        </p>
        <p class="description col-12 col-lg-8">
          As a BPlay client you will benefit from content from more than 20
          top tier providers. Based on your casino’s concept and targeted
          markets, we will tailor the perfect portfolio of games to offer to
          your players.
        </p>
        <div class="col-8">
          <div class="row d-flex justify-content-center">
            <div class="col-4">
              <img src="~assets/images/partners-sbtech.png" class="w-100" alt="">
            </div>
            <div class="col-4">
              <img src="~assets/images/partners-iovation.png" class="w-100" alt="">
            </div>
            <div class="col-4">
              <img src="~assets/images/partners-seon.png" class="w-100" alt="">
            </div>
            <div class="col-4">
              <img src="~assets/images/partners-hogaming.png" class="w-100" alt="">
            </div>
            <div class="col-4">
              <img src="~assets/images/partners-vivo.png" class="w-100" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 float-right partners-wrapper-left">
        <img src="~assets/images/partners-wapper.png" class="wapper-image">
        <img src="~assets/images/partners-image.png" class="partners-image ">
      </div>
    </div>
  </section>
</template>

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
</style>
