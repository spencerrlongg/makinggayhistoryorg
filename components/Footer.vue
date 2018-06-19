<template>
  <div id="footer">
    &copy; {{ date }} Making Gay History
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style>
#footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid #000;
}
</style>
