<script setup lang="ts">
import { filename } from 'pathe/utils';

type Experience = {
  title: string,
  description: string,
  image: string,
  price: number,
  tags: string[]
}
const props = defineProps<Experience>();

// https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/#the-assets-folder-strategy
const glob = import.meta.glob('../assets/images/experiences/*.webp', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
function removeExtension(str:string) {
  const arr = str.split('.');
  return arr[0];
}

</script>

<template>
  <div class="w-[20%] rounded-xl bg-gray-50 relative border-1 border-orange-500">
    <div class="absolute flex gap-2 top-1 left-1 w-full">
      <span v-for="tag in props.tags" :key="props.title + '_' + tag" class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-sky-100 whitespace-nowrap overflow-hidden text-ellipsis">
        {{tag}}
      </span>
    </div>
    <img :src="images[removeExtension(props.image) as string]" alt="copertina esperienza" class="rounded-t-xl w-full h-[148px] object-cover"/>
    <div class="p-4">
      <h5 class="mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{{props.title}}</h5>
      <p class="text-sm h-[80px] line-clamp-4">{{props.description}}</p>
      <div class="mt-4 w-full flex justify-between items-center">
        <p>{{props.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}}</p>
        <a class="rounded-full bg-gray-200 px-4 py-2 text-sm" href="/">Scopri</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>