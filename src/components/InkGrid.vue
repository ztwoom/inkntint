<template>
  <div
    class="grid"
    :style="{ '--column-gap': columnGap, '--row-gap': rowGap, '--grid-gap': gridGap }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    columnGap: {
      type: String
    },
    rowGap: {
      type: String
    },
    gridGap: {
      type: String
    }
  }
};
</script>


<style>
.grid {
  --column-gap: 0;
  --row-gap: 0;
  --grid-gap: 0;
  display: grid;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  grid-gap: var(--grid-gap);
}
.grid-row-2 {
  grid-row: 2;
}
.grid-justify-self--start {
  justify-self: start;
}
.grid-justify-self--end {
  justify-self: end;
}
.grid-justify-self--center {
  justify-self: center;
}
.grid-justify-self--center {
  justify-self: center;
}
.grid-align-self--center {
  align-self: center;
}
</style>

