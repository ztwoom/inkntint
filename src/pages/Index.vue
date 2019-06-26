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
    htmlAttrs: {
      lang: "es"
    },
    title: "Construimos aplicaciones Móviles y Web en tiempo récord",
    meta: [
      {
        name: "title",
        content: "inkntint",
        template: chunk =>
          `${chunk} - Aplicaciones Móviles y Web en tiempo récord`
      },
      {
        name: "description",
        content:
          "Construimos aplicaciones móviles multiplataforma para Android, iOS, Web y Escritorio de alto rendimiento desde el mismo código fuente"
      },
      // og - facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://inkntint.com/" },
      {
        property: "og:title",
        content: "inkntint",
        template: chunk =>
          `${chunk} - Aplicaciones Móviles y Web en tiempo récord`
      },
      {
        property: "og:description",
        content:
          "Construimos aplicaciones móviles multiplataforma para Android, iOS, Web y Escritorio de alto rendimiento desde el mismo código fuente"
      },
      {
        property: "og:image",
        content: "htpps://inkntint.com/og-image.jpg"
      },
      // twitter
      {
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        property: "twitter:url",
        content: "htpps://inkntint.com/"
      },
      {
        property: "twitter:title",
        content: "inkntint",
        template: chunk =>
          `${chunk} - Construimos aplicaciones Móviles y Web en tiempo récord`
      },
      {
        property: "twitter:description",
        content:
          "Construimos aplicaciones móviles multiplataforma para Android, iOS, Web y Escritorio de alto rendimiento desde el mismo código fuente"
      },
      {
        property: "twitter:image",
        content: "htpps://inkntint.com/og-image.jpg"
      }
    ]
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
