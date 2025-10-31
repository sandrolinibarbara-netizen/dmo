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
  <section class="w-full mt-16 border-b border-orange-800 pb-24">
    <div class="w-[80%] mx-auto">
      <div class="flex w-full flex items-center">
        <div class="px-4 pb-2">
          <h2 class="font-bold text-3xl">Cards of Harmony</h2>
          <h4 class="text-xl">Usufruisci di tanti vantaggi e sconti</h4>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla arcu. Nulla condimentum quam eget magna mollis, non eleifend leo varius. Praesent eleifend purus nec eros porttitor laoreet. In hac habitasse platea dictumst.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla arcu. Nulla condimentum quam eget magna mollis, non eleifend leo varius.
          </p>
        </div>
        <img class="w-[60%] rounded-xl" src="../assets/images/home/cards.webp" alt="cards of harmony"/>
      </div>

      <div class="flex gap-4">
        <Card title="Welcome" :price="12" :description="linesWelcome" color="blue"/>
        <Card title="Unica" :price="35" :description="linesUnica" color="orange"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>