<script setup lang="ts">

</script>

<template>
  <section class="w-full py-24 bg-sky-950 flex flex-col gap-4">
    <div class="w-[80%] mx-auto p-8 gap-4 text-gray-50">
      <h2 class="font-bold text-3xl mb-4">Resta in contatto con noi</h2>
      <h4 class="mb-6">Iscriviti alla newsletter<br/>
      Ricevi consigli, eventi e novità via email</h4>

      <form>
        <fieldset class="flex gap-4 w-[60%] mb-4">
          <label class="text-sm flex flex-col w-2/4">
            <input class="bg-gray-200 rounded-lg p-2" type="text" placeholder="Nome"/>
          </label>
          <label class="text-sm flex flex-col w-2/4">
            <input class="bg-gray-200 rounded-lg p-2" type="text" placeholder="Cognome"/>
          </label>
        </fieldset>
        <label class="text-sm flex flex-col w-[60%]">
          <input class="bg-gray-200 rounded-lg p-2" type="email" placeholder="Email"/>
        </label>
        <label class="text-sm flex items-center gap-2 w-[60%] mt-8">
          <input class="bg-gray-200 rounded-lg p-2" type="checkbox"/>
          Iscrivimi alla newsletter (ti verrà inviata una mail con un link di conferma)
        </label>

        <div class="mt-8 w-full">
          <button type="submit" class="form border-1 border-orange-800 rounded-full w-64 text-center px-4 py-3 text-sm">Scopri il territorio ></button>
        </div>
      </form>


    </div>

  </section>
</template>

<style scoped>

</style>