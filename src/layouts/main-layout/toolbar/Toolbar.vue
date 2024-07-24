<template>
<!--begin::Toolbar-->
<div id="mz_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <!--begin::Toolbar container-->
    <div id="mz_app_toolbar_container" class="app-container d-flex flex-stack container-fluid">
        <!--begin::Page title-->
        <div class="page-title d-flex justify-content-center flex-wrap me-3 flex-column">
            <!--begin::Title-->
            <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                Dashboard
            </h1>
            <!--end::Title-->
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <!--begin::Item-->
                <li class="breadcrumb-item text-muted">
                    <router-link to="/" class="text-muted text-hover-primary">Home</router-link>
                </li>
                <!--end::Item-->
                <!--begin::Item-->
                <li class="breadcrumb-item">
                    <span class="bullet bg-gray-400 w-5px h-2px"></span>
                </li>
                <!--end::Item-->
                <!--begin::Item-->
                <li class="breadcrumb-item text-muted">Dashbaord</li>
                <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
        </div>
        <!--end::Page title-->
    </div>
    <!--end::Toolbar container-->
</div>
<!--end::Toolbar-->
</template>

<script>
export default {
    name: "Toolbar",
    data() {
        return {
            pageTitle: "",
            breadcrumbs: [],
        };
    },
    computed: {
        pageTitle() {
            return this.$route.meta.pageTitle;
        },
        breadcrumbs() {
            return this.$route.meta.breadcrumbs;
        },
        watch: {
            
        }
    }
}
</script>
