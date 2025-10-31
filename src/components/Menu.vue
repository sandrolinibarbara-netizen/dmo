<script setup lang="ts">

</script>

<template>
  <header class="bg-sky-950 w-full">
    <div class="flex items-center justify-between w-[80%] mx-auto">
      <RouterLink to="/">
        <img src="../assets/logo_dmo.svg" alt="logo tales of harmony"/>
      </RouterLink>
      <div class="flex gap-8 items-center">
        <input class="border-1 border-orange-800 text-orange-500 rounded-full p-2 w-[25vw]" placeholder="Cerca esperienze..." />
        <div class="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-xs text-orange-500">C</div>
        <div class="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-xs text-orange-500">M</div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>