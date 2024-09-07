<template>
    <div id="mz_app_content_container" class="app-container container-fluid">
        <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
            <div class="col-12 col-lg-4">
                <Highlights></Highlights>
            </div>
            <div class="col-12 mb-md-5 mb-xl-10">
                <TableWidget></TableWidget>
            </div>
        </div>
    </div>
</template>

<script>
import TableWidget from '../components/dashboard_widget/TableWidget.vue';
import Highlights from '../components/dashboard_widget/Highlights.vue';
export default {
    name: "Dashboard",
    components: {
        TableWidget,
        Highlights
    },
}
</script>wasda