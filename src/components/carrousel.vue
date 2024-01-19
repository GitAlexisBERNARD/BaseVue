<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
const carrousel = ref<HTMLDivElement | null>(null)
let hrefCourant = ref("#ecran-1")
console.log(hrefCourant)
const updateHrefCourant = () => {
  const currentElement = [...carrousel.value!.children].find(
    (e) => e.getBoundingClientRect().x >= carrousel.value!.getBoundingClientRect().x
  )
    hrefCourant.value = `#${currentElement?.id}`
    console.log(hrefCourant.value)
}
const debouncedHref = useDebounceFn(updateHrefCourant, 100,{ maxWait: 500 })

</script>
<template>
    <section class="carrousel_layout" >
        <div class="carrousel_images" ref="carrousel" @scroll.passive="debouncedHref()">
            <img id="ecran-1" src="/img/1.jpg" alt="1" />
            <img id="ecran-2" src="/img/2.jpg" alt="2" />
            <img id="ecran-3" src="/img/3.jpg" alt="3" />
            <img id="ecran-4" src="/img/4.jpg" alt="4" />
            <img id="ecran-5" src="/img/5.jpg" alt="5" />
        </div>
        <div class="carrousel_btn">
            <button @click="carrousel && (carrousel.scrollLeft -= carrousel.clientWidth)">Prev</button>
            <button  @click="carrousel && (carrousel.scrollLeft += carrousel.clientWidth)">Next</button>
        </div>
        <ul>
            <li><a href="#ecran-1" :class="{actif:hrefCourant === '#ecran-1'}">ecran 1</a></li>
            <li><a href="#ecran-2" :class="{actif:hrefCourant === '#ecran-2'}">ecran 2</a></li>
            <li><a href="#ecran-3" :class="{actif:hrefCourant === '#ecran-3'}">ecran 3</a></li>
            <li><a href="#ecran-4" :class="{actif:hrefCourant === '#ecran-4'}">ecran 4</a></li>
            <li><a href="#ecran-5" :class="{actif:hrefCourant === '#ecran-5'}">ecran 5</a></li>
        </ul>
    </section>
</template>

<style>
.actif {
    background-color: red;
}
.carrousel_layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
}
.carrousel_images {
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
    width: 500px;
    height: 500px;
    scroll-behavior: smooth;
}
.carrousel_images::-webkit-scrollbar {
        display: none  ;
}
.carrousel_images img {
    aspect-ratio: 1/1;
    width: 500px;
    height: 500px;
    object-fit: cover;
}
.carrousel_btn {
    display: flex;
    justify-content: center;
    gap: 20vw;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>

