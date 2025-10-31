<script setup lang="ts">
import json from '../assets/experiences.json'
import Event from "./Event.vue";
</script>

<template>
  <section class="w-full mt-24 pb-24 border-b-1 border-orange-800">
    <div class="w-[80%] mx-auto flex flex-col gap-4">
      <h2 class="font-bold text-3xl mb-4 px-4">Eventi in evidenza</h2>
      <div class="flex flex-col gap-4">
        <Event :title="json.luthiery[0].titolo" :image="json.luthiery[0].immagine" :price="json.luthiery[0].costo" :description="json.luthiery[0].descrizione" :where="json.luthiery[0].luogo" :when="json.luthiery[0].data"/>
        <Event :title="json.luthiery[1].titolo" :image="json.luthiery[1].immagine" :price="json.luthiery[1].costo" :description="json.luthiery[1].descrizione" :where="json.luthiery[1].luogo" :when="json.luthiery[1].data"/>
      </div>
      <div class="mt-8 w-full text-right">
        <a class="rounded-full bg-gray-50 border-1 border-orange-800 text-orange-800 px-4 py-3 text-sm" href="/">Vai a tutti gli eventi ></a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>