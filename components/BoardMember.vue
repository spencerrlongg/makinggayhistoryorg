<template>
  <div id="board-member" class="board-member-container">
    <img :src="{ memberImage }" />
    <div class="board-member-text">
      <p>{{ memberText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memberImage: "",
    memberText: "",
  },
}
</script>

<style></style>
