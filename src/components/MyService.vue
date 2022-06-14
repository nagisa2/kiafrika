<template>
  <div class="myservice-container">
    <div
      class="myservice-wrapper"
      v-for="(
        {
          serviceImg,
          serviceDescription,
          serviceName,
          serviceCompany,
          serviceRating,
        },
        index
      ) in myserviceData"
      :key="index"
    >
      <img :src="serviceImg" :alt="serviceName" class="myservice-img" />
      <div class="myservice-info">
        <h2>{{ serviceName }}</h2>
        <p>{{ serviceDescription }}</p>
        <h3>{{ serviceCompany }}</h3>
        <div class="myservice-details">
          <MyRating :ratings="serviceRating" />
          <div class="myservice-btn">Add to cart</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MyRating from "./MyRating.vue";
import { useServiceStore } from "../stores/service";
const myservicestore = useServiceStore();

const props = defineProps({
  id: String,
});

const serviceData = myservicestore.serviceData;

let myserviceData = [];

serviceData.forEach((service) => {
  if (service.serviceName == props.id) {
    myserviceData.push(service);
  }
});

console.log(myserviceData);
console.log(props.id);
</script>
<style>
@import "../style/MyService.css";
</style>
