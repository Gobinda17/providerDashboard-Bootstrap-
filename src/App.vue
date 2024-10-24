<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Mzoetic",
  data() {
    return {
      user: ''
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    // getRole: function () {
    //   console.log('sadas',this.$store.getters.getRole)
    //   return this.$store.getters.getRole
    // },
    // getPermission: function () {
    //   return this.$store.getters.getPermission
    // } 
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    async fetchUser() {
      if (this.isLoggedIn) {
        await this.$store.dispatch('getUser');
      }
    }
  },
}
</script>


<style lang="scss">
@import "assets/sass/plugins";
@import "assets/sass/style";

#app {
  display: contents;
}
</style>
