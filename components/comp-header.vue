<template>
  <header>
    <div class="content">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container">
          <nuxt-link v-show="!isDisplayMenu" to="#" class="navbar-brand">
            <img src="~assets/images/header-Logo.png" class="img-logo">
          </nuxt-link>
          <div class="collapse navbar-collapse">
            <div class="d-flex justify-content-center w-100">
              <ul class="navbar-nav">
                <li v-for="(menu,index) in menus" :key="index" class="nav-item mr-3">
                  <nuxt-link :to="{ path: menu.url, hash: menu.anchor}" class="nav-link text-white">
                    {{ menu.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <select class="custom-select">
              <option class="custom-select-option" value="1">
                Eng
              </option>
            </select>
          </form>
          <button
            class="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            @click="toggleMenuModal"
          >
            <span v-if="!isDisplayMenu" class="navbar-toggler-icon open-menu" />
            <span v-else class="navbar-toggler-icon close-menu" />
          </button>
        </div>
      </nav>
      <img src="~assets/images/header-banner.png" class="w-100">
      <div class="header-title">
        CASINO<br>PLAYGAME
      </div>
      <div class="header-scroll">
        Scroll
        <br>
        <img src="~assets/images/header-scroll.png" class="img-scroll img-fluid" @click="scrollDown">
      </div>
    </div>
    <comp-menu :is-display="isDisplayMenu" :menus="menus" @clickMenu="closeMenuModal" />
  </header>
</template>

<script>
import CompMenu from '@/components/comp-menu.vue'
export default {
  components: {
    CompMenu
  },
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      isDisplayMenu: false
    }
  },
  methods: {
    scrollDown () {
      this.$emit('scrollDown')
    },
    toggleMenuModal () {
      this.isDisplayMenu = !this.isDisplayMenu
    },
    closeMenuModal () {
      this.isDisplayMenu = false
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  background-color: #15161E;
  position: relative;
  .navbar {
    background-color: black;
    z-index: 10;
    .img-logo {
      width: 100%;
    }
    .nav-link {
      font-family: Raleway;
      color: white;
    }
    .nav-link.nuxt-link-active {
      border-bottom: solid 1px red;
    }
  }
  .custom-select {
    background: url('../assets/images/header-Polygon_1.png') no-repeat right .70rem center;
    background-color: transparent;
    border: solid 1px white;
    border-radius: 20px;
    color: white;
    width: 7rem;
    .custom-select-option {
      border-radius: 20px;
      margin: 40px;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }
  }
  .header-title {
    position: absolute;
    font-size: 4vw;
    font-weight: bold;
    color: lightgoldenrodyellow;
    left: 50%;
    top: 45%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .header-scroll {
    position: absolute;
    color: white;
    left: 50%;
    top: 75%;
    transform: translate(-50%,-50%);
    text-align: center;
    .img-scroll {
      height: 25px;
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .content {
    .navbar {
      background-color: rgba(0, 0, 0, 0.5);
      .img-logo {
        width: 70%;
      }
      .navbar-toggler-icon.open-menu {
        background-image: url('./assets/images/header-menu.png');
      }
      .navbar-toggler-icon.close-menu {
        background-image: url('./assets/images/header-close-menu.png');
      }
      .navbar-toggler {
        color: white;
        border: none;
      }
      .navbar-toggler:focus {
        outline: none;
      }
    }
  }
}
</style>
