<script setup lang="ts">
import {computed, ref} from "vue";
import json from '../assets/experiences.json'
import TalesLogo from "./TalesLogo.vue";
import Experience from "./Experience.vue";
import {VMap, VMapMarker, VMapOsmTileLayer, VMapZoomControl} from 'vue-map-ui';
import {type LatLng, type LatLngBounds, type LatLngTuple, Marker} from 'leaflet';
import type { ViewChangedEvent } from 'vue-use-leaflet';
import * as L from "leaflet";
import {filename} from "pathe/utils";

type Theme = {
  type: "cycling" | "stones" | "luthiery"
}
const props = defineProps<Theme>();
const theme = computed(() => {
  switch(props.type) {
    case "cycling":
      return {
        title: "cycling",
        json: json.cycling,
        color: 'bg-sky-100'
      }
    case "stones":
      return {
        title: "ancient stones",
        json: json.stones,
        color: 'bg-red-100'
      }
    case "luthiery":
      return {
        title: "music & luthiery",
        json: json.luthiery,
        color: 'bg-stone-100'
      }
  }
})

const center = ref<LatLngTuple | LatLng>([45.136887, 10.028458]);
const zoom = ref(9);
// https://github.com/Microsoft/TypeScript/issues/29773
const bounds = ref<LatLngBounds | null>([[45.11750909007312, 9.973697662353517], [45.15625871494646, 10.083217620849611]] as unknown as LatLngBounds);

function onViewChanged(e: ViewChangedEvent) {
  center.value = e.center;
  zoom.value = e.zoom;
  bounds.value = e.bounds;
}

// https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/#the-assets-folder-strategy
const glob = import.meta.glob('../assets/images/experiences/*.webp', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
function removeExtension(str:string) {
  const arr = str.split('.');
  return arr[0];
}

function log(marker:Marker, json:any) {
  const popup = L.popup({maxWidth:250})
      .setLatLng(json.coordinate)
      .setContent(
          '<div class="w-full rounded-xl relative">' +
          '    <div class="absolute flex gap-2 top-3 left-3 w-full">' +
          '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs '+ theme.value.color +' whitespace-nowrap overflow-hidden text-ellipsis">' + json.tags[0] + '</span>' +
          '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs '+ theme.value.color +' whitespace-nowrap overflow-hidden text-ellipsis">' + json.tags[1] + '</span>' +
          '    </div>' +
          '    <img src="'+ images[removeExtension(json.immagine) as string] +'" alt="copertina esperienza" class="rounded-t-xl w-full h-[148px] object-cover"/>' +
          '    <div class="p-4">' +
          '      <h5 class="mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">'+ json.titolo +'</h5>' +
          '      <p class="text-sm h-[80px] line-clamp-4">' + json.descrizione + '</p>' +
          '      <div class="mt-4 w-full flex justify-between items-center">\n' +
          '        <p>'+ json.costo.toLocaleString("de-DE", { style: "currency", currency: "EUR" }) +'</p>' +
          '        <a class="rounded-full bg-gray-200 px-4 py-2 text-sm" href="/">Scopri</a>\n' +
          '      </div>' +
          '    </div>' +
          '  </div>'
      )
  marker.bindPopup(popup).openPopup();
}

</script>

<template>
  <TalesLogo :type="props.type" class="mb-8"/>
  <div class="flex gap-4 mb-16">
    <div class="flex flex-col gap-4 w-[20%]">
      <Experience width="full" :title="theme.json[0].titolo" :image="theme.json[0].immagine" :price="theme.json[0].costo" :description="theme.json[0].descrizione" :tags="theme.json[0].tags" />
      <Experience width="full" :title="theme.json[1].titolo" :image="theme.json[1].immagine" :price="theme.json[1].costo" :description="theme.json[1].descrizione" :tags="theme.json[1].tags" />
    </div>

    <div class="flex flex-col gap-4 w-[80%]">
      <div :class="`${theme.color} rounded-xl w-full p-8 text-sm`">
        Praesent vitae sollicitudin justo. Etiam auctor tortor et dui dictum, sed ultrices dolor dignissim. Sed vitae dui id nunc tincidunt lobortis. Morbi aliquet lectus eu ipsum mattis, non pharetra odio consectetur. Phasellus rutrum, ex sed venenatis euismod, est tortor facilisis libero, sit amet sagittis orci justo in massa. Sed dapibus dolor lorem, eu pulvinar eros accumsan ut. Cras fringilla ligula augue, a venenatis purus posuere id.
      </div>

      <VMap style="height: 100%; width:100%; border-radius: 8px" :center="center" :zoom="zoom" @view-changed="onViewChanged">
        <VMapMarker v-for="place in theme.json" :key="place.coordinate[0] + '_' + place.coordinate[1]" :latlng="place.coordinate as LatLngTuple" @click="(e) => log(e.target, place)"/>
        <VMapOsmTileLayer />
        <VMapZoomControl />
      </VMap>
      <div class="w-full text-right">
        <a href="/" class="rounded-full bg-gray-200 px-4 py-2 text-sm mr-4">Scarica i materiali</a>
        <RouterLink to="/discover" class="rounded-full bg-orange-500 px-4 py-2 text-sm">Vedi tutti i contenuti di <span class="capitalize">{{theme.title}}</span> ></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>