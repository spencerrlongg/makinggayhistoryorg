<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <p v-html="cta"></p>
    <p style="width: 100%; margin-bottom: 42px">
      Making Gay History is a 501(c)(3) nonprofit organization that addresses the absence of substantive, in-depth LGBTQ-inclusive American history from the public discourse and the classroom by
      providing a window into that history through the stories of the people who helped a despised minority take its rightful place in society as full and equal citizens. <br />In so doing, we aim to
      encourage connection, pride, and solidarity within the LGBTQ community and to provide an entry point for both allies and the general public to its largely hidden history.
    </p>
    <div class="flexbox">
      <img src="~assets/img/Eric-Marcus-Head-Shot-Med-Res-16.jpg" :alt="imageAlt[0]" />
      <p v-html="body[0]"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "About Making Gay History",
      cta: "",
      imageAlt: ["Headshot of Eric Marcus"],
      body: [
        "<strong>Eric Marcus</strong> is the founder and host of the Making Gay History podcast. He is the author of a dozen books, including two editions of <i>Making Gay History</i> (the original 1992 edition is entitled <i>Making History</i>), <i>Why Suicide?</i>, and <i>Breaking the Surface</i>, the #1 <i>New York Times</i> bestselling autobiography of Olympic diving champion Greg Louganis. Eric is also the co-producer of <a href='https://fortunoff.library.yale.edu/education/podcasts/'>Those Who Were There</a>, a podcast drawn from the Fortunoff Video Archive for Holocaust Testimonies. And he is the founder and chair of the <a href='https://stonewall50consortium.org/'>Stonewall 50 Consortium</a>. Learn more about Eric in <a href='https://www.nbcnews.com/video/-i-owe-it-to-the-people-who-came-before-me-uncovering-the-gay-icons-forgotten-by-history-61449797723'>this NBC News profile</a>.",
      ],
    }
  },
  transition: "fade",
}
</script>

<style scoped>
.flexbox {
  margin: 1rem 0;
}
.flexbox:not(:last-of-type) {
  margin-bottom: 0;
}
@media (min-width: 768px) {
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
