<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px p-10">
        <!--begin::Form-->
        <form class="form w-100" id="sign_in_form">
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">Sign In</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-400 fw-semobold fs-4">
                    New Here?

                    <router-link to="/sign-up" class="link-primary fw-bold">
                        Create an Account
                    </router-link>
                </div>
                <!--end::Link-->
            </div>
            <!--begin::Heading-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bold text-dark">Email</label>
                <!--end::Label-->

                <!--begin::Input-->
                <input tabindex="1" class="form-control form-control-lg form-control-solid" type="text" name="email"
                    autocomplete="off" />
                <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                    <!--begin::Label-->
                    <label class="form-label fw-bold text-dark fs-6 mb-0">Password</label>
                    <!--end::Label-->

                    <!--begin::Link-->
                    <router-link to="/password-reset" class="link-primary fs-6 fw-bold">
                        Forgot Password ?
                    </router-link>
                    <!--end::Link-->
                </div>
                <!--end::Wrapper-->

                <!--begin::Input-->
                <input tabindex="2" class="form-control form-control-lg form-control-solid" type="password"
                    name="password" autocomplete="off" />
                <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
                <!--begin::Submit button-->
                <button tabindex="3" type="submit" ref="submitButton" id="kt_sign_in_submit"
                    class="btn btn-lg btn-primary w-100 mb-5">
                    <span class="indicator-label"> Continue </span>

                    <span class="indicator-progress">
                        Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
                <!--end::Submit button-->

                <!--begin::Separator-->
                <div class="text-center text-muted text-uppercase fw-bold mb-5">or</div>
                <!--end::Separator-->

                <!--begin::Google link-->
                <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                    <img alt="Logo" :src="google" class="h-20px me-3" />
                    Continue with Google
                </a>
                <!--end::Google link-->
            </div>
            <!--end::Actions-->
        </form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<script>
import google from '../../../public/media/social-logos/google.svg'
export default {
    name: "Sign-In",
    data() {
        return {
            google: google,
        }
    }
};
</script>