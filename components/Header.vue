<template>
  <header>
    <q>We can’t know where we’re going if we don’t know where we’ve been.</q>
    <nuxt-link to="/">
      <img src="~assets/img/MarcusLogoTransparentOutlined_nopod.png" alt="Making Gay History Org Logo">
    </nuxt-link>
    <p>We bring LGBTQ history to life through the voices of the people who lived it &mdash; creating podcasts and documentaries, sourcing and licensing archival materials, producing events, and developing LGBTQ-inclusive educational resources.</p>
    <button class="menu-button" type="button" @click="isMenuActive = !isMenuActive"><span class="menu-button-wrapper"><span class="menu-button-bars" :class="{ 'active': isMenuActive }"></span></span></button>
    <nav class="menu" :class="{ 'active': isMenuActive }">
      <ul>
        <li v-for="link in links" :key="link.title" @click="isMenuActive = !isMenuActive">
          <a v-if="link.external" :href="link.href">{{ link.title }}</a>
          <nuxt-link v-else :to="link.href">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="menu-cover" :class="{ 'active': isMenuActive }" @click="isMenuActive = !isMenuActive"></div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isMenuActive: false,
      links: [
        { title: 'Explore our Podcast', external: true, href: 'http://makinggayhistory.com' },
        { title: 'Archive', external: false, href: 'archive' },
        { title: 'Education', external: false, href: 'education' },
        { title: 'Books', external: false, href: 'books' },
        { title: 'Events', external: false, href: 'events' },
        { title: 'Support', external: false, href: 'support' },
        { title: 'About', external: false, href: 'about' },
        { title: 'Contact', external: true, href: 'mailto:hello@makinggayhistory.org' }
      ]
    }
  }
}
</script>

<style scoped>
header {
  padding-top: 40px;
  border-bottom: 1px solid #000;
}
q {
  display: block;
  width: 60vw;
  min-width: 200px;
  max-width: 768px;
  margin: 1rem auto;
  text-align: center;
  font-weight: bold;
}
img {
  display: block;
  width: 33vw;
  min-width: 200px;
  max-width: 350px;
  margin: 1rem auto;
  background: rgba(255, 255, 255, 0.7);
  }
p {
  width: 90vw;
  min-width: 200px;
  max-width: 768px;
  margin: 1rem auto;
  text-align: center;
  line-height: 1.4rem;
  font-weight: bold;
}
.menu-button {
  display: inline-block;
  overflow: visible;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
}
@media(min-width: 768px) {
  .menu-button {
    top: 30px;
    right: 30px;
  }
}
.menu-button:focus {
  outline: 0;
}
.menu-button-wrapper {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 101;
}
.menu-button-bars, .menu-button-bars:before, .menu-button-bars:after {
  display: block;
  width: 40px;
  height: 4px;
  border-radius: 10px;
  background-color: #000;
  content: '';
  position: absolute;
  transition: all 0.4s;
  z-index: 102;
}
.menu-button-bars, .menu-button-bars:before {
   top: 10px;
}
.menu-button-bars:after {
   top: 20px;
}
.menu-button-bars.active {
  transform: rotate(45deg);
  background-color: #fff;
  top: 20px;
}
.menu-button-bars.active:before {
  top: 0;
  background-color: #fff;
}
.menu-button-bars.active:after {
  top: 0;
  transform: rotate(-90deg);
  background-color: #fff;
}
.menu {
  position: fixed;
  width: 300px;
  height: 100vh;
  top: 0;
  right: -300px;
  background-color: #000;
  transition: all 0.6s;
  padding-top: 5rem;
}
.menu.active {
  right: 0;
  z-index: 100;
}
.menu-cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 100vw;
}
.menu-cover.active {
  left: 0;
}
.menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu a {
  color: #fff;
  text-decoration: none;
  display: block;
  margin-right: 40px;
  padding: 15px;
  text-indent: 2%;
  background-image: linear-gradient(to right, hsl(202, 100%, 38%) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 99% 100%;
  transition: background-position 0.25s;
}
.menu a:hover {
  background-position: 0% 100%;
}
</style>
