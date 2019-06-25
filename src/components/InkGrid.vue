<template>
  <div class="grid" :style="{ '--row-gap': rowGap }">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    rowGap: {
      type: String
    }
  }
};
</script>


<style>
.grid {
  display: grid;
  --row-gap: 0;
  row-gap: var(--row-gap);
}
.grid-justify-self--end {
  justify-self: end;
}
.grid-col-1\/-1 {
  grid-column: 1 / -1;
}
.grid-row-1 {
  grid-row: 1;
}
.grid-row-2 {
  grid-row: 2;
}
.grid-align-self--center {
  align-self: center;
}
</style>

