<template>
  <div
    class="sales-responsive"
    v-for="(
      { salesImg, salesPrice, salesName, salesDescription, salesRating }, index
    ) in salesData"
    :key="index"
  >
    <div class="sale-wrapper">
      <div class="sale-card">
        <div class="sales-image-wrapper">
          <img :src="salesImg" :alt="salesName" class="sales-img" />
        </div>
        <div class="mid-rating-wrapper">
          <MyRating :ratings="salesRating" />
        </div>
        <div class="sales-info">
          <h2>Ksh: {{ salesPrice }}</h2>
          <h3>{{ salesDescription }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MyRating from "@/components/MyRating.vue";
import { useSalesStore } from "@/stores/sale";
const salesStore = useSalesStore();
const salesData = salesStore.salesData;
</script>
<style>
@import "@/style/MySale.css";
</style>
