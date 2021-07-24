<template>
  <section>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 content-text">
            <p class="title">
              {{ title }}
            </p>
            <p class="subtitle">
              {{ subtitle }}
            </p>
          </div>
          <div class="col-12 col-md-8">
            <p class="description">
              {{ description }}
            </p>
          </div>
          <div v-if="!isMobile" class="col-12 row">
            <div v-for="(product, index) in products" :key="index" class="product-item col-12 col-md-4 mb-5">
              <nuxt-link to="/">
                <img :src="require(`~/assets/images/${product.productImage}`)" class="w-100 mb-4">
              </nuxt-link>
              <nuxt-link to="/">
                <div class="item-button-name mb-4">
                  <img src="~assets/images/product-name.png" class="w-100" alt="">
                  <span class="item-name">
                    {{
                      product.productName
                    }}
                  </span>
                </div>
              </nuxt-link>
              <div class="item-desc">
                {{
                  product.productDesc
                }}
              </div>
            </div>
          </div>
          <div v-else class="col-12 container mt-5">
            <carousel :per-page="1.5" :mouse-drag="false">
              <slide v-for="(product, index) in products" :key="index" class="product-item">
                <img :src="require(`~/assets/images/${product.productImage}`)" class="w-100 mb-4">
                <div class="item-button-name mb-4">
                  <img src="~assets/images/product-name.png" class="w-100" alt="">
                  <span class="item-name">
                    {{
                      product.productName
                    }}
                  </span>
                </div>
                <div class="item-desc">
                  {{
                    product.productDesc
                  }}
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    }
  },
  data () {
    return {
      title: 'BPLAY GAME',
      subtitle: 'OUR PRODUCTS',
      description: `BPlay’s high quality iGaming Platform offers a complete solution for your casino. 
      Get the full White Label turnkey solution or the Seamless API with our comprehensive selection of games. 
      Through our global network of premium partners such as Vivo Gaming, SBTech and HoGaming you will have access to the best Live Casino, 
      Sportsbook, Slots, Table Games, Number Games and Fishing Games on the market.`
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  }
}
</script>

<style lang='scss' scoped>
.content{
  position: relative;
  background-color: #15161e;
  background: url("./assets/images/product-background.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 10rem;
  padding-bottom: 10rem;
  .content-text {
    margin-bottom: 10rem;
  }
  .product-item {
    padding: 1rem;
    .item-button-name {
      position: relative;
      text-align: center;
      .item-name {
        font-family: Raleway;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
        font-size: 135%;
      }
    }
    .item-desc{
      font-family: Mulish;
      color: white;
      padding: 0 1rem;
      text-align: center;
    }
  }
}
@media (max-width: 768px) {
  .content {
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    .content-text {
      margin-bottom: 0;
    }
    .product-item {
      .item-button-name {
        .item-name {
          font-size: 90%;
        }
      }
      .item-desc{
        padding: 0;
      }
    }
  }
}

@media (max-width: 375px) {
  .content {
    padding-bottom: 8.5rem;
    background-repeat: repeat;
  }
}
::v-deep .VueCarousel-dot {
  border-radius: 0;
  transform: rotate(45deg);
  background-color: #505153 !important;
}
::v-deep .VueCarousel-dot--active {
  background-color: #f41616 !important;
}
</style>
