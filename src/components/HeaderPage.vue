<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
    <header id="header">
        <div>
            <div>
                <div>
                    <button @click="toggleMenu" class="p-3 border-2 rounded-lg border-black">Ouvrir Menu</button>
                </div>
                <div v-if="isMenuOpen" v-scroll-lock="isMenuOpen">
                    <ul class="flex-row-reverse gap-3 p-3">
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/groupepage">Groupe Page</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/slide">Slide</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/groupepage/test">accordeon</RouterLink>
                        </li>
                                                <li>
                            <RouterLink to="/groupepage/gallerie">gallerie</RouterLink>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</header>
</template>