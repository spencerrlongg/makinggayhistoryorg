<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <p v-html="cta"></p>
    <div class="flexbox">
      <img src="~assets/img/Eric-Marcus-Head-Shot-Med-Res-16.jpg" :alt="imageAlt[0]">
      <p v-html="body[0]"></p>
    </div>
    <hr />
    <div class="flexbox">
      <img src="~assets/img/Sara-Headshot-768x768.jpg" :alt="imageAlt[1]">
      <p v-html="body[1]"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Making Gay History',
      cta: 'Need our help?  <a href="mailto:hello@makinggayhistory.org">Get in touch.</a>',
      imageAlt: [ 'Headshot of Eric Marcus', 'Headshot of Sara Burningham' ],
      body: [ '<strong>Eric Marcus</strong> is the creator and host of the Making Gay History podcast.  He is the author of a dozen books, including Making Gay History, Is It A Choice?, Why Suicide?, and Breaking the Surface, the #1 New York Times bestselling autobiography of Olympic diving champion Greg Louganis.', '<strong>Sara Burningham</strong> is a New York-based radio producer, editor, and writer.  She has produced award-winning FM talk radio in London, reported on the U.S. elections as a foreign correspondent, crafted narrative gems for public radio in the Ozarks, edited the rat-a-tat-tat radio AM News leader that is 1010WINS, and now has the privilege of gleaning life-changing stories from the Making Gay History archive.' ]
    }
  },
  transition: 'fade'
}
</script>

<style scoped>
  .flexbox {
    margin: 1rem 0;
  }
  .flexbox:not(:last-of-type) {
    margin-bottom: 0;
  }
  @media(min-width: 768px) {
    .flexbox:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
  hr {
    border: 0;
    margin: 0;
    border-top: 1px solid #000;
  }
  h1 {
    margin-bottom: 0.25rem;
  }
  .content-page > p {
    margin-bottom: 1.5rem;
  }
</style>
