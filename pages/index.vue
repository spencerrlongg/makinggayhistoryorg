<template>
  <div class="container flexbox flexbox--stretch">
    <div class="home-link" v-for="link in links" :key="link.title">
      <a v-if="link.external" :href="link.href">
        <strong>{{ link.title }}</strong>
      </a>
      <nuxt-link v-else :to="link.href">{{ link.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Explore Our Podcast",
          external: true,
          href: "http://makinggayhistory.com"
        },
        { title: "Archive", external: false, href: "archive" },
        { title: "Education", external: false, href: "education" },
        { title: "Play", external: false, href: "play" },
        { title: "Events", external: false, href: "events" },
        { title: "Support", external: false, href: "support" }
      ]
    };
  },
  transition: "fade"
};
</script>


<style>
.home-link {
  display: block;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  margin: 1rem auto;
}
@media (min-width: 768px) {
  .home-link:not(:first-of-type) {
    width: 16%;
  }
}
.home-link a {
  display: block;
  position: relative;
  padding: 1.5rem 0rem;
  border: 1px solid #000;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.2s;
}
.home-link:first-of-type a {
  background: linear-gradient(
    to right,
    hsla(0, 100%, 50%, 0.6) 16.67%,
    hsla(30, 100%, 50%, 0.6) 16.67%,
    hsla(30, 100%, 50%, 0.6) 33.34%,
    hsla(60, 100%, 50%, 0.6) 33.34%,
    hsla(60, 100%, 50%, 0.6) 50%,
    hsla(120, 100%, 25%, 0.6) 50%,
    hsla(120, 100%, 25%, 0.6) 66.67%,
    hsla(240, 100%, 50%, 0.6) 66.67%,
    hsla(240, 100%, 50%, 0.6) 83.34%,
    hsla(290, 100%, 38%, 0.6) 83.34%
  );
  filter: grayscale(60%);
}
.home-link a:before {
  position: absolute;
  content: " ";
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  border: 3px solid #000;
}
.home-link a:after {
  position: absolute;
  content: " ";
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  border: 1px solid #000;
}
.home-link:not(:first-of-type) a:hover {
  background-image: linear-gradient(
    to right,
    hsla(0, 100%, 50%, 0.6) 16.67%,
    hsla(30, 100%, 50%, 0.6) 16.67%,
    hsla(30, 100%, 50%, 0.6) 33.34%,
    hsla(60, 100%, 50%, 0.6) 33.34%,
    hsla(60, 100%, 50%, 0.6) 50%,
    hsla(120, 100%, 25%, 0.6) 50%,
    hsla(120, 100%, 25%, 0.6) 66.67%,
    hsla(240, 100%, 50%, 0.6) 66.67%,
    hsla(240, 100%, 50%, 0.6) 83.34%,
    hsla(290, 100%, 38%, 0.6) 83.34%
  );
  box-shadow: 0px 3px 4px rgba(30, 30, 30, 0.4);
  top: -2px;
}
.home-link:first-of-type a:hover {
  filter: grayscale(0%);
}
/* .home-link:nth-of-type(1) a:hover {
    background-color: #511a6c;
    color: #fff;
  }
  .home-link:nth-of-type(2) a:hover {
    background-color: #007bc3;
    color: #fff;
  }
  .home-link:nth-of-type(3) a:hover {
    background-color: #00ab91;
    color: #fff;
  }
  .home-link:nth-of-type(4) a:hover {
    background-color: #ec008c;
    color: #fff;
  }
  .home-link:nth-of-type(5) a:hover {
    background-color: #ef4056;
    color: #fff;
  } */
</style>
