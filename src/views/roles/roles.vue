<template>
     <div class="container">
                <h3 class="text-dark p-3">Roles
                </h3>
                <div class="card">
                        <div class="card-header text-right">
                        </div>
                        <div class="card-body">
                                <table class="table">
                                        <thead>
                                                <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">#</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr v-for="role in roles">
                                                        <td>{{role.name}}</td>
                                                        <td><router-link :to='{name:"assignPermission",params:{id:role.id}}' class="btn btn-info btn-sm">Assign Permission</router-link></td>
                                                </tr>

                                        </tbody>
                                </table>
                        </div>
                </div>


        </div>
</template>
  
<script>
import apiClient from '../../utils/apiClient'
export default {
    data() {
        return {
            roles:[],
        }
    },

    methods: {
        fetchData() {
            apiClient({url: 'roles', method: 'get' }).then(res => {
                this.roles=res.data.roles;
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