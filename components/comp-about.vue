<template>
  <section id="about" class="about">
    <div class="title pt-3 container">
      <p class="headline-9">
        BPLAY GAME
      </p>
      <p class="headline-10">
        WHO WE ARE?
      </p>
    </div>
    <div class="container d-flex justify-content-center">
      <p class="subtitle">
        BPlay was founded in 2015 by a group of highly skilled professionals with
        over 15 years of experience in the iGaming industry. Today we are an
        international company with more than 100 employees and have operations in
        Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...
      </p>
    </div>
    <img src="~assets/images/about-maps.png" class="img-maps img-fluid">
    <div class="banner">
      <img src="~assets/images/about-banner.png" class="img-fluid">
      <div class="title-banner">
        <span class="title-year">15</span>
        <span class="title-year-text">YEARS</span>
        <hr class="title-break-line">
        <span>of experience <br>in the <span class="text-red">iGaming</span></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  background-color: #15161e;
}
.headline-9 {
  color: red;
  font-weight: lighter;
  letter-spacing: 5px;
  margin-bottom: auto;
}
.headline-10 {
  color: white;
  font-weight: bold;
  font-size: x-large;
}
.title {
  left: 50%;
  text-align: center;
}
.subtitle {
  max-width: 70%;
  left: 50%;
  text-align: center;
  color: white;
  font-size: smaller;
  justify-content: center;
}
.img-maps {
    margin-top: -70px;
    margin-bottom: -70px;
}
.banner {
    position: relative;
}
.title-banner {
    background-color: black;
    position: absolute;
    top: 0;
    left: 13%;
    width: 240px;
    text-align: center;
    padding-bottom: 20px;
    color: white;
}
.title-year {
    color: red;
    font-weight: bold;
    line-height: 160px;
    font-size: 130px;
}
.title-year-text {
    font-size: 50px;
    line-height: 25px;
}
.title-break-line{
    color: red;
    border: solid 1px red;
    width: 70px;
    margin-bottom: 0;
}
.text-red{
    color: red;
}
</style>
