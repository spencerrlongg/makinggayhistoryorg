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
      body: 'Making Gay History works in partnership with <a href="https://unerased.org/" target="_blank">History UnErased</a> to bring LGBTQ-inclusive curricula to middle- and high-school classrooms in New York City and other school districts across the country.<br /><br /><a href="http://www.reuters.com/article/us-usa-lgbt-education-idUSKBN18T1AP" target="_blank">Read more about our work here.</a>'
    }
  },
  transition: 'fade'
}
</script>
