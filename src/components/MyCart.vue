<template>
  <div :class="isActive == false ? 'cartContainerToggle' : 'cartContainer'">
    <div :class="isActive == false ? 'cartHeaderToggle' : 'cartHeader'">
      <h1>My Bag</h1>
      <div class="cart-icon" @click="cartToggle">
        <svg class="icon icon-cart" viewBox="0 0 24 24" v-if="isActive">
          <path
            fill="currentColor"
            d="M22.73,22.73L1.27,1.27L0,2.54L4.39,6.93L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H14.46L15.84,18.38C15.34,18.74 15,19.33 15,20A2,2 0 0,0 17,22C17.67,22 18.26,21.67 18.62,21.16L21.46,24L22.73,22.73M7.42,15A0.25,0.25 0 0,1 7.17,14.75L7.2,14.63L8.1,13H10.46L12.46,15H7.42M15.55,13C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5A1,1 0 0,0 20,4H6.54L15.55,13M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18Z"
          />
        </svg>
        <svg class="icon icon-cart" viewBox="0 0 24 24" v-else>
          <path
            fill="currentColor"
            d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
          />
        </svg>
      </div>
    </div>
    <div :class="isActive == false ? 'cartFlowToggle' : ''">
      <div class="cart-flow">
        <div class="cart-item">
          <div class="cart-card">
            <div class="cart-img-wrapper">
              <img src="" alt="" class="cart-img" />
            </div>
            <div class="cart-card-info">
              <h2>Item name</h2>
              <h3>price</h3>
            </div>
          </div>
          <div class="cart-details">
            <div class="item">+</div>
            <div class="item">1</div>
            <div class="item">-</div>
          </div>
        </div>
      </div>
      <div class="cart-price-list">
        <div class="price-list">Subtotal <span>SubPrice</span></div>
        <div class="price-list">Shipment <span>shipPrice</span></div>
        <div class="price-list">Discount<span>discount</span></div>
        <div class="total-price-list">Total <span>Total</span></div>
        <div class="cart-btn">Checkout</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

function cartToggle() {
  switch (isActive.value) {
    case true:
      isActive.value = false;
      break;
    case false:
      isActive.value = true;
      break;

    default:
      break;
  }
}
</script>

<style>
@import "@/style/MyCart.css";
</style>
