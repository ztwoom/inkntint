<template>
  <ink-grid>
    <ink-container class="mt-20 lg:grid-col-1/-1 lg:grid-row-1">
      <div class="max-w-xl">
        <h1
          class="text-white text-4xl font-extrabold"
        >Construimos aplicaciones Móviles y Web en tiempo récord.</h1>
        <h2
          class="text-xl text-blue-300 font-semibold mt-4 leading-relaxed"
        >Solo cuéntanos los detalles y nosotros haremos el resto.</h2>
        <div class="mt-6">
          <button
            type="button"
            class="bg-blue-400 px-4 h-12 rounded-lg shadow-lg hover:bg-blue-500"
          >
            <a
              href="http://wa.me/573134854926?text=¡Oye!%20Quiero%20cotizar%20una%20app%20para"
              target="__blank"
              class="text-white text-lg flex items-center"
            >
              <span class="mr-2 font-semibold">Cotizar Gratis</span>
              <font-awesome :icon="['fab', 'whatsapp']" class="text-2xl"></font-awesome>
            </a>
          </button>
        </div>
      </div>
    </ink-container>
    <div class="mt-10 sm:mt-0 lg:mt-20 grid-justify-self--end lg:grid-col-1/-1 lg:grid-row-1">
      <i-rocket class="w-full sm:w-416"></i-rocket>
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

