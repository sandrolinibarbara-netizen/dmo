<script setup lang="ts">

</script>

<template>
  <section class="w-[80%] mx-auto my-24 px-4">
    <h2 class="font-bold text-xl mb-4">Sponsor</h2>
    <div class="flex gap-4">
      <img v-for="n in 2" :key="n + Math.random()" src="../assets/images/home/sponsor/brand1.webp" alt="azienda logo" class="h-24 rounded-xl"/>
    </div>
    <h2 class="font-bold text-xl mt-8 mb-4">Partner</h2>
    <div class="flex gap-4">
      <img v-for="n in 6" :key="n + Math.random()" src="../assets/images/home/sponsor/brand2.webp" alt="azienda logo" class="h-24 rounded-xl"/>
    </div>
    <div class="mt-8">
      <a class="rounded-full bg-orange-500 px-4 py-2 text-sm" href="/">Diventa partner ></a>
    </div>
  </section>
</template>

<style scoped>

</style>