<template>
  <div class="message-container">
    <h1>Share your thoughts 🤔</h1>
    <p>We are here for you 🙂</p>
    <form class="message-form">
      <div class="input-form">
        <label for="name">Email</label>
        <input id="name" type="email" placeholder="kiafrika@gmail.co.ke" />
      </div>
      <div class="input-form">
        <label for="phone">Contact</label>
        <input id="phone" type="number" placeholder="+254700111222" />
      </div>
      <div class="input-form">
        <label for="comment">Comment</label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          placeholder="write your thoughts"
        ></textarea>
      </div>
      <div class="input-button">post comment</div>
    </form>
  </div>
</template>
<script setup></script>
<style>
@import "@/style/MessageView.css";
</style>
