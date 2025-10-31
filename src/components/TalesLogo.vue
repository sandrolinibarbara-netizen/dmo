<script setup lang="ts">
import {computed} from "vue";
import { filename } from 'pathe/utils';

type Theme = {
  type: "cycling" | "stones" | "luthiery"
}
const props = defineProps<Theme>();

const theme = computed(() => {
  switch(props.type) {
    case "cycling":
      return {
        title: "cycling",
        logo: "cycling-logo",
        color: "text-violet-300"
      }
    case "stones":
      return {
        title: "ancient stones",
        logo: "stones-logo",
        color: "text-amber-400"
      }
    case "luthiery":
      return {
        title: "music & luthiery",
        logo: "luthiery-logo",
        color: "text-sky-300"
      }
  }
})

// https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/#the-assets-folder-strategy
const glob = import.meta.glob('../assets/icons/*.svg', { eager: true })
const logos = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

</script>

<template>
  <div class="flex items-center gap-4">
    <img :src="logos[theme.logo]" alt="logo tema" class=""/>
    <div class="flex flex-col gap-5">
      <h3 class="text-3xl">TALES OF <br/>
      <span :class="`font-bold ${theme.color}`">{{theme.title.toUpperCase()}}</span>
      </h3>
      <h4>VISIT <span class="font-semibold">CREMONA</span></h4>
    </div>
  </div>

</template>

<style scoped>

</style>