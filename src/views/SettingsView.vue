<template>
  <div class="settings">
    <div class="user-settings" v-if="!isAdmin">
      <h1>User settings is currently in development 👩‍💻</h1>
    </div>
    <div class="admin-settings" v-else>
      <div class="profile-pic">
        <img src="" alt="" class="admin-pic" />
      </div>
      <div class="admin-info">
        <h1>Admin settings is currently in development 👩‍💻</h1>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
@import "../style/SettingsView.css";
</style>
