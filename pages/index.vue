<template>
  <div class="langding">
    <comp-header :menus="menus" />
    <comp-about id="about" />
    <comp-product id="products" />
    <comp-partners id="partners" class="partners" />
    <comp-client id="client" />
    <comp-footer id="footer" class="footer" @scrollTop="gotoTop" />
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
      ]
    }
  },
  methods: {
    gotoTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang='scss'>
.langding {
  background-color: #15161e;
  color: white;
  .partners {
    margin-bottom: 60rem;
  }
  .footer {
    margin-top: -10rem;
  }
}
</style>
