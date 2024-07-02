<template>
    <!--begin::Header-->
    <div id="mz_app_header" class="app-header">
        <!--begin::Header container-->
        <div class="container-fluid app-container d-flex align-items-stretch justify-content-between">
            <!--begin::sidebar mobile toggle-->
            <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" v-tooltip title="Show sidebar menu">
                <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="mz_app_sidebar_mobile_toggle">
                    <i class="ri-menu-2-line" style="font-size: 2rem;"></i>
                </div>
            </div>
            <!--end::sidebar mobile toggle-->
            <div class="d-flex align-items-stretch justify-content-end flex-lg-grow-1" id="mz_app_header_wrapper">
                <HeaderNav />
            </div>
            <!--end::Header wrapper-->
        </div>
        <!--end::Header container-->
    </div>
    <!--end::Header-->
</template>

<script>
import HeaderNav from "./HeaderNav.vue"
export default {
    name: "Heading",
    components: {
        HeaderNav,
    },
}
</script>