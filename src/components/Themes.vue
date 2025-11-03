<script setup lang="ts">

import Theme from "./Theme.vue";
</script>

<template>
  <section class="w-[80%] mx-auto my-24 flex flex-col gap-4">
    <div class="px-4">
      <h2 class="font-bold text-3xl">Le anime del territorio</h2>
      <h4 class="text-xl">Duis eu fringilla arcu</h4>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla arcu. Nulla condimentum quam eget magna mollis, non eleifend leo varius. Praesent eleifend purus nec eros porttitor laoreet. In hac habitasse platea dictumst. Aliquam ultrices justo eu tempor aliquet.</p>
      <ul class="text-sm flex gap-4 mt-12 mb-16">
        <li>
          <RouterLink :to="{hash: '#cycling'}" replace class="bg-violet-300 rounded-full px-4 py-3">Cycling</RouterLink>
        </li>
        <li>
          <RouterLink :to="{hash: '#stones'}" replace class="bg-amber-400 rounded-full px-4 py-3">Ancient Stones</RouterLink>
        </li>
        <li>
          <RouterLink :to="{hash: '#luthiery'}" replace class="bg-sky-300 rounded-full px-4 py-3">Music & Luthiery</RouterLink>
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