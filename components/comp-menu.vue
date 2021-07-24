<template>
  <section>
    <div v-show="isDisplay" class="content text-center">
      <div v-for="(menu, index) in menus" :key="index">
        <nuxt-link :to="{ path: menu.url, hash: menu.anchor }" class="nav-link" @click.native="clickMenu">
          {{ menu.title }}
        </nuxt-link>
        <hr class="menu-horizontal">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isDisplay: {
      type: Boolean,
      default: true,
      require: true
    },
    menus: {
      type: Array,
      default () {
        return []
      },
      require: true
    }
  },
  methods: {
    clickMenu () {
      this.$emit('clickMenu')
    }
  }
}
</script>

<style lang='scss' scoped>
    .content {
        z-index: 5;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0.25);
        padding-top: 10rem;
        .menu-horizontal{
          border-top: solid 0.01rem #222330;
          width: 80%;
        }
        .nav-link{
          color: white;
        }
        .nav-link.nuxt-link-active {
          color: red;
        }
    }
</style>
