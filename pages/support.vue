<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <iframe
        src="https://cdn.donately.com/core/5.2/donate-form.html?form_id=frm_ffb84ac1c44c&amp;account_id=act_be92c26650f4&amp;stripe_key=pk_live_eser55FwsexB5JBx9x0zT2aQ"
        width="100%"
        class="donately-donation-iframe"
        height="1355px"
        frameborder="0"
        allowtransparency="true"
        style="
          background-color: transparent;
          border: 0px none transparent;
          overflow: hidden;
          display: inline-block;
          visibility: visible;
          margin: 0px;
          padding: 0px;
          height: 1355px;
          width: 100%;
        "
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Thank you for supporting MGH!",
    };
  },
  transition: "fade",
};
</script>
