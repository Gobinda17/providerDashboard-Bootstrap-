<template>
   <div class="container">
              <h3 class="text-dark p-3">Roles
              </h3>
              <div class="card">
                      <div class="card-header text-right">
                        <router-link :to="{name:'createPermission'}">Add Permission</router-link>
                      </div>
                      <div class="card-body">
                              <table class="table">
                                      <thead>
                                              <tr>
                                                      <th scope="col">Name</th>
                                              </tr>
                                      </thead>
                                      <tbody>
                                              <tr v-for="perm in permissions">
                                                      <td>{{perm.name}}</td>
                                              </tr>
                                      </tbody>
                              </table>
                      </div>
              </div>


      </div>
</template>

<script>
import apiCLient from '../../utils/apiClient';
export default {
  data() {
      return {
          count: 0,
          permissions:[],
      }
  },

  methods: {
      fetchData() {
        apiCLient({url: 'permissions', method: 'get' }).then(res => {
              this.permissions=res.data.permissions;
          }).catch((err) => {
          });
      },
  },

  mounted() {
      this.fetchData()
  }
}
</script>


 
<style>
.form-holder {
  margin-top: 20%;
  margin-bottom: 20%;
}
</style>