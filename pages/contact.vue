<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <p style="width: 100%" v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Contact",
      body: "If you have any questions, or if you'd like to donate to Making Gay History by check, via direct deposit, or with a donation of stock, please email <a href='mailto:hello@makinggayhistory.org'>hello@makinggayhistory.org</a>.",
    }
  },
  transition: "fade",
}
</script>
