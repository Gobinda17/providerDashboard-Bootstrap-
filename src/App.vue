<template>
  <router-view></router-view>
</template>


<!-- <script lang="ts">
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
</script> -->

<script>
export default {
  name: "LandingPage",
}
</script>


<style lang="scss">
@import "assets/sass/plugins";
@import "assets/sass/style";

#app {
  display: contents;
}
</style>
