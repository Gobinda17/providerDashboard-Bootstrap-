<template>
    <!--begin::Header-->
    <div id="mz_app_header" class="app-header">
        <!--begin::Header container-->
        <div class="container-fluid app-container d-flex align-items-stretch justify-content-between">
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