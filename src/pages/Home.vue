<script setup>
import Card from "./Card.vue";
import TheInput from "./TheInput.vue";
import TheSelect from "./TheSelect.vue";
import SelectComponent from "./SelectComponent.vue";
</script>

<template>
  <div class="main_container">
    <div class="container">
      <div class="vector">
        <hr />
      </div>
      <div class="title">Вам подходит 375 вариантов</div>
      <div class="input_block_drop">
        <SelectComponent />
      </div>
      <div class="filtration">Сортировать:</div>
      <div class="list">
        <Card v-for="item in 8" />
      </div>
      <ul class="numbers" >
        <li v-for="number in 3">
          {{ number }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.main_container
  background: #FAFAFA
  position: relative

.container
  width: 1270px
  margin: 0 auto
  // padding-top: 1px

.vector hr
  width: 1270px
  height: 1px
  border: 0
  background-color: $vectorColor
  margin-bottom: 40px
  margin-top: 120px

.title
  font-weight: 600
  font-size: 42px
  margin-bottom: 80px
.input_block_drop
  width: 1270px
  height: 74px
  top: 282px
  left: 325px
  // border: solid 1px
  margin-bottom: 56px

.filtration
  margin-bottom: 48px
.list
  display: grid
  grid-template-columns: repeat(4, 295px)
  gap: 30px
  justify-content: center
  padding-bottom: 45px

.numbers
  display: flex
  justify-content: center
  list-style: none
  font-size: 18px
  font-weight: 600
  line-height: 150%
.numbers li
  margin-right: 10px
</style>
