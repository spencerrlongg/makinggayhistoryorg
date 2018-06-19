<template>
  <div>
    <mgh-header></mgh-header>
    <div class="content-wrapper">
      <nuxt></nuxt>
    </div>
    <mgh-footer></mgh-footer>
  </div>
</template>

<script>
import Header from '~components/Header'
import Footer from '~components/Footer'

export default {
  components: {
    'mgh-header': Header,
    'mgh-footer': Footer
  }
}
</script>

<style>
body {
  height: 100vh;
  background-image: url('~assets/img/kameny1950s-1-fade.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: scroll;
  position: relative;
  font-family: 'Libre Baskerville', serif;
  margin: 0;
  padding: 0;
}
</style>
