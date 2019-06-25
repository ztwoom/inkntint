<template>
  <section class="mt-16">
    <ink-container>
      <h1
        class="text-2xl font-medium text-blue-900"
      >Creamos magníficas aplicaciones diseñadas para iOS y Android</h1>
    </ink-container>
    <ink-grid class="relative overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="grid-col-1/-1 grid-row-1 -right-n-half z-10 relative grid-align-self--center"
      >
        <circle cx="12" cy="12" r="12" fill="#ebf5ff"></circle>
      </svg>
      <div class="grid-col-1/-1 grid-row-1 z-20">
        <ink-container class="py-16">
          <div
            class="card-gradient-r--light rounded-lg shadow-2xl py-8 px-5 border-t-8 border-blue-700"
          >
            <i-phone></i-phone>
            <h3 class="text-2xl font-bold text-blue-900 mt-8">Aplicaciones Móviles</h3>
            <p
              class="text-base mt-3 text-blue-600"
            >Ayudamos a nuestros clientes a construir sus ideas desde el papel hasta productos de alta calidad completamente funcionales.</p>
            <ul class="mt-3 text-blue-900">
              <li class="h-10 flex items-center">
                <font-awesome icon="check-circle"></font-awesome>
                <span class="ml-3 text-base">Android</span>
              </li>
              <li class="h-10 flex items-center">
                <font-awesome icon="check-circle"></font-awesome>
                <span class="ml-3 text-base">iOS</span>
              </li>
            </ul>
          </div>
        </ink-container>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="grid-col-1/-1 grid-row-2 relative grid-align-self--center -left-n-half"
      >
        <circle cx="12" cy="12" r="12" fill="#D4088C"></circle>
      </svg>
      <div class="z-20 grid-col-1/-1 grid-row-2">
        <ink-container class="py-16">
          <div
            class="card-gradient-l--light rounded-lg shadow-2xl py-8 px-5 border-t-8 border-blue-700"
          >
            <i-laptop></i-laptop>
            <h3 class="text-2xl font-bold text-blue-900 mt-8">Aplicaciones Web Híbridas</h3>
            <p
              class="text-base mt-3 text-blue-600"
            >Construimos aplicaciones web híbridas que funcionan en múltiples plataformas que van desde la web y escritorio con el mismo código base.</p>
            <ul class="mt-3 text-blue-900">
              <li class="h-10 flex items-center">
                <font-awesome icon="check-circle"></font-awesome>
                <span class="ml-3 text-base">Web</span>
              </li>
              <li class="h-10 flex items-center">
                <font-awesome icon="check-circle"></font-awesome>
                <span class="ml-3 text-base">Desktop</span>
              </li>
            </ul>
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