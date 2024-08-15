<template>
    <!--begin::Label-->
    <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Tags</span>
    </label>
    <!--end::Label-->

    <el-form-item prop="tags">
        <el-select v-model="tags" multiple filterable allow-create default-first-option
            placeholder="Choose tags for your target"
            style="--el-input-bg-color: transparent; --el-text-color-regular: #fff;">
            <el-option v-for="tag in tagOptions" :key="tag" :value="tag.name" :label="tag.name"> </el-option>
        </el-select>
    </el-form-item>
    <div>
        <ul v-if="selectedTags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="(tag, index) in selectedTags" :key="index" class="list-inline-item">
                <button @click="removeTag(index)" :title="tag" variant="info"
                    class="btn btn-danger btn-sm rounded-0">#{{
                        tag }}</button>
            </li>
        </ul>
    </div>
</template>
<script>
import apiClient from "../../utils/apiClient"
export default {
    props: {
        selectedTags: {
            type: Array,
            // required:true,
        }
    },
    data() {
        return {
            tagOptions: [],
        }
    },
    methods: {
        fetchData() {
            apiClient({ url: 'provider/tags', method: 'get' }).then(res => {
                this.tagOptions = res.data.tags;
            }).catch((err) => {
                console.log(err);
            });
        },
        addTag() {
            if (this.selectedTag && !this.selectedTags.includes(this.selectedTag)) {
                this.selectedTags.push(this.selectedTag);
                this.tagId = this.tagOptions.find((data) => {
                    if (data.name == this.selectedTag) {
                        return data.name
                    }

                })
                this.selectedTag = '';
            }
        },
        removeTag(index) {
            this.selectedTags.splice(index, 1);
        },

    },

    mounted() {
        this.fetchData()
    }
}
</script>
