<script setup lang="ts">

</script>

<template>
  <div class="w-[80%] mx-auto my-24 flex flex-col gap-4">
    <div class="bg-gray-50 rounded-xl w-full p-8 gap-4 items-center">
      <h2 class="font-bold text-xl mb-4">Resta in contatto con noi</h2>
      <h4 class="mb-6">Iscriviti alla newsletter<br/>
      Ricevi consigli, eventi e novità via email</h4>

      <form>
        <fieldset class="flex gap-4 w-[60%]">
          <label class="text-sm flex flex-col w-2/4">Nome
            <input class="bg-gray-200 rounded-lg p-2" type="text"/>
          </label>
          <label class="text-sm flex flex-col w-2/4">Cognome
            <input class="bg-gray-200 rounded-lg p-2" type="text"/>
          </label>
        </fieldset>
        <label class="text-sm flex flex-col w-[60%]">Email
          <input class="bg-gray-200 rounded-lg p-2" type="email"/>
        </label>

        <div class="mt-8 w-full">
          <button type="submit" class="rounded-full bg-orange-500 px-4 py-2 text-sm">Scopri il territorio ></button>
        </div>
      </form>


    </div>

  </div>
</template>

<style scoped>

</style>