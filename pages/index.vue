<template>
  <div class="langding">
    <comp-header :menus="menus" @scrollDown="gotoProduct" />
    <comp-about id="about" />
    <comp-product id="products" ref="products" :products="products" />
    <comp-partners id="partners" class="partners" />
    <comp-client id="client" />
    <comp-footer id="footer" class="footer" @scrollTop="gotoTop" />
    <div v-if="displayScrollTop" class="footer-scroll">
      <img src="~assets/images/footer-scrolltop.png" class="img-scroll img-fluid" @click="gotoTop">
      <br>
      Top
    </div>
  </div>
</template>

<script>
import CompHeader from '@/components/comp-header.vue'
import CompAbout from '@/components/comp-about.vue'
import CompProduct from '@/components/comp-product.vue'
import CompPartners from '@/components/comp-partners.vue'
import CompClient from '@/components/comp-client.vue'
import CompFooter from '@/components/comp-footer.vue'

export default {
  components: {
    CompHeader,
    CompAbout,
    CompProduct,
    CompPartners,
    CompClient,
    CompFooter
  },
  data () {
    return {
      displayScrollTop: false,
      menus: [
        {
          title: 'ABOUT US',
          url: '/',
          anchor: '#about'
        },
        {
          title: 'PRODUCTS',
          url: '/',
          anchor: '#products'
        },
        {
          title: 'PARTNERS',
          url: '/',
          anchor: '#partners'
        },
        {
          title: 'OUR CLIENTS',
          url: '/',
          anchor: '#client'
        },
        {
          title: 'CONTACT US',
          url: '/',
          anchor: '#footer'
        }
      ],
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
  },
  beforeMount () {
    window.addEventListener('resize', this.changeSize)
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.changeSize()
  },
  destroyed () {
    window.removeEventListener('resize', this.changeSize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    changeSize (e) {
      const w = window.innerWidth
      if (w <= 768) {
        this.$store.dispatch('changeSize', true)
      } else {
        this.$store.dispatch('changeSize', false)
      }
    },
    handleScroll () {
      if (window.scrollY > 300) {
        this.displayScrollTop = true
      } else {
        this.displayScrollTop = false
      }
    },
    gotoTop () {
      const interval = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(interval)
        } else {
          window.scrollBy(0, -100)
        }
      }, 10)
    },
    gotoProduct () {
      const product = this.$refs.products
      const interval = setInterval(() => {
        if (window.pageYOffset >= product.$el.offsetTop) {
          clearInterval(interval)
        } else {
          window.scrollBy(0, 100)
        }
      }, 10)
    }
  }
}
</script>

<style lang='scss'>
.langding {
  background-color: #15161e;
  color: white;
  .partners {
    margin-bottom: 10rem;
  }
  .footer {
    margin-top: -10rem;
  }
  .footer-scroll {
    position: fixed;
    color: white;
    bottom: 5%;
    right: 5%;
    text-align: center;
  }
  .img-scroll {
    height: 25px;
    cursor: pointer;
  }
}
@media (max-width: 768px) {
  .langding {
    .partners {
      margin-bottom: 5rem;
    }
    .footer {
      margin-top: 0rem;
    }
  }
}
</style>
