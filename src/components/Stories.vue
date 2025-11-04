<script setup lang="ts">
import {ref} from "vue";

// https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/#the-assets-folder-strategy
const glob = import.meta.glob('../assets/images/home/stories/*.webp', { eager: true });
const images = ref(Object.entries(glob).map(([key, value]) => value.default));
const disabled = ref(false);

function slide(step:'prev'|'next') {
  disabled.value = true;
  switch(step) {
    case 'prev':
      images.value.unshift(images.value.pop());
      break;
    case 'next':
      images.value.push(images.value.shift());
      break;
    default:
  }
  disabled.value = false;
}

</script>

<template>
  <section class="w-[90%] ml-[10%] mt-24 flex gap-4">
    <div class="w-[25%] h-auto">
      <img id="col-img-now" class="rounded-xl w-full h-full object-cover" :src="images[0]" alt="monumenti"/>
    </div>
    <div class="w-[75%] flex flex-col items-end bg-[#fff6ef] relative z-10">
      <div class="flex gap-0.5">
        <img id="first-img" class="rounded-xl w-[30%] h-[400px] object-cover" :src="images[1]" alt="colomba"/>
        <img id="second-img" class="rounded-xl w-[30%] h-[400px] object-cover" :src="images[2]" alt="paese"/>
        <img id="third-img" class="rounded-xl w-[30%] h-[400px] object-cover" :src="images[3]" alt="laboratorio di liuteria"/>
        <img id="fourth-img" class="rounded-l-xl w-[10%] h-[400px] object-cover" :src="images[4]" alt="famiglia al museo"/>
      </div>
      <div class="w-[95%] pt-12 pb-8 pl-4 pr-[calc(20%+(0.25rem*8))] flex items-center gap-12 bg-[#fff6ef] relative z-10">
        <button type="button" :disabled="disabled" @click="slide('prev')" class="p-3 flex items-center justify-center w-12 h-12 border-1 border-orange-800 text-orange-800 rounded-xl font-bold text-2xl">
          P
        </button>
        <div>
          <h2 class="font-bold text-3xl">Le storie del territorio</h2>
          <p class="mt-4">Proin ut nulla aliquet, commodo dolor eu, dictum quam. Phasellus id varius nulla. Proin at lectus gravida urna congue congue vel eget lectus. Maecenas eleifend mi vitae libero sodales varius.
          </p>
          <div class="mt-8 w-full text-right">
            <a class="rounded-full bg-gray-50 px-4 py-3 border-1 border-orange-800 text-orange-800 text-sm" href="/">Scopri le stories ></a>
          </div>
        </div>
        <button type="button" :disabled="disabled" @click="slide('next')" class="p-3 flex items-center justify-center w-12 h-12 border-1 border-orange-800 text-orange-800 rounded-xl font-bold text-2xl">
          N
        </button>
      </div>
    </div>
  </section>

</template>

<style scoped>
</style>