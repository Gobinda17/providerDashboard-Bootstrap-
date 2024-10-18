<template>
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
            <label for="images" class="block text-sm font-medium leading-6 text-gray-900">
                Images
            </label>
            <el-input type="file" @change="handleFileChange"></el-input>
            <div class="flex items-center gap-6">
                <div v-if="selectedImages.length > 0">
                    <h3>Selected Images:</h3>
                    <div v-for="(image, index) in selectedImages" :key="index" class="image-preview">
                        <img :src="image.preview" alt="Selected Image" />
                        <button class="btn btn-sm btn-primary w-100"
                            @click.prevent="removeImage(index)">Remove</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    props: {
        selectedImages: {
            type: Array,
            // required:true,
        }
    },

    methods: {
        handleFileChange() {
            const input = this.$refs.imageInput;
            const files = input.files;

            // Maximum resolution allowed
            const maxWidth = 1920; // Maximum width allowed
            const maxHeight = 1080; // Maximum height allowed

            if (files) {
                if ((files.length + this.selectedImages.length) <= 5) {
                    if (this.selectedImages.length < 5) {
                        for (let i = 0; i < files.length; i++) {
                            const reader = new FileReader();
                            const image = new Image();

                            reader.onload = (e) => {
                                image.onload = () => {
                                    // Check if the image resolution exceeds the maximum allowed resolution
                                    if (image.width > maxWidth || image.height > maxHeight) {
                                        alert(`Image ${files[i].name} resolution exceeds the maximum allowed resolution`);
                                    } else {
                                        this.selectedImages.push({ file: files[i], preview: e.target.result });
                                    }
                                };
                                image.src = e.target.result; // Set the image source to the data URL
                            };

                            reader.readAsDataURL(files[i]); // Read the file as a data URL
                        }
                    } else {
                        alert("Selected number of images should be less than 5");
                    }
                } else {
                    alert("Selected number of images should be less than 5");
                }
            }
        },
        removeImage(index) {
            this.selectedImages.splice(index, 1);
        },


    },

    mounted() {
    }
}
</script>
<style>
.image-preview {
    display: inline-block;
    margin-right: 10px;
}

.image-preview img {
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 5px;
}
</style>