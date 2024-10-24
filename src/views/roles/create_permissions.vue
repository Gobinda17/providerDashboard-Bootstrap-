<template>
    <div class="container">
        <h3 class="text-dark p-3">Create Roles
        </h3>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="inputPassword5" class="form-label">Name</label>
                            <input type="text" id="inputPassword5" class="form-control" v-model="form.name">
                        </div>
                        <div class="col-md-3 mt-1">
                            <button type="submit" class="btn btn-sm btn-success rounded-0">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>


    </div>
</template>
 
<script>
import Swal from 'sweetalert2';
import apiClient from "../../utils/apiClient"
export default {
    data() {
        return {
            form: { name: '' }
        }
    },

    methods: {
        onSubmit() {
            apiClient({ url: 'permission/store', method: 'post', data: this.form }).then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Permission Saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((err) => {
            });
        },
    },

    mounted() {

    }
}
</script>
 
 
  
<style>
.form-holder {
    margin-top: 20%;
    margin-bottom: 20%;
}
</style>