<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="vector">
    <hr />
  </div>
  <div class="title">Вам подходит 375 вариантов</div>
  <div class="container">
    <Card v-for="item in 8" />
  </div>
  <div class="input_block_drop">

  </div>

</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.container
  display: grid
  position: relative
  width: 1920px
  height: 1776px

.vector hr
  width: 1270px
  height: 1px
  border: 0
  color: $vectorColor
  background-color: $vectorColor
  margin-bottom: 40px
  margin-top: 120px

.title
  font-weight: 600
  font-size: 42px

.input_block_drop
  position: absolute
  width: 1270px
  height: 74px
  top: 282px
  left: 325px
</style>
