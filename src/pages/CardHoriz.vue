<script setup></script>

<template>
  <div class="card">
    <div class="icons">
      <div class="fire"></div>
      <div class="heart"></div>
      <div class="scales"></div>
    </div>

    <div class="plan">
      <img
        src="../assets/img/plan_of_flat_horiz.svg"
        alt="plan_of_flat_horiz.svg"
      />
    </div>

    <div class="description">
      <div class="base">
        <div class="name">
          <div class="location">ЖК "Министерские озера"</div>
          <div class="title">
            2-комнатная квартира № 262, 65.6 м<sup>2</sup>
          </div>
        </div>
        <div class="info">
          <ul class="options">
            <li class="option">Литер 14</li>
            <li class="option">Этаж 10</li>
            <li class="option">Сдача 1 кв. 2026</li>
          </ul>
        </div>
        <div class="price">
          <div class="discount">17 100 400 ₽</div>
          <div class="price">16 500 000 ₽</div>
          <button class="btn">10%</button>
        </div>

        <div class="buttons">
          <button class="btn blue">Отделка</button>
          <button class="btn blue">Лоджия</button>
          <button class="btn blue">+2</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.card
  display: flex
  align-items: center
  position: relative
  width: 1270px
  height: 140px

.icons .fire, .heart, .scales
  &::before
    position: absolute
    content: ""
    width: 32px
    height: 32px
    right: 0

.fire
  &::before
    left: 10px
    top: 10px
    margin: 0
    background: url('../assets/img/button_fire.svg') no-repeat
.heart
  &::before
    top: 20px
    right: 20px
    background: url('../assets/img/button_heart.svg') no-repeat

.scales
  &::before
    top: 54px
    right: 20px
    background: url('../assets/img/button_scales.svg') no-repeat

.plan
  width: 100px
  height: 117px
  margin: 11px 35px 12px 35px

.description
  position: absolute
  top: 30px
  left: 170px
  margin-right: 45px
  
.base
  display: flex
  width: 220px
  height: 44px

.location
  width: 322px
  height: 17px
  color: $locationColor
  line-height: 100%
  margin-bottom: 13px

.title
  width: 220px
  height: 40px
  font-size: 16px
  font-weight: 600
  margin-bottom: 12px

.info
  display: flex
  align-items: center
.options
  width: 322px
  height: 17px
  display: flex
  color: $optionColor
  margin-right: 82px
  align-items: center

.option
  margin-right: 34px
  line-height: 157.143%
  white-space: nowrap
  list-style-type: none

  &:last-child
    margin-right: 0
.price
  width: 132px
  height: 25px
  font-size: 20px
  font-style: normal
  font-weight: 600
  line-height: 138.889%
  white-space: nowrap
  margin-right: 42px
  color: $brandColor

.discount
  width: 86px
  height: 17px
  text-decoration: line-through
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: normal
  color: $blackColor

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

@media (max-width: 1024px)
  .card
    width: 992px

@media (max-width: 768px)
  .card
    width: 736px
    height: 147px

@media (max-width: 375px)
  .card
    width: 343px
    height: 292px
</style>
