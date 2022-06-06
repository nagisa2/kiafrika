<template>
  <div class="app">
    <div class="navbar">
      <NavBar props="true" />
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="cart">
      <MyCart />
    </div>
  </div>
  >
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import MyCart from "./components/MyCart.vue";
</script>

<style>
@import "./style/global.css";
</style>
