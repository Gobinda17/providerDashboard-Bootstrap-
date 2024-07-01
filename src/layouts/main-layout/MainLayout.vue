<template>
    <!--begin::App-->
    <div class="d-flex flex-column flex-root app-root" id="mz_app_root">
        <!--begin::Page-->
        <div class="app-page flex-column flex-column-fluid" id="mz_app_page">
            <Heading></Heading>
            <!--begin::Wrapper-->
            <div class="app-wrapper flex-column flex-row-fluid" id="mz_app_wrapper">
                <Sidebar></Sidebar>
                <!--begin::Main-->
                <div class="app-main flex-column flex-row-fluid" id="mz_app_main">
                    <!--begin::Content wrapper-->
                    <div class="d-flex flex-column flex-column-fluid">
                        <Toolbar></Toolbar>
                        <div id="mz_app_content" class="app-content flex-column-fluid">
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
import Content from './content/Content.vue'
import Sidebar from './side-bar/Sidebar.vue'
import Heading from "./header-layout/Header.vue"
import Toolbar from './toolbar/Toolbar.vue'
export default {
    name: "main-layout",
    components: {
        Content,
        Sidebar,
        Heading,
        Toolbar,
    },
}
</script>