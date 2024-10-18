<template>
    <div class="app-container container-fluid">
        <!--begin:Form-->
        <el-form id="mz_modal_new_target_form" class="form" @submit.prevent="onSubmit">
            <!--begin::Heading-->
            <div class="mb-13">
                <!--begin::Title-->
                <h1 class="mb-3">Tour Form</h1>
                <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Checkboxes-->
            <div class="d-flex align-items-center justify-content-start mb-4">
                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid me-10" v-for="(tour, j) in tour_types"
                    :key="j">
                    <input class="form-check-input h-20px w-20px" type="radio" :value="tour.id"
                        v-model="formData.tour_type_id" />
                    <span class="form-check-label fw-semobold">{{ tour.name }} </span>
                </label>
                <span class="text-danger" v-if="errors.tour_type_id">{{ errors.tour_type_id }}</span>
                <!--end::Checkbox-->
            </div>
            <!--end::Checkboxes-->

            <!--begin::Input group-->
            <div class="d-flex flex-column fv-row">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                    <span class="required">Tour Name</span>
                </label>
                <!--end::Label-->

                <el-form-item prop="targetTitle">
                    <el-input type="text" v-model="formData.tour_name" placeholder="Enter Tour Name"
                        name="tour_name"></el-input>
                </el-form-item>
                <span class="text-danger" v-if="errors.tour_name">{{ errors.tour_name }}</span>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9">
                <div class="col-md-3 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                        <span class="required">Capacity</span>
                    </label>
                    <!--end::Label-->

                    <el-form-item prop="targetTitle">
                        <el-input type="number" v-model="formData.slot_capacity" placeholder="Enter Capacity"
                            name="capacity"></el-input>
                    </el-form-item>
                    <span class="text-danger" v-if="errors.slot_capacity">{{ errors.slot_capacity }}</span>
                </div>
                <div class="col-md-3 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                        <span class="required">Starting Point</span>
                    </label>
                    <!--end::Label-->

                    <el-form-item prop="targetTitle">
                        <el-input type="text" v-model="formData.starting_point" placeholder="Enter Starting Point"
                            name="starting_point"></el-input>
                    </el-form-item>
                    <span class="text-danger" v-if="errors.starting_point">{{ errors.starting_point }}</span>
                </div>
                <div class="col-md-3 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                        <span class="required">Price Per Person</span>
                    </label>
                    <!--end::Label-->

                    <el-form-item prop="targetTitle">
                        <el-input type="number" v-model="formData.price_per_persion" placeholder="Enter Price"
                            name="price"></el-input>
                    </el-form-item>
                    <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9">
                <!--begin::Col-->
                <!-- <div class="col-md-6 fv-row">
                    <label class="required fs-6 fw-semobold mb-2">Availability</label>

                    <el-form-item prop="assign">
                        <el-select placeholder="Select Availability" name="availability" as="select"
                            v-model="formData.available" style="--el-text-color-regular: #fff;">
                            <el-option value="">Select</el-option>
                            <el-option label="Always Open" value="1">Always Open</el-option>
                            <el-option label="On an Event" value="2">On an Event</el-option>
                        </el-select>
                    </el-form-item>
                    <span class="text-danger" v-if="errors.available">{{ errors.available }}</span>
                </div> -->
                <!--end::Col-->

                <!--begin::Col-->
                <!-- <div class="col-md-6 fv-row">
                    <div class="row">
                        <div class="col-6">
                            <label class="required fs-6 fw-semobold mb-2">Start Date</label>

                            <div class="position-relative align-items-center">
                                <el-form-item prop="startDate">
                                    <el-date-picker type="date" placeholder="Select a date" :teleported="false"
                                        popper-class="override-styles" name="startDate" width="100%"
                                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff; --el-date-editor-width: 100%;"
                                        v-model="formData.startDate" />
                                </el-form-item>
                                <span class="text-danger" v-if="errors.startDate">{{ errors.startDate }}</span>
                            </div>
                        </div>

                        <div class="col-md-6 ">
                            <label class="required fs-6 fw-semobold mb-2">End Date</label>

                            <div class="position-relative align-items-center">
                                <el-form-item prop="endDate">
                                    <el-date-picker type="date" placeholder="Select a date" :teleported="false"
                                        popper-class="override-styles" name="endDate"
                                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff; --el-date-editor-width: 100%;"
                                        v-model="formData.endDate" />
                                </el-form-item>
                                <span class="text-danger" v-if="errors.endDate">{{ errors.endDate }}</span>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <!--end::Input group-->

            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="row" v-for="(image, index) in formData.images" :key="index">
                        <div class="col-10">
                            <!--begin::Input group-->
                            <div class="d-flex flex-column fv-row">
                                <!--begin::Label-->
                                <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                                    <span class="required">Upload Image</span>
                                </label>
                                <!--end::Label-->

                                <!-- <el-form-item prop="targetTitle">
                                    <el-input type="file" v-model="image.name" placeholder="Enter Location"></el-input>
                                </el-form-item> -->
                                <ImageVideo :selectedImages="formData.selectedImages" />
                                <span class="text-red-500" v-if="errors.selectedImages">{{ errors.selectedImages
                                    }}</span>
                            </div>
                            <!--end::Input group-->
                        </div>
                        <!-- <div class="col-2 d-flex align-items-center">
                            <button v-show="index === 0" class="btn btn-sm btn-primary w-100" type="button"
                                @click="addMore">
                                <i class="ri-file-add-line" style="font-size: 20px;"></i>
                            </button>
                            <button v-show="index > 0" class="btn btn-sm btn-danger w-100" type="button"
                                @click="deleteFile(index)">
                                <i class="ri-chat-delete-line" style="font-size: 20px;"></i>
                            </button>
                        </div> -->
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="row" v-for="(video, index) in formData.videos" :key="index">
                        <div class="col-10">
                            <!--begin::Input group-->
                            <div class="d-flex flex-column fv-row">
                                <!--begin::Label-->
                                <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                                    <span class="required">Upload Video Link</span>
                                </label>
                                <!--end::Label-->

                                <el-form-item prop="targetTitle">
                                    <el-input type="text" v-model="video.name" placeholder="Enter Link"></el-input>
                                </el-form-item>
                            </div>
                            <!--end::Input group-->
                        </div>
                        <div class="col-2 d-flex align-items-center">
                            <button v-show="index === 0" class="btn btn-sm btn-primary w-100" type="button"
                                @click="addMoreVideo">
                                <i class="ri-file-add-line" style="font-size: 20px;"></i>
                            </button>
                            <button v-show="index > 0" class="btn btn-sm btn-danger w-100" type="button"
                                @click="deleteFileVideo(index)">
                                <i class="ri-chat-delete-line" style="font-size: 20px;"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semobold mb-2">Descriptions</label>

                <el-form-item prop="targetDetails">
                    <el-input v-model="formData.description" type="textarea" rows="3" name="description"
                        placeholder="Descriptions"
                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff;" />
                </el-form-item>
                <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semobold mb-2">Rules and Regulations</label>
                <el-form-item prop="targetDetails">
                    <el-input v-model="formData.rules_regulation" type="textarea" rows="3" name="description"
                        placeholder="Rules and Regulations"
                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff;" />
                </el-form-item>
                <span class="text-danger" v-if="errors.rules_regulation">{{ errors.rules_regulation }}</span>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semobold mb-2">Features or Amenities</label>

                <el-form-item prop="targetDetails">
                    <el-input v-model="formData.features_amenities" type="textarea" rows="3" name="description"
                        placeholder="Features or Amenities"
                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff;" />
                </el-form-item>
                <span class="text-danger" v-if="errors.features_amenities">{{ errors.features_amenities }}</span>
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
                    <el-select v-model="formData.tags" multiple filterable allow-create default-first-option
                        placeholder="Choose tags for your target"
                        style="--el-input-bg-color: transparent; --el-text-color-regular: #fff;">
                        <el-option label="Important" :value="tag.id" v-for="(tag, i) in tagOptions" :key="i"> {{ tag.name
                            }}</el-option>
                    </el-select>
                </el-form-item>
                <span class="text-danger" v-if="errors.tags">{{ errors.tags }}</span>
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
import apiClient from "../../utils/apiClient";
import ImageVideo from "../components/ImageVideoUpload.vue"

