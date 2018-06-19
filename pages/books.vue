<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <img src="~assets/img/mgh_book.png" :alt="imageAlt">
      <p v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Books',
      imageAlt: 'Book jacket for Making Gay History',
      body: 'HarperCollins published two editions of Eric Marcus’s award-winning <a href="http://ericmarcus.com/eric-marcus-books.php?epm=1_6" target="_blank"><em>Making Gay History: The Half-Century Fight for Lesbian and Gay Equal Rights</em></a>.  The original edition, titled <em>Making History</em>, was published in 1992 and will soon be reissued in a digital-only edition.  The second edition, titled <em>Making Gay History</em>, was published in 2002, and is available in paperback.'
    }
  },
  transition: 'fade'
}
</script>
