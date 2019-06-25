<template>
  <div>
    <the-hero>
      <the-header></the-header>
      <the-banner></the-banner>
    </the-hero>
    <main>
      <the-services></the-services>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHero from "~/layouts/TheHero.vue";
import TheHeader from "~/layouts/TheHeader.vue";
import TheBanner from "~/layouts/TheBanner.vue";
import TheServices from "~/layouts/TheServices.vue";
import TheFooter from "~/layouts/TheFooter.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    TheHeader,
    TheHero,
    TheBanner,
    TheServices,
    TheFooter
  }
};
</script>
