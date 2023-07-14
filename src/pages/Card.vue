<script setup></script>

<template>
  <div class="card">
    <div class="icons">
      <div class="fire"></div>
      <div class="heart"></div>
      <div class="scales"></div>
    </div>

    <div class="plan">
      <img src="../assets/img/plan_of_flat.svg" alt="plan_of_flat.svg" />
    </div>

    <div class="description">
      <div class="base">
        <div class="name">
          <div class="location">ЖК "Министерские озера"</div>
          <div class="title">
            3-комнатная квартира № 262, 65.6 м<sup>2</sup>
          </div>
        </div>

        <ul class="options">
          <li class="option">Литер 14</li>
          <li class="option">Этаж 10</li>
          <li class="option">Сдача 1 кв. 2026</li>
        </ul>
      </div>
      <div class="price">
        <div class="vector">
          <hr>
        </div>
        <div class="">12 886 400 ₽</div>
        <div class="card__price--discount">12 886 400 ₽</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.card
  position: relative
  width: 295px
  height: 522px
  border: solid 1px

.icons .fire, .heart, .scales
  &::before
    position: absolute
    content: ""
    width: 32px
    height: 32px
    margin-top: 12px
    right: 0

.fire
  &::before
    background: url('../assets/img/button_fire.svg') no-repeat
    margin-top: 10px
    margin-left: 10px
    left: 0

.heart
  &::before
    background: url('../assets/img/button_heart.svg') no-repeat
    margin-right: 46px

.scales
  &::before
    background: url('../assets/img/button_scales.svg') no-repeat
    margin-right: 12px

.plan
  width: 220px
  height: 236px
  margin: 30px auto 10px

.description
  width: 255px
  height: 198px
  margin: 0 20px 24px 20px

.location
  width: 181px
  height: 14px
  color: $locationColor
  line-height: 100%
  margin-bottom: 6px
  
.title
  width: 240px
  height: 40px
  font-size: 16px
  font-weight: 600
  margin-bottom: 12px

.options
  display: flex
  color: $optionColor
  width: 253px
  
.option
  line-height: 157.143%
  white-space: nowrap
  margin-right: 12px
  &:first-child
    list-style: none

.price
  width: 255px
  height: 88px

  .vector hr
    width: 255px
    height: 0px
    border-color: $vectorColor
    
</style>
