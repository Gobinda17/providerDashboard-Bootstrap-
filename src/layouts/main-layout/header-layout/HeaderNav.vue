<template>
  <!--begin::Navbar-->
  <div class="app-navbar flex-shrink-0">
    <!--begin::User menu-->
    <div class="app-navbar-item ms-1 ms-md-4" id="mz_header_user_menu_toggle">
      <!--begin::Menu wrapper-->
      <div class="cursor-pointer symbol symbol-35px" @click="showMenu()"
        data-mz-menu-attach="parent" data-mz-menu-placement="bottom-end">
        <img :src="UserImg" class="rounded-3" alt="user" />
      </div>
      <UserMenuVue />
      <!--end::Menu wrapper-->
    </div>
    <!--end::User menu-->
  </div>
  <!--end::Navbar-->
</template>

<script>
import UserMenuVue from './UserMenu.vue'
import UserImg from '../../../../public/media/profile/300-1.jpg'

export default {
  name: 'HeaderNav',
  components: {
    UserMenuVue,
  },
  data () {
    return {
      UserImg: UserImg,
    };
  },
  methods: {
    showMenu() {
      let showMenu = document.getElementById('mz_user_menu');
      if(showMenu.classList.contains('showMenu')) {
        showMenu.classList.remove('showMenu');
      } else {
        showMenu.classList.add('showMenu');
      }
    },
  }
}
</script>