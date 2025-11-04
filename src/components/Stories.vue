<script setup lang="ts">
import {ref} from "vue";

// https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/#the-assets-folder-strategy
const glob = import.meta.glob('../assets/images/home/stories/*.webp', { eager: true });
const images = ref(Object.entries(glob).map(([key, value]) => value.default));
const disabled = ref(false);

function slide(step:'prev'|'next') {
  const colImg = document.getElementById('col-img-now');
  const colImgNext = document.getElementById('col-img-next');
  // const firstImg = document.getElementById('first-img');
  // const secondImg = document.getElementById('second-img');
  // const thirdImg = document.getElementById('third-img');
  // const fourthImg = document.getElementById('col-img');
  colImg.classList.add('vola-colomba');
  // firstImg.classList.add('vola-colombo');
  // secondImg.classList.add('vola-colombo');
  // thirdImg.classList.add('vola-colombo');
  // fourthImg.classList.add('vola-colombo');

  disabled.value = true;

  setTimeout(() => {
    colImgNext.classList.add('vola-colombo');
  }, 100);

  setTimeout(() => {
    colImg.classList.add('hidden');
    switch(step) {
      case 'next':
        images.value.unshift(images.value.pop());
        break;
      case 'prev':
        images.value.push(images.value.shift());
        break;
      default:
    }
    // firstImg.classList.remove('vola-colombo');
    // secondImg.classList.remove('vola-colombo');
    // thirdImg.classList.remove('vola-colombo');
    // fourthImg.classList.remove('vola-colombo');
    colImg.classList.remove('vola-colomba');
    colImgNext.classList.remove('vola-colombo');
    disabled.value = false;
  }, 1100)

  setTimeout(() => {
    colImg.classList.remove('hidden');
  }, 1200)

}

</script>

<template>
  <section class="w-[90%] ml-[10%] mt-24 flex">
    <div class="w-[25%] h-auto relative bg-[#fff6ef]">
      <div id="layer" class="rounded-xl w-0 h-full bg-[#fff6ef] relative z-2"/>
      <img id="col-img-now" class="rounded-xl w-full h-full object-cover absolute z-1 top-0" :src="images[0]" alt="monumenti"/>
      <img id="col-img-next" class="rounded-xl w-full h-full object-cover absolute z-0 top-0" :src="images[1]" alt="monumenti"/>
    </div>
    <div class="w-[75%] flex flex-col items-end bg-[#fff6ef] relative z-10">
      <div class="flex">
        <img id="first-img" class="rounded-xl w-[30%] h-[400px] object-cover bg-[#fff6ef] relative z-2 ml-4 mr-1" :src="images[1]" alt="colomba"/>
        <img id="second-img" class="rounded-xl w-[30%] h-[400px] object-cover bg-[#fff6ef] relative z-3 mr-1" :src="images[2]" alt="paese"/>
        <img id="third-img" class="rounded-xl w-[30%] h-[400px] object-cover bg-[#fff6ef] relative z-4 mr-1" :src="images[3]" alt="laboratorio di liuteria"/>
        <img id="fourth-img" class="rounded-l-xl w-[10%] h-[400px] object-cover bg-[#fff6ef] relative z-5" :src="images[4]" alt="famiglia al museo"/>
      </div>
      <div class="w-[95%] pt-12 pb-8 pl-4 pr-[calc(20%+(0.25rem*8))] flex items-center gap-12 bg-[#fff6ef] relative z-10">
        <button type="button" :disabled="disabled" @click="slide('prev')" class="p-3 flex items-center justify-center w-12 h-12 border-1 border-slate-950 rounded-xl font-bold text-2xl">
          P
        </button>
        <div>
          <h2 class="font-bold text-3xl">Le storie del territorio</h2>
          <p class="mt-4">Proin ut nulla aliquet, commodo dolor eu, dictum quam. Phasellus id varius nulla. Proin at lectus gravida urna congue congue vel eget lectus. Maecenas eleifend mi vitae libero sodales varius.
          </p>
          <div class="mt-8 w-full text-right">
            <a class="rounded-full bg-gray-50 px-4 py-3 border-1 border-orange-800 text-orange-800 text-sm" href="/">Scopri le stories ></a>
          </div>
        </div>
        <button type="button" :disabled="disabled" @click="slide('next')" class="p-3 flex items-center justify-center w-12 h-12 border-1 border-slate-950 rounded-xl font-bold text-2xl">
          N
        </button>
      </div>
    </div>
  </section>

</template>

<style scoped>
.vola-colomba {
  animation-duration: 1s;
  animation-name: slide-out;
}

.vola-colombo {
  animation-duration: 1s;
  animation-name: slide-in;
}

@keyframes slide-out {
    from {
      translate: 0 0;
    }

    to {
      translate: -100% 0;
    }
  }

@keyframes slide-in {
  from {
    translate: calc(100% - (0.25rem * 4)) 0;
  }

  to {
    translate: 0 0;
  }
}
</style>