<template>
  <div id="mz_app_sidebar" class="app-sidebar flex-column" data-mz-drawer="true"
    data-mz-drawer-name="app-sidebar"
    data-mz-drawer-activate="{default: true, lg: false}"
    data-mz-drawer-overlay="true"
    data-mz-drawer-width="225px"
    data-mz-drawer-direction="start"
    data-mz-drawer-toggle="#mz_app_sidebar_mobile_toggle">
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