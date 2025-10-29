<script setup lang="ts">
import Card from "./Card.vue";

const linesWelcome = [
    {icon: "X", line: 'Partecipare al Visit Cremona official tour a partenza quotidiana e garantita'},
    {icon: "X", line: 'Numerosi sconti e assaggio di benvenuto nei punti convenzionati'}
]

const linesUnica = [
  {icon: "X", line: 'Partecipare al Visit Cremona official tour a partenza quotidiana e garantita'},
  {icon: "X", line: 'Numerosi sconti e assaggio di benvenuto nei punti convenzionati'},
  {icon: "X", line: 'Accesso ai 6 principali musei del Cremonese'}
]
</script>

<template>
  <section class="w-[80%] mx-auto my-24">

    <div class="flex gap-12 w-full flex items-center">
      <div class="px-4 pb-2">
        <h2 class="font-bold text-xl">Cards of Harmony</h2>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla arcu. Nulla condimentum quam eget magna mollis, non eleifend leo varius. Praesent eleifend purus nec eros porttitor laoreet. In hac habitasse platea dictumst. </p>
      </div>
      <img class="w-[45%] rounded-xl" src="../assets/images/home/cards.webp" alt="cards of harmony"/>
    </div>

    <div class="flex gap-4">
      <Card title="Welcome" :price="12" :description="linesWelcome"/>
      <Card title="Unica" :price="35" :description="linesUnica"/>
    </div>

  </section>
</template>

<style scoped>

</style>