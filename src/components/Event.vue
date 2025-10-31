<script setup lang="ts">
import { filename } from 'pathe/utils';
import {computed} from "vue";

type Event = {
  title: string,
  description: string,
  image: string,
  price: number,
  where: string,
  when: string
}
const props = defineProps<Event>();

const date = computed(() => {
  const d = new Date(props.when)
  return d.toLocaleDateString();
})

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
  <div class="w-full rounded-xl bg-orange-200 border-1 flex p-4 gap-8">
    <img :src="images[removeExtension(props.image) as string]" alt="copertina esperienza" class="rounded-xl w-[40%] h-[524px] object-cover"/>
    <div class="w-[60%] p-4">
      <h5 class="mb-2 font-semibold text-2xl">{{props.title}}</h5>
      <h6>{{props.description}}</h6>
      <div class="flex flex-col gap-4 my-4 border-b-1 border-orange-800 pb-4">
        <div class="flex gap-4 items-center">
          <div class="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">Q</div>
          <div class="text-sm flex flex-col">
            <span class="inline-block">Quando</span>
            <span class="inline-block">{{date}}</span>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <div class="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">D</div>
          <div class="text-sm flex flex-col">
            <span class="inline-block">Dove</span>
            <span class="inline-block">{{props.where}}</span>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <div class="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">C</div>
          <div class="text-sm flex flex-col">
            <span class="inline-block">Contatti</span>
            <span class="inline-block">Biglietteria: 0534 4569023</span>
          </div>
        </div>
      </div>
      <p class="text-sm line-clamp-6">
        In ac ante neque. Sed iaculis posuere mattis. Aenean aliquet sapien ut sem fermentum, luctus volutpat augue rutrum. Nam dapibus sem et nibh scelerisque, at condimentum orci dictum. Nunc vitae vulputate lorem, et varius tellus. Aenean vitae nibh in quam cursus tincidunt. Proin eget quam vitae mauris ullamcorper facilisis. Sed rhoncus ornare enim, et ornare ligula hendrerit at. Ut eget odio nec velit egestas ornare. Proin ut pulvinar erat. Donec interdum leo sed lacus sollicitudin, id ultricies dolor tristique.
        Sed laoreet lacus sed ligula posuere, a pharetra est varius. Nulla facilisis aliquam metus nec rutrum. Ut placerat vel dui eget bibendum. Nulla porta lectus ante. Sed gravida, ante non viverra consequat, risus neque pretium ex, vel varius urna justo sed risus. Curabitur consequat pretium fermentum. Proin sodales urna vel risus hendrerit varius. In sit amet luctus est, sed pharetra augue. Morbi congue volutpat est, eu feugiat enim ultrices non. Cras eleifend ullamcorper nisl, et suscipit dolor maximus non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Vestibulum eu ante diam. Mauris egestas, lectus nec laoreet elementum, magna augue vestibulum massa, id vestibulum massa erat sit amet tellus. Aliquam erat volutpat. Nullam eget congue mi.
      </p>
      <div class="mt-4 w-full text-right pt-12 border-t-1 border-orange-800">
        <a class="rounded-full bg-gray-50 border-1 border-orange-800 text-orange-800 px-4 py-3 text-sm" href="/">Partecipa all'evento ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>