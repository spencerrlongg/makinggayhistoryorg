<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <img src="~assets/img/play-logo.png" :alt="imageAlt">
      <p v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Play',
      imageAlt: 'Making Gay History Play Logo',
      body: 'In March 2020, New York University’s Steinhardt School of Culture, Education, and Human Development produced <em>Making Gay History: Before Stonewall</em>, a documentary theater play adapted from the <em>Making Gay History</em> book and podcast by playwright and professor Joe Salvatore.<br></br>The play is available for licensing. Find out more <a href="https://makinggayhistory.com/the-play/">here</a>.'
    }
  },
  transition: 'fade'
}
</script>
