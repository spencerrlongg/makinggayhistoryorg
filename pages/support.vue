<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <iframe class="donately-donation-iframe" frameborder="0" allowtransparency="true" style="background-color: transparent; border: 0px none transparent; overflow: hidden; display: inline-block; visibility: visible; margin: 0px; padding: 0px; height: 800px; width: 100%;" src="https://cdn.donately.com/dntly-core/current/iframe.html?donately_id=act_be92c26650f4&amp;stripe_publishable_key=pk_live_eser55FwsexB5JBx9x0zT2aQ&amp;donately_amount=50&amp;donately_anonymous=true&amp;donately_billing_zip=true&amp;donately_custom_fields=%7B%22fields%22:%20%5B%7B%20%22type%22:%22checkbox%22,%20%22id%22:%22Newsletter%22,%20%22label%22:%22Would%20you%20like%20to%20receive%20our%20newsletter?%22,%20%22value%22:%22true%22,%20%22after%22:%22email%22%20%7D%5D%20%7D&amp;donately_onbehalf=true&amp;donately_payment_options=cc,ach&amp;donately_phone=true&amp;donately_presets=100,50,25,15"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'Thank you for supporting MGH!',
    }
  },
  transition: 'fade'
}
</script>