export default {
    name: 'Tour',
    components: {
        ImageVideo
    },
    data() {
        return {
            inpurField: '',
            tour_types: [],
            tagOptions: [],
            formData: {
                location: "",
                startDate: "",
                endDate: "",
                images: [{
                    name: "",
                }],
                videos: [{
                    name: ""
                }],
                tour_name: '',
                tour_type_id: '',
                price_per_persion: '',
                slot_capacity: '',
                starting_point: '',
                description: '',
                features_amenities: '',
                rules_regulation: '',
                tags: [],
                selectedImages: [],
                new_tags: [],

            },
            errors: {
                location: "",
                startDate: "",
                endDate: "",
                tour_name: '',
                tour_type_id: '',
                price_per_persion: '',
                slot_capacity: '',
                starting_point: '',
                description: '',
                features_amenities: '',
                rules_regulation: '',
                selectedImages: [],

            },
        };
    },
    methods: {
        validateForm() {
            this.errors = {
                tour_type_id: this.formData.tour_type_id ? null : 'Tour type is required',
                tour_name: this.formData.tour_name ? null : 'Tour Name Field is required',
                slot_capacity: this.formData.slot_capacity ? null : 'Capacity Field is required',
                starting_point: this.formData.starting_point ? null : 'Starting Point Field is required',
                description: this.formData.description ? null : 'Description Field is required',
                features_amenities: this.formData.features_amenities ? null : 'Features Field is required',
                rules_regulation: this.formData.rules_regulation ? null : 'Rules and Regulation Field is required',
            };
            return Object.values(this.errors).every((error) => error === null);
        },
        onSubmit() {
            console.log(this.formData.tags);

            // if (this.validateForm()) {
            this.loading = true;
            apiClient({
                url: 'provider/activity/tour', method: 'post', data: this.formData, headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(res => {
                // this.provider_details = res.data.provider_details;
                // for (const property in this.provider_details) {
                //     this.form[property] = this.provider_details[property][0]
                // }
                // this.formData = {};
                setTimeout(() => {
                    this.loading = false;
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Data Saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }, 1000);

            }).catch((err) => {
                this.loading = false;
                this.reponseErrors = JSON.parse(err.response.data.error)
                console.log(this.reponseErrors);
                for (const property in this.reponseErrors) {
                    this.errors[property] = this.reponseErrors[property][0]
                }

            });
            // }

        },
        fetchData() {
            apiClient({ url: 'provider/tour-types', method: 'get' }).then(res => {
                this.tour_types = res.data.tour_types;
                console.log(this.tour_types);

                setTimeout(() => {
                    this.loading = false;
                }, 200);
            }).catch((err) => {
                console.log(err);
            });
        },
        fetchTags() {
            apiClient({ url: 'provider/tags', method: 'get' }).then(res => {
                this.tagOptions = res.data.tags;
            }).catch((err) => {
                console.log(err);
            });
        },
        addMore() {
            this.formData.images.push({ name: "" });
        },
        deleteFile(index) {
            this.formData.images.splice(index, 1);
        },
        addMoreVideo() {
            this.formData.videos.push({ name: "" });
        },
        deleteFileVideo(index) {
            this.formData.videos.splice(index, 1);
        }
    },
    mounted() {
        this.fetchData();
        this.fetchTags();
    }

}
</script>

<style scoped>
.el-input :deep(.el-input__inner),
.el-select :deep(.el-select__wrapper) {
    color: #fff !important;
    width: 100%;
}

.el-input :deep(.el-input__wrapper),
.el-select :deep(.el-select__wrapper) {
    background-color: transparent !important;
}
</style>
