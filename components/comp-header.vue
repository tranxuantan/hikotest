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
                <li
                  v-for="(menu, index) in menus"
                  :key="index"
                  class="nav-item mr-3"
                >
                  <nuxt-link
                    :to="{ path: menu.url, hash: menu.anchor }"
                    class="nav-link text-white"
                  >
                    {{ menu.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <div class="select">
              <div class="select-active" @click="toggleMenu = !toggleMenu">
                <span class="icon-flag"><img :src="require(`~/assets/images/${currentLanguage.icon}`)" class="img-flag"></span>{{ currentLanguage.title }}
                <span><img src="~assets/images/header-Polygon_1.png" class="img-down"></span>
              </div>
              <div class="select-content " :class="{ 'd-none': toggleMenu }">
                <div class="content-menu">
                  <div
                    v-for="(item, index) in currentMenu"
                    :key="index"
                    class="content-item"
                    @click="selectLange(item.code)"
                  >
                    <span class="icon-flag"><img :src="require(`~/assets/images/${item.icon}`)" class="img-flag"></span>{{ item.title }}
                  </div>
                </div>
              </div>
            </div>
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
        <img
          src="~assets/images/header-scroll.png"
          class="img-scroll img-fluid"
          @click="scrollDown"
        >
      </div>
    </div>
    <comp-menu
      :is-display="isDisplayMenu"
      :menus="menus"
      @clickMenu="closeMenuModal"
    />
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
      isDisplayMenu: false,
      language: [
        { code: 'en', title: 'eng', icon: 'header-eng-flag.png' },
        { code: 'vn', title: 'vie', icon: 'header-vie-flag.png' },
        { code: 'jp', title: 'jpn', icon: 'header-jpn-flag.png' }
      ],
      activelanguage: 'en',
      toggleMenu: true
    }
  },
  computed: {
    currentLanguage () {
      return this.language.find(item => item.code === this.activelanguage)
    },
    currentMenu () {
      return this.language.filter(item => item.code !== this.activelanguage)
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
    },
    selectLange (val) {
      this.activelanguage = val
      this.toggleMenu = !this.toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #15161e;
  position: relative;
  .container {
    display: flex;
    flex-wrap: nowrap;
  }
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
  .header-title {
    position: absolute;
    font-size: 4vw;
    font-weight: bold;
    color: lightgoldenrodyellow;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .header-scroll {
    position: absolute;
    color: white;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    text-align: center;
    .img-scroll {
      height: 25px;
      cursor: pointer;
    }
  }
}

.select {
  text-transform: uppercase;
  .select-active {
    border: 1px white solid;
    padding: 2px 5px;
    border-radius: 20px;
    position: relative;
    min-width: 100px;
  }
  .select-content {
    position: absolute;
    min-width: 100px;

    .content-menu {
      padding: 0 20px;
      margin: 10px 0;
      border: 1px white solid;
      border-radius: 20px;
      .content-item {
        padding: 10px 0;
        &:not(:last-of-type) {
          border-bottom: 1px solid white;
        }
      }
    }
  }
  .icon-flag {
    margin-right: 15px;
  }
  .img-flag{
    background: white;
    border-radius: 100%;
    width: 20px;
    vertical-align: sub;
  }
  .img-down {
    float: right;
    padding-top: 7px;
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
