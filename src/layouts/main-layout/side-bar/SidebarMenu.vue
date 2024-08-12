<template>
<!--begin::sidebar menu-->
<div class="app-sidebar-menu overflow-hidden flex-column-fluid">
    <!--begin::Menu wrapper-->
    <div id="mz_app_sidebar_menu_wrapper" class="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-mz-scroll="true" data-mz-scroll-activate="true" data-mz-scroll-height="auto" data-mz-scroll-dependencies="#mz_app_sidebar_logo, #mz_app_sidebar_footer" data-mz-scroll-wrappers="#mz_app_sidebar_menu" data-mz-scroll-offset="5px" data-mz-scroll-save-state="true">
        <!--begin::Menu-->
        <div id="#mz_app_sidebar_menu" class="menu menu-column menu-rounded menu-sub-indention px-3" data-mz-menu="true">
            <div class="menu-item">
                <router-link to="/dashboard" class="active router-link-exact-active menu-link">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                        <i class="ri-menu-line"></i>
                        <span class="menuTitle">
                            Dashboard
                        </span>
                    </span>
                </router-link>
            </div>
            <div class="menu-item pt-5">
                <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                        Provider
                    </span>
                </div>
            </div>
            <div class="menu-item">
                <router-link to="/dashboard" class="router-link-exact-active menu-link">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                        <i class="ri-pages-line"></i>
                        <span class="menuTitle">
                            Pages
                        </span>
                    </span>
                </router-link>
            </div>
            <div class="menu-item menu-accordion" data-mz-menu-sub="accordion" data-mz-menu-trigger="click" @click="showDropDown()">
                <span class="router-link-exact-active menu-link justify-content-between">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                        <i class="ri-pages-line"></i>
                        <span class="menuTitle">
                            My Servcies
                        </span>
                    </span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <router-link class="menu-link" active-class="active" to="/stay">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Stay</span>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link class="menu-link" active-class="active" to="/tour">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Tour</span>
                        </router-link>
                    </div>
                    <!-- <div class="menu-item menu-accordion" data-mz-menu-sub="accordion" data-mz-menu-trigger="click">
                        <span class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Demo-2</span>
                            <span class="menu-arrow"></span>
                        </span>
                        <div class="menu-sub menu-sub-accordion">
                            <div class="menu-item">
                                <router-link class="menu-link" active-class="active" to="/">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Dem0-3</span>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Menu wrapper-->
</div>
<!--end::sidebar menu-->
</template>

<script>
export default {
    name: "Sidebar Menu",
    methods: {
        showDropDown() {
            let showDropDown = document.getElementsByClassName('menu-accordion');
            for(let i = 0; i < showDropDown.length; i++) {
                if(showDropDown[i].classList.contains('show')) {
                    showDropDown[i].classList.remove('hover');
                    showDropDown[i].classList.remove('show');
                } else {
                    showDropDown[i].classList.add('hover');
                    showDropDown[i].classList.add('show');
                }
            }
        },
    }
}
</script>

<style scoped>
span>span {
    color: #fff !important;
}
</style>
