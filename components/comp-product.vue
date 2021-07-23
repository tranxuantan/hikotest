<template>
  <section>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-4 content-text">
            <p class="title">
              BPLAY GAME
            </p>
            <p class="subtitle">
              OUR PRODUCTS
            </p>
          </div>
          <div class="col-8">
            <p class="description">
              BPlay’s high quality iGaming Platform offers a complete solution for
              your casino. Get the full White Label turnkey solution or the Seamless
              API with our comprehensive selection of games. Through our global
              network of premium partners such as Vivo Gaming, SBTech and HoGaming
              you will have access to the best Live Casino, Sportsbook, Slots, Table
              Games, Number Games and Fishing Games on the market.
            </p>
          </div>
          <div class="col-12 row">
            <div v-for="(product, index) in products" :key="index" class="product-item col-sm-12 col-lg-4 mb-5">
              <img :src="require(`~/assets/images/${product.productImage}`)" class="img-fluid mb-4">
              <div class="item-button-name mb-4">
                <img src="~assets/images/product-name.png" class="img-fluid" alt="">
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
      products: [
        {
          productName: 'Live Casino',
          productDesc: 'Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino',
          productImage: 'product-casino.png'
        },
        {
          productName: 'Fishing Game',
          productDesc: 'BPlay Fishing 2D, BPlay Fishing 3D',
          productImage: 'product-fishing.png'
        },
        {
          productName: 'Sport Book',
          productDesc: 'BTI Sportsbook, BPlay Sportsbook',
          productImage: 'product-sport-book.png'
        },
        {
          productName: 'Quick Number',
          productDesc: 'Keno, Number Games, Lottery',
          productImage: 'product-number.png'
        },
        {
          productName: 'White Label',
          productDesc: 'Bplay White Label',
          productImage: 'product-white-label.png'
        },
        {
          productName: 'Slots',
          productDesc: 'BPlay Slots, Jackpot Slots',
          productImage: 'product-jackpot-slots.png'
        },
        {
          productName: 'Seamless API',
          productDesc: 'Seamless API',
          productImage: 'product-seamless-api.png'
        },
        {
          productName: 'Full Package',
          productDesc: 'Full Package',
          productImage: 'product-full-package.png'
        },
        {
          productName: 'Table Game',
          productDesc: 'Table Game',
          productImage: 'product-table.png'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.content{
  position: relative;
  background-color: #15161e;
  background: url(/_nuxt/assets/images/product-background.png) no-repeat;
  background-size: cover;
  padding-top: 15rem;
  padding-bottom: 30rem;
  .content-text {
    margin-bottom: 10rem;
  }
  .product-item {
    padding: 1rem;
    .item-button-name {
      position: relative;
      text-align: center;
      .item-name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
        font-size: 135%;
      }
    }
    .item-desc{
      color: white;
      padding: 0 1rem;
      text-align: center;
    }
  }
}
</style>
