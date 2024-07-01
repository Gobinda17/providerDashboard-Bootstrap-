<template>
  <div id="mz_app_sidebar" class="app-sidebar flex-column">
    <SidebarLogoVue></SidebarLogoVue>
    <SidebarMenuVue></SidebarMenuVue>
  </div>
</template>

<script>
import SidebarLogoVue from "./SidebarLogo.vue"
import SidebarMenuVue from './SidebarMenu.vue'
export default {
  name: "Sidebar",
  components: {
    SidebarLogoVue,
    SidebarMenuVue,
  },
}
</script>