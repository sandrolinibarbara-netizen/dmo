<script setup lang="ts">
  type Experiences = {
    title: string,
    description: string,
    color: string
  }

  const props = defineProps<Experiences>();
</script>

<template>
    <div :class="`${color} rounded-xl w-full p-8`">
      <h2 class="font-bold text-xl w-full">Esperienze <br/>
        {{props.title}}</h2>
      <div class="w-full flex justify-end mb-8">
        <p class="w-[60%] text-sm">{{props.description}}</p>
      </div>
      <div class="flex gap-4 justify-end">
        <slot/>
      </div>
      <div class="mt-8 w-full text-right">
        <a class="rounded-full bg-orange-500 px-4 py-2 text-sm" href="/">Scopri di più ></a>
      </div>
    </div>
</template>

<style scoped>

</style>