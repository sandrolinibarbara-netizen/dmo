<script setup lang="ts">
type Line = { icon:string, line: string };
  type Card = {
    title: string,
    price: number,
    description: Line[]
  }
  const props = defineProps<Card>()
</script>

<template>
  <div class="w-2/4 border-1 rounded-xl p-8">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold">{{props.title}}</h3>
      <span class="text-xl font-bold">{{props.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}}</span>
    </div>

      <ul class="h-[155px]">
        <li v-for="row in props.description" :key="row.line" class="flex gap-4 text-sm border-t-1 pl-4 py-2">
          <span>{{row.icon}}</span>
          {{row.line}}
        </li>
      </ul>

      <div class="mt-8 w-full text-right">
        <a class="rounded-full bg-orange-500 px-4 py-2 text-sm" href="/">Acquista ></a>
      </div>
  </div>
</template>

<style scoped>

</style>