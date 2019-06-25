<template>
  <div class="hero rounded-bl-320">
    <slot/>
  </div>
</template>

<style>
.hero {
  background-image: linear-gradient(
    to right,
    theme("colors.blue.800"),
    theme("colors.blue.900")
  );
}
</style>

