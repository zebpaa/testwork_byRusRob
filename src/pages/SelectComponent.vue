<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <div class="select">
    <label class="label" for="email">Выбрать ЖК</label>
    <select>
      <option>Любой</option>
      <option>Любой1</option>
      <option>Любой2</option>
    </select>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.label
  font-size: 11px

select
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
</style>
