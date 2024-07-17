<template>
    <div>
        <!--begin:Form-->
        <el-form id="mz_modal_new_target_form" class="form">
            <!--begin::Heading-->
            <div class="mb-13">
                <!--begin::Title-->
                <h1 class="mb-3">Stay Entry Form</h1>
                <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Checkboxes-->
            <div class="d-flex align-items-center justify-content-evenly">
                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid me-10">
                    <input class="form-check-input h-20px w-20px" type="checkbox" name="stay[]" value="camp"
                        checked />
                    <span class="form-check-label fw-semobold"> Camp </span>
                </label>
                <!--end::Checkbox-->

                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input h-20px w-20px" type="checkbox" name="stay[]"
                        value="hostel" />
                    <span class="form-check-label fw-semobold"> Hostel </span>
                </label>
                <!--end::Checkbox-->

                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input h-20px w-20px" type="checkbox" name="stay[]"
                        value="homestay" />
                    <span class="form-check-label fw-semobold"> Homestay </span>
                </label>
                <!--end::Checkbox-->

                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input h-20px w-20px" type="checkbox" name="stay[]"
                        value="resort" />
                    <span class="form-check-label fw-semobold"> Resort </span>
                </label>
                <!--end::Checkbox-->

                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input h-20px w-20px" type="checkbox" name="stay[]"
                        value="other" />
                    <span class="form-check-label fw-semobold"> Other </span>
                </label>
                <!--end::Checkbox-->
            </div>
            <!--end::Checkboxes-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                    <span class="required">Location</span>
                </label>
                <!--end::Label-->

                <el-form-item prop="targetTitle">
                    <el-input v-model="inpurField" placeholder="Enter Location" name="location"></el-input>
                </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                    <label class="required fs-6 fw-semobold mb-2">Availability</label>

                    <el-form-item prop="assign">
                        <el-select placeholder="Select a Team Member" name="assign" as="select">
                            <el-option value="">Select</el-option>
                            <el-option label="always" value="1">Always Open</el-option>
                            <el-option label="event" value="2">On a Event</el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                    <label class="required fs-6 fw-semobold mb-2">Due Date</label>

                    <!--begin::Input-->
                    <div class="position-relative align-items-center">
                        <!--begin::Datepicker-->
                        <el-form-item prop="dueDate">
                            <el-date-picker type="date" placeholder="Select a date" :teleported="false"
                                popper-class="override-styles" name="dueDate" />
                        </el-form-item>
                        <!--end::Datepicker-->
                    </div>
                    <!--end::Input-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semobold mb-2">Target Details</label>

                <el-form-item prop="targetDetails">
                    <el-input type="textarea" rows="3" name="targetDetails" placeholder="Type Target Details" />
                </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                    <span class="required">Tags</span>
                </label>
                <!--end::Label-->

                <el-form-item prop="tags">
                    <el-select v-model="tags" multiple filterable allow-create default-first-option
                        placeholder="Choose tags for your target">
                        <el-option label="Important" value="important"> </el-option>
                        <el-option label="Urgent" value="urgent"> </el-option>
                        <el-option label="High" value="high"> </el-option>
                        <el-option label="Low" value="low"> </el-option>
                        <el-option label="Medium" value="medium"> </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-stack mb-8">
                <!--begin::Label-->
                <div class="me-5">
                    <label class="fs-6 fw-semobold">Adding Users by Team Members</label>

                    <div class="fs-7 fw-semobold text-gray-400">
                        If you need more info, please check budget planning
                    </div>
                </div>
                <!--end::Label-->

                <!--begin::Switch-->
                <label class="form-check form-switch form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="1" checked />
                    <span class="form-check-label fw-semobold text-gray-400">
                        Allowed
                    </span>
                </label>
                <!--end::Switch-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-15 fv-row">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="fw-semobold me-5">
                        <label class="fs-6">Notifications</label>

                        <div class="fs-7 text-gray-400">
                            Allow Notifications by Phone or Email
                        </div>
                    </div>
                    <!--end::Label-->

                    <!--begin::Checkboxes-->
                    <div class="d-flex align-items-center">
                        <!--begin::Checkbox-->
                        <label class="form-check form-check-custom form-check-solid me-10">
                            <input class="form-check-input h-20px w-20px" type="checkbox" name="communication[]"
                                value="email" checked />

                            <span class="form-check-label fw-semobold"> Email </span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Checkbox-->
                        <label class="form-check form-check-custom form-check-solid">
                            <input class="form-check-input h-20px w-20px" type="checkbox" name="communication[]"
                                value="phone" />

                            <span class="form-check-label fw-semobold"> Phone </span>
                        </label>
                        <!--end::Checkbox-->
                    </div>
                    <!--end::Checkboxes-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
                <button type="reset" id="kt_modal_new_target_cancel" class="btn btn-light me-3">
                    Cancel
                </button>

                <!--begin::Button-->
                <button class="btn btn-lg btn-primary" type="submit">
                    <span class="indicator-label">
                        Submit
                    </span>
                </button>
                <!--end::Button-->
            </div>
            <!--end::Actions-->
        </el-form>
        <!--end:Form-->
    </div>
</template>

<script>
export default {
    name: 'Stay',
    data() {
        return {
            inpurField: '',
            tags: [],
        };
    }
}
</script>