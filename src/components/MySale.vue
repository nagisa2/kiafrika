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
        <div class="sales-info">
          <h3>{{ salesDescription }}</h3>
          <div class="sales-mid">
            <MyRating :ratings="salesRating" />
            <h2>Ksh: {{ salesPrice }}</h2>
          </div>
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
