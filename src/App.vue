<template>
  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent, nextTick, onBeforeMount, onMounted } from "vue";
import { initializeComponents } from "./core/plugins/DashboardTheme";
export default {
  name: "LandingPage",
  setup() {
    onMounted(() => {
      nextTick(() => {
        initializeComponents();
      });
    });
  }
}
</script>

<style lang="scss">
// Main demo style scss
@import "assets/keenicons/duotone/style.css";
@import "assets/keenicons/outline/style.css";
@import "assets/keenicons/solid/style.css";
@import "assets/sass/plugins";
@import "assets/sass/style";

#app {
  display: contents;
}
</style>
