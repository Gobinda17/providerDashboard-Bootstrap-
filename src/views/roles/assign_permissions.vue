<template>
    <div class="container" v-if="error">
        <p>Error</p>
    </div>

    <div class="container" v-if="!IsLoading && !error">
        <h3 class="text-dark p-3">Assign Permission
        </h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2 g-2" v-if="assignPermissions" v-for="permission in assignPermissions">
                        <form @submit.prevent="onDelete(permission['id'])">
                            <button type="submit" class="btn btn-danger">{{ permission.name }}</button>
                        </form>
                    </div>
                </div>


                <form @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-check" v-for="perm in permissions">
                                <input class="form-check-input" type="checkbox" :value="perm.name"
                                    v-model="form.permission">
                                <label class="form-check-label" for="flexCheckChecked">
                                    {{ perm.name }}
                                </label>
                            </div>
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
// import axios from 'axios'
import apiClient from "../../utils/apiClient"
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            form: { permission: [] },
            permissions: [],
            role: [],
            assignPermissions: [],
            deletePermission: {},
            IsLoading: true,
            error: null,
        }
    },

    methods: {
        fetchData() {
            this.IsLoading = true;
            apiClient({ url: `/role/${this.$route.params.id}/permissions`, method: 'get' }).then(res => {
                this.permissions = res.data.permissions
                this.role = res.data.role
                this.assignPermissions = res.data.assignPermissions;
                this.IsLoading = false;

            }).catch((err) => {
            });
        },
        onSubmit() {
            this.IsLoading = true;
            apiClient({ url: `/role/${this.role['id']}/assignPermissions`, method: 'post', data: this.form }).then(res => {
                if (res.data.status == 'success') {
                this.assignPermissions = res.data.assignPermissions;
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Permission Saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.IsLoading = false;
                }

            }).catch((err) => {
                this.error = err.message || "Something wrong";
            });
        },
        onDelete(id) {
            this.IsLoading = true;
            apiClient({ url: `/role/${this.role['id']}/permission/${id}`, method: 'delete' }).then(res => {
                if (res.data.status == 'success') {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Permission Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.IsLoading = false;
                }

            }).catch((err) => {

            });
        }
    },

    mounted() {
        this.fetchData();
    }
}
</script>
 
 
  
<style>
.form-holder {
    margin-top: 20%;
    margin-bottom: 20%;
}
</style>