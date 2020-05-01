<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <img src="~assets/img/HUE-logo-new-191.png" :alt="imageAlt">
      <p v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Education',
      imageAlt: 'Logo for History UnErased',
      body: 'Making Gay History works in partnership with <a href="https://unerased.org/" target="_blank">History UnErased</a> to create LGBTQ-inclusive teaching resources for middle and high school classrooms.<br /><br /><a href="http://www.reuters.com/article/us-usa-lgbt-education-idUSKBN18T1AP" target="_blank">Read this Reuters article about our work</a>.<br /><br /<a href="https://www.facinghistory.org/" target="_blank">Facing History and Ourselves</a> L.A. has also developed teaching prompts and resources anchored to several Making Gay History episodes. You can find them <a href="http://lanetwork.facinghistory.org/topic/lgbtq" target="_blank">here</a>.'
    }
  },
  transition: 'fade'
}
</script>
