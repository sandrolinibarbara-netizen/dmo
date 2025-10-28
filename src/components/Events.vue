<script setup lang="ts">

import Experience from "./Experience.vue";
import json from '../assets/experiences.json'
</script>

<template>
  <div class="w-[80%] mx-auto my-24 flex flex-col gap-4">
    <h2 class="font-bold text-xl mb-4 px-4">Eventi in evidenza</h2>
    <div class="flex gap-4 justify-end">
      <Experience v-for="exp in json.luthiery" :key="exp.titolo + '_' + Math.random()" :title="exp.titolo" :image="exp.immagine" :price="exp.costo" :description="exp.descrizione" :tags="exp.tags" />
    </div>
    <div class="mt-8 w-full text-right">
      <a class="rounded-full bg-orange-500 px-4 py-2 text-sm" href="/">Vai a tutti gli eventi ></a>
    </div>
  </div>

</template>

<style scoped>

</style>