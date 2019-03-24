
<template>
      <div class="gallery">
        <img v-img:my-group src="../assets/1333.png">
        <img v-img:my-group src="../assets/1.png">
        <img v-img:my-group src="../assets/100_0389.png">
        <img v-img:my-group src="../assets/Picture 064.png">
        <img v-img:my-group src="../assets/41.png">
        <img v-img:my-group src="../assets/9.png">
      </div>
</template>


<style lang="scss" scoped>
.gallery {
  display: -ms-grid;
  display: grid;
  grid-gap: 7px;
  -ms-grid-columns: (minmax(200px, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  img {
    width: 100% !important;
  }
}
</style>
  