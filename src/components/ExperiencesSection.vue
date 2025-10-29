<script setup lang="ts">
import Experiences from "./Experiences.vue";
import Experience from "./Experience.vue";
import json from '../assets/experiences.json'
</script>

<template>
  <section class="w-[80%] mx-auto my-24 flex flex-col gap-4">
    <Experiences title="Unmissable" color="bg-yellow-100" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt tellus nec augue hendrerit, ut tincidunt velit cursus. In in vestibulum turpis. Nulla a venenatis libero. Donec dictum dui sit amet enim consectetur rhoncus. Sed ultricies quam vel felis consequat, non fringilla justo ornare. Nullam id lobortis risus.">
      <Experience v-for="exp in json.cycling" :key="exp.titolo + '_' + Math.random()" :title="exp.titolo" :image="exp.immagine" :price="exp.costo" :description="exp.descrizione" :tags="exp.tags" />
    </Experiences>
    <Experiences title="Private" color="bg-orange-100" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt tellus nec augue hendrerit, ut tincidunt velit cursus. In in vestibulum turpis. Nulla a venenatis libero. Donec dictum dui sit amet enim consectetur rhoncus. Sed ultricies quam vel felis consequat, non fringilla justo ornare. Nullam id lobortis risus.">
      <Experience v-for="exp in json.stones" :key="exp.titolo + '_' + Math.random()" :title="exp.titolo" :image="exp.immagine" :price="exp.costo" :description="exp.descrizione" :tags="exp.tags" />

    </Experiences>
    <Experiences title="Tailor made" color="bg-rose-100" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt tellus nec augue hendrerit, ut tincidunt velit cursus. In in vestibulum turpis. Nulla a venenatis libero. Donec dictum dui sit amet enim consectetur rhoncus. Sed ultricies quam vel felis consequat, non fringilla justo ornare. Nullam id lobortis risus.">
      <div class="relative w-full">
        <img class="rounded-xl w-full h-[400px] object-cover" src="../assets/images/experiences/tailor/riverboat.webp" alt="crociera"/>
        <span class="bottom-0 absolute bg-gray-50 rounded-tr-xl rounded-bl-xl px-4 py-3 font-semibold">Crociera sul fiume Po</span>
      </div>
    </Experiences>
  </section>
</template>

<style scoped>

</style>