<template>
  <div class="home">
    <div class="home-panel">
      <img
        src="https://images.unsplash.com/photo-1615277716473-64285a2356df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
        class="panel-img"
      />
      <div class="home-details">
        <div class="input-wrapper">
          <svg class="icon icon-panel" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
          <input
            type="search"
            id=""
            class="input-panel"
            placeholder="search on kiafrika"
          />
        </div>
        <div class="panel-body">
          <h1>Shopping your best products</h1>
        </div>
        <div class="panel-btn">See more</div>
      </div>
    </div>
    <div class="service-container">
      <h1>Services</h1>
      <div class="service-wrapper">
        <div class="card-info">
          <h2>service name</h2>
          <h3>service company</h3>
          <MyRating />
        </div>
        <div class="card-img-wrapper">
          <img src="" alt="" class="service-img" />
        </div>
      </div>
    </div>
    <div class="sales-container">
      <div class="sales-header">
        <h1>Best Sell</h1>
        <a href=""><span>See all</span></a>
      </div>
      <MySale />
    </div>
  </div>
</template>
<script setup>
import MySale from "../components/MySale.vue";
</script>
<style>
@import "@/style/HomeView.css";
</style>
