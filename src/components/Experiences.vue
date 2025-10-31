<script setup lang="ts">
  type Experiences = {
    title: string,
    description: string,
    color: string
  }

  const props = defineProps<Experiences>();
</script>

<template>
    <div :class="`${color} w-full pb-18`">
      <div class="w-[80%] mx-auto p-8">
        <div class="flex justify-between pt-16 pb-24 text-gray-50">
         <h2 class="font-bold text-3xl">Esperienze <br/>
          {{props.title}}</h2>
          <p class="w-[60%] text-sm">{{props.description}}</p>
        </div>
        <div class="flex gap-4 justify-end">
          <slot/>
        </div>
        <div class="mt-8 w-full text-right">
          <a class="inline-block w-64 text-center rounded-full border-1 border-orange-800 text-orange-800 bg-gray-50 px-4 py-3 text-sm" href="/">Scopri di più ></a>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>