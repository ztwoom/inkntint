<template>
  <section class="mt-20">
    <ink-container>
      <h1
        class="text-3xl font-bold text-blue-900 max-w-2xl"
      >Creamos magníficas aplicaciones diseñadas para iOS y Android</h1>
    </ink-container>
    <ink-grid>
      <div class="grid-col-1/-1 grid-row-1">
        <ink-container class="py-16">
          <div
            class="card-gradient-r--light rounded-lg shadow-2xl py-16 px-8 border-t-8 border-blue-700"
          >
            <ink-grid grid-gap="3rem">
              <div class="grid-align-self--center grid-justify-self--center">
                <i-phone class="w-full max-w-sm"></i-phone>
              </div>
              <div class="md:grid-col-2">
                <h3 class="text-2xl font-bold text-blue-900 md:text-3xl">Aplicaciones Móviles</h3>
                <p
                  class="text-base mt-3 text-blue-600 md:text-xl md:max-w-lg"
                >Ayudamos a nuestros clientes a construir sus ideas desde el papel hasta productos de alta calidad completamente funcionales.</p>
                <ul class="mt-3 text-blue-900">
                  <li class="h-8 flex items-center">
                    <font-awesome icon="check-circle"></font-awesome>
                    <span class="ml-3 text-base md:text-lg font-bold">Android</span>
                  </li>
                  <li class="h-8 flex items-center">
                    <font-awesome icon="check-circle"></font-awesome>
                    <span class="ml-3 text-base md:text-lg font-bold">iOS</span>
                  </li>
                </ul>
              </div>
            </ink-grid>
          </div>
        </ink-container>
      </div>
      <div class="grid-col-1/-1 grid-row-2">
        <ink-container class="py-16">
          <div
            class="card-gradient-l--light rounded-lg shadow-2xl py-16 px-8 border-t-8 border-blue-700"
          >
            <ink-grid grid-gap="3rem">
              <div
                class="grid-align-self--center grid-justify-self--center md:grid-col-2 md:grid-row-1"
              >
                <i-laptop class="w-full max-w-sm"></i-laptop>
              </div>
              <div class="grid-justify-self--center">
                <h3 class="text-2xl font-bold text-blue-900 md:text-3xl">Aplicaciones Web Híbridas</h3>
                <p
                  class="text-base mt-3 text-blue-600 md:text-xl md:max-w-lg"
                >Construimos aplicaciones web híbridas que funcionan en múltiples plataformas que van desde la web y escritorio con el mismo código base.</p>
                <ul class="mt-3 text-blue-900">
                  <li class="h-8 flex items-center">
                    <font-awesome icon="check-circle"></font-awesome>
                    <span class="ml-3 text-base md:text-lg font-bold">Web</span>
                  </li>
                  <li class="h-8 flex items-center">
                    <font-awesome icon="check-circle"></font-awesome>
                    <span class="ml-3 text-base md:text-lg font-bold">Desktop</span>
                  </li>
                </ul>
              </div>
            </ink-grid>
          </div>
        </ink-container>
      </div>
    </ink-grid>
  </section>
</template>

<script>
import IPhone from "~/components/illustrations/IPhone.vue";
import ILaptop from "~/components/illustrations/ILaptop.vue";

export default {
  components: {
    IPhone,
    ILaptop
  }
};
</script>

<style>
.card-gradient-r--light {
  background-image: linear-gradient(
    to right,
    #ffffff,
    theme("colors.blue.200")
  );
}
.card-gradient-l--light {
  background-image: linear-gradient(to left, #ffffff, theme("colors.blue.200"));
}
</style>