<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <!-- <el-input v-model="input" placeholder="Please input" /> -->
  <input class="warning" type="email" placeholder="myname@gmail.com"/>
    
  
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'


input
  // outline: none
  
  border: 1px solid #EA5455
  padding-left: 11.1px
  width: 568px
  height: 46px
  // border: 1px solid $borderColor
  border-radius: 4px
  font-size: 14px

  &::placeholder
    color: #B7B5BE

  .warning
    outline: solid
    border: 1px solid #EA5455

</style>
