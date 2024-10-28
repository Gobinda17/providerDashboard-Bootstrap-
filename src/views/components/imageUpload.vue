<template>
    <div class="row g-4">
        <div class="col-12">
            <input type="file" accept="image/*" multiple ref="imageInput" @change="handleFileChange" />
        </div>
        <div class="col-12">
            <h3  v-if="selectedImages.length > 0">Selected Images:</h3>
            <div v-if="selectedImages.length > 0" class="gap-2">
                <div v-for="(image, index) in selectedImages" :key="index" class="position-relative">
                    <img :src="image.preview" alt="Selected Image" class="w-100" />
                    <button class="position-absolute btn btn-sm btn-danger" @click.prevent="removeImage(index)" style="left: 90%; top: -8%;">Remove</button>
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

            // this.selectedImages = [];

            if (files) {
                if (this.selectedImages.length < 5) {
                    for (let i = 0; i < files.length; i++) {
                        const reader = new FileReader();

                        reader.onload = (e) => {
                            this.selectedImages.push({ file: files[i], preview: e.target.result });
                        };

                        reader.readAsDataURL(files[i]);
                    }
                } else {
                    alert("max image 5")
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