<script setup lang="ts">

import Theme from "./Theme.vue";
</script>

<template>
  <section class="w-[80%] mx-auto my-24 flex flex-col gap-4">
    <div class="px-4">
      <h2 class="font-bold text-xl">Tematismi</h2>
      <h4 class="text-lg">Le anime del territorio</h4>
      <ul class="text-sm flex gap-4 mt-4 mb-8">
        <li>
          <button type="button" class="border border-gray-300 filter rounded-full px-4 py-2">Tales of Cycling</button>
        </li>
        <li>
          <button type="button" class="border border-gray-300 filter rounded-full px-4 py-2">Tales of Stones</button>
        </li>
        <li>
          <button type="button" class="border border-gray-300 filter rounded-full px-4 py-2">Tales of Luthiery</button>
        </li>
      </ul>

      <Theme type="cycling"/>
      <Theme type="stones"/>
      <Theme type="luthiery"/>
    </div>


  </section>
</template>

<style scoped>

</style>