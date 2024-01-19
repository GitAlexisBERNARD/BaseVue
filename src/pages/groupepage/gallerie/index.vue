<script setup lang="ts">
import imagesjson from '../../../assets/images.json'
import { ref } from 'vue'
const imageAffichee = ref(null)
const imageAlt = ref(null)
</script>
<template>
    <div class="image-gallery">
        <img class="image-item" v-for="image in imagesjson" :src="image.src" :alt="image.alt" :key="image.src" @click="imageAffichee = image.grande, imageAlt = image.alt">
    </div>
    <div class="overlayimage" v-if="imageAffichee != null" @click="imageAffichee = null,imageAlt = null">
        <figure>
            <img :src="imageAffichee" :alt="imageAlt">
        </figure>
    </div>
</template>
<style scoped>
.overlayimage{
    position: fixed;
    top: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem;
    border: #fff 2px solid;
}
.image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
}

.image-item {
    flex: 1 0 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.image-item:hover {
    transform: scale(1.05);
}
</style>