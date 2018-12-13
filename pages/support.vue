<template>
  <div class="container container--narrow content-page">
    <h1>{{ heading }}</h1>
    <div class="flexbox">
      <script src="https://cdn.donately.com/dntly-core/current/core.min.js" data-donately-id="act_be92c26650f4" data-stripe-publishable-key="pk_live_eser55FwsexB5JBx9x0zT2aQ" data-donately-presets="100,50,25,15" data-donately-duration="default_recurring" data-donately-billing-zip="true" data-donately-phone="true" data-donately-anonymous="true" data-donately-onbehalf="true" data-donately-payment-options="cc,ach" ></script>
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
