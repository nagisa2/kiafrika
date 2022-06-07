<template>
  <div class="notification-container">
    <div v-if="!notification" class="default">
      <h1>You have no new notification 🔔</h1>
    </div>
    <div v-else>
      <div class="notification">
        <h1>notification message</h1>
        <span>time</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "@/style/NotificationsView.css";
</style>
