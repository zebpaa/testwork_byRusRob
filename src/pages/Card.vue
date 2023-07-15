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

      <div class="vector">
        <hr />
      </div>
      <div class="price">
        <div>12 886 400 ₽</div>
        <div class="discount">12 886 400 ₽</div>
        <button class="btn">10%</button>
      </div>
      <div class="buttons">
        <button class="btn blue">Отделка</button>
        <button class="btn blue">Вид на горы</button>
        <button class="btn blue">+2</button>
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
  border: solid 1px transparent
  margin-right: 30px

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
    position: absolute
    background: url('../assets/img/button_fire.svg') no-repeat
    // margin-top: 10px
    margin-left: 10px
    left: 0
    top: 0

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

.base
  margin-bottom: 16px

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
  margin-right: 22px

  &:first-child
    list-style: none

.vector hr
  width: 255px
  height: 1px
  border: 0
  color: $vectorColor
  background-color: $vectorColor
  margin-bottom: 14px

.price
  display: flex
  justify-content: space-between
  align-items: center
  width: 255px
  height: 25px
  font-size: 18px
  font-style: normal
  font-weight: 600
  line-height: 138.889%
  white-space: nowrap
  margin-bottom: 20px

.discount
  text-decoration: line-through
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: normal

.btn
  border-radius: 30.541px
  background: $brandColor
  border: 0
  font-size: 14px
  color: $promotionColor
  width: 39px
  height: 25px
  margin: 0

.buttons
  display: flex
  justify-content: start
.blue
  background: $buttonColor
  color: $buttonTextColor
  width: fit-content
  margin-right: 4px
  height: 29px
</style>
