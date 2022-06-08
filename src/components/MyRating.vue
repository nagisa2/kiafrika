<template>
  <div class="rating-container">
    <svg class="icon icon-rating" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      />
    </svg>
    <span>{{ props.ratings }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  ratings: Number,
});
</script>

<style>
@import "@/style/MyRating.css";
</style>
