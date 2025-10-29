<script setup lang="ts">
import {computed} from "vue";
import json from '../assets/experiences.json'
import TalesLogo from "./TalesLogo.vue";
import Experience from "./Experience.vue";

type Theme = {
  type: "cycling" | "stones" | "luthiery"
}
const props = defineProps<Theme>();
const theme = computed(() => {
  switch(props.type) {
    case "cycling":
      return {
        json: json.cycling,
      }
    case "stones":
      return {
        json: json.stones,
      }
    case "luthiery":
      return {
        json: json.luthiery,
      }
  }
})
</script>

<template>
  <TalesLogo :type="props.type" />
  <div class="flex gap-4">
    <Experience v-for="exp in theme.json" :key="exp.titolo + '_' + Math.random()" :title="exp.titolo" :image="exp.immagine" :price="exp.costo" :description="exp.descrizione" :tags="exp.tags" />

  </div>
</template>

<style scoped>

</style>