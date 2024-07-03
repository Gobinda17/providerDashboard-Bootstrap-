<template>
    <!--begin::Logo-->
    <div class="app-sidebar-logo px-6" id="mz_app_sidebar_logo">
        <!--begin::Logo image-->
        <router-link to="/" class="d-flex align-items-center gap-2">
            <img alt="Logo" :src="logo" class="h-25px app-sidebar-logo-default" />
            <img alt="Logo" :src="logo" class="h-20px app-sidebar-logo-minimize" />
            <span class="page-heading text-dark fw-bold fs-3 my-0">Mzoetic</span>
        </router-link>
        <!--end::Logo image-->
        <!--begin::Sidebar toggle-->
        <div id="mz_app_sidebar_toggle"
            class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
            data-mz-toggle="true" data-mz-toggle-state="active" data-mz-toggle-target="body" @click="toogleMenu()">
            <i class="ri-arrow-left-fill fs-3 ms-1" :class="flag === 1 ? 'rotate-180' : ''"></i>
        </div>
        <!--end::Sidebar toggle-->
    </div>
    <!--end::Logo-->
</template>

<script>
import logo from '../../../../public/media/logos/logo-white.png'
export default {
    name: "Sidebar Logo",
    data() {
        return {
            logo: logo,
            flag: 0,
        }
    },
    methods: {
        toogleMenu() {
            let element = this.fetchBody();
            if (!this.flag) {
                element.attributes["data-mz-app-sidebar-minimize"].nodeValue = "on";
                this.flag = 1;
            } else {
                element.attributes["data-mz-app-sidebar-minimize"].nodeValue = "off";
                this.flag = 0;
            }
        },
        fetchBody() {
            let bodyElement = document.getElementById('mz_app_body');
            return bodyElement;
        }
    },
    mounted() {
        this.fetchBody()
    }
}
</script>
