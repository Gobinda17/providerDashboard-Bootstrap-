<template>
    <!--begin::App-->
    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
        <!--begin::Page-->
        <div class="app-page flex-column flex-column-fluid" id="kt_app_page">

            <!--begin::Wrapper-->
            <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                <Sidebar></Sidebar>
                <!--begin::Main-->
                <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                    <!--begin::Content wrapper-->
                    <div class="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_content" class="app-content flex-column-fluid">
                            <Content></Content>
                        </div>
                    </div>
                    <!--end::Content wrapper-->

                </div>
                <!--end:::Main-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::App-->
</template>

<script>
import Content from './content/Content.vue';
import Sidebar from '../side-bar/Sidebar.vue';
export default {
    name: "main-layout",
    components: {
        Content,
        Sidebar,
    },
}
</script>