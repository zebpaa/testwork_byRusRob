<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <label class="label" for="email">Ваш email</label>
  <input type="text" placeholder="myname@gmail.com" list="list" />
  <datalist id="list">
    <option>Volvo</option>
    <option>Saab</option>
    <option>Mercedes</option>
    <option>Audi</option>
  </datalist>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.label
  color: #929292

input
  margin-top: 10px
  padding-right: 10px
  display: flex
  outline: none
  padding-left: 11.1px
  width: 230px
  height: 46px
  border: 1px solid $borderColor
  border-radius: 4px
  font-size: 14px

  &::placeholder
    color: #B7B5BE

datalist
  padding: 0
</style>
