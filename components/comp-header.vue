<template>
  <header>
    <div class="content">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="~assets/images/header-Logo.png" class="img-fluid">
          </a>
          <div id="navbarResponsive" class="collapse navbar-collapse">
            <div class="d-flex justify-content-center w-100">
              <ul class="navbar-nav">
                <li v-for="(menu,index) in menus" :key="index" class="nav-item ml-3 mr-3">
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
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      <img src="~assets/images/header-banner.png" class="img-fluid">
      <div class="header-title">
        CASINO<br>PLAYGAME
      </div>
      <div class="header-scroll">
        Scroll
        <br>
        <img src="~assets/images/header-scroll.png" class="img-scroll img-fluid">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
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
    z-index: 1000;
    .nav-link {
      color: white;
    }
    .nav-link.nuxt-link-active {
      border-bottom: solid 1px red;
    }
  }
  // .navbar-toggler {
  //   border: none;
  //   width: 1em;
  //   float: right;
  // }
  .custom-select {
    border-radius: 20px;
    background-color: transparent;
    border: solid 1px white;
    color: white;
    background: url('../assets/images/header-Polygon_1.png') no-repeat right .70rem center;
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
</style>
