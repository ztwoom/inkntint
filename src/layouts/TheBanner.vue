<template>
  <ink-grid>
    <ink-container class="mt-10">
      <h1
        class="text-white text-3xl font-extrabold"
      >Construimos aplicaciones Móviles y Web en tiempo récord</h1>
      <h2
        class="text-lg text-blue-300 font-semibold mt-4 leading-relaxed"
      >Solo cuéntanos los detalles y nosotros haremos el resto.</h2>
      <div class="mt-6">
        <button type="button" class="bg-blue-400 px-4 h-10 rounded shadow-lg hover:bg-blue-500">
          <a
            href="http://wa.me/11111"
            target="__blank"
            class="text-white text-lg flex items-center"
          >
            <span class="mr-2 font-semibold">Cotizar gratis</span>
            <font-awesome :icon="['fab', 'whatsapp']" class="text-xl"></font-awesome>
          </a>
        </button>
      </div>
    </ink-container>
    <div class="mt-16 grid-justify-self--end">
      <i-rocket></i-rocket>
    </div>
  </ink-grid>
</template>

<script>
import IRocket from "~/components/illustrations/IRocket.vue";

export default {
  components: {
    IRocket
  }
};
</script>

