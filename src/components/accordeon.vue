<script setup lang="ts">
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'

const isExpanded = ref(false)
</script>

<template>
    <div class="flex-col">
  <button class="p-3 border-2 rounded-lg border-black" @click="isExpanded = !isExpanded">Button accordeon</button>

  <Collapse :when="isExpanded">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores rem ab?</p>
  </Collapse>
  </div>
</template>