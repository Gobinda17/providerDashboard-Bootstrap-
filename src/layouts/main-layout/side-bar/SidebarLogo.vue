<template>
    <!--begin::Logo-->
    <div class="app-sidebar-logo px-6" id="mz_app_sidebar_logo">
        <!--begin::Logo image-->
        <router-link to="/" class="d-flex align-items-center gap-2">
            <img alt="Logo" :src="logo" class="h-25px app-sidebar-logo-default" />
            <span class="page-heading text-dark fw-bold fs-3 my-0">Mzoetic</span>
        </router-link>
        <!--end::Logo image-->
        <!--begin::Sidebar toggle-->
        <div ref="toggleRef" id="mz_app_sidebar_toggle"
            class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
            data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize">
            <i class="ri-arrow-left-fill fs-3 rotate-180 ms-1"></i>
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
        }
    }
}
</script>