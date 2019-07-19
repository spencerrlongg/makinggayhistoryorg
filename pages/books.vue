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
      body: 'HarperCollins published two editions of Eric Marcus’s award-winning <a href="http://ericmarcus.com/eric-marcus-books.php?epm=1_6" target="_blank"><em>Making Gay History: The Half-Century Fight for Lesbian and Gay Equal Rights</em></a>.  The original edition, titled <em>Making History</em>, was published in 1992 and is available <a href="https://www.barnesandnoble.com/w/making-history-eric-marcus/1121788836?ean=9780062848260" target="_blank">as an e-book.</a>  The second edition, titled <em>Making Gay History</em>, was published in 2002, and is available <a href="https://www.barnesandnoble.com/w/making-gay-history-eric-marcus/1111665655?ean=9780060933913" target="_blank">in paperback.</a>'
    }
  },
  transition: 'fade'
}
</script>
