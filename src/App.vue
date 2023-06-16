<template>
  <div>
    <RouterView />
    <footer />
  </div>
</template>

<script setup>
import footer from "./components/FooterView.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
