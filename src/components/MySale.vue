<template>
  <div class="sales-responsive">
    <div class="sale-wrapper">
      <div class="sale-card">
        <div class="sales-image-wrapper">
          <img src="" alt="" class="sales-img" />
        </div>
        <div class="mid-rating-wrapper">
          <MyRating />
        </div>
        <div class="sales-info">
          <h2>salesprice</h2>
          <h3>sales description</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MyRating from "@/components/MyRating.vue";
</script>
<style>
@import "@/style/MySale.css";
</style>
