<script setup lang="ts">
type Line = { icon:string, line: string };
  type Card = {
    title: string,
    price: number,
    description: Line[],
    color: 'blue' | 'orange'
  }
  const props = defineProps<Card>()
</script>

<template>
  <div :class="`w-2/4 border-1 border-gray-200 rounded-xl px-8 py-12 ${color === 'blue' ? 'bg-sky-200 text-sky-950' : 'bg-orange-200 text-orange-500' }`">
    <div class="flex items-center justify-between mb-8">
      <h3 class="text-xl font-bold">{{props.title}}</h3>
      <span class="text-xl font-bold">{{props.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}}</span>
    </div>

      <ul class="h-[155px]">
        <li v-for="row in props.description" :key="row.line" :class="`flex gap-4 text-sm border-t-1 ${color === 'blue' ? 'border-sky-950' : 'border-orange-500' } pl-4 py-2`">
          <span :class="`flex items-center justify-center w-6 h-6 border-1 ${color === 'blue' ? 'border-sky-950 text-sky-950' : 'border-orange-500 text-orange-500' } rounded-lg font-bold text-xs mr-2`">{{row.icon}}</span>
          {{row.line}}
        </li>
      </ul>

      <div class="mt-8 w-full text-right">
        <a class="rounded-full bg-gray-50 border-1 border-orange-800 text-orange-800 px-4 py-3 text-sm" href="/">Acquista ></a>
      </div>
  </div>
</template>

<style scoped>

</style>