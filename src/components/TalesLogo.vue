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
      }
    case "stones":
      return {
        title: "ancient stones",
        logo: "stones-logo",
      }
    case "luthiery":
      return {
        title: "music & luthiery",
        logo: "luthiery-logo",
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
    <h3 class="text-3xl">TALES OF <br/>
    <span class="font-bold">{{theme.title.toUpperCase()}}</span>
    </h3>
  </div>

</template>

<style scoped>

</style>