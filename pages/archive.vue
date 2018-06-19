<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <img src="~assets/img/Stack-of-Rainbow-Cassettes.jpg" :alt="imageAlt">
      <p v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Archive',
      imageAlt: 'A stack of rainbow-colored cassette tapes.',
      body: 'We source and license archival materials, including Eric Marcus’s papers and recordings, which reside at the <a href="http://archives.nypl.org/mss/17770" target="_blank">New York Public Library</a>.  The bulk of Eric Marcus’s collection dates from 1983 to 2002 and includes research files, interview transcripts, more than 300 hours of sound and video recordings, photographs, and correspondence.<br /><br />Making Gay History receives archival support from the New York Public Library and the <a href="http://www.onearchives.org/" target="_blank">ONE Archives Foundation</a>.'
    }
  },
  transition: 'fade'
}
</script>
