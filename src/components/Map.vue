<script setup lang="ts">
import json from '../assets/experiences.json'
import {VMap, VMapGoogleTileLayer, VMapZoomControl} from 'vue-map-ui';
import type {LatLng, LatLngBounds, LatLngTuple, Marker} from 'leaflet';
import * as L from "leaflet";
import type { ViewChangedEvent } from 'vue-use-leaflet';
import {onMounted, ref, useTemplateRef} from "vue";
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {filename} from "pathe/utils";

// const date = ref();
const map = useTemplateRef('map');
onMounted(() => {
  setTimeout(() => {
    json.cycling.forEach((el:any) => {
      const marker:Marker = new (L.marker as any)(el.coordinate);
      const popup = L.popup({maxWidth:250})
          .setLatLng(el.coordinate)
          .setContent(
              '<div class="w-full rounded-xl relative">' +
              '    <div class="absolute flex gap-2 top-3 left-3 w-full">' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-violet-200 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[0] + '</span>' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-violet-200 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[1] + '</span>' +
              '    </div>' +
              '    <img src="'+ images[removeExtension(el.immagine) as string] +'" alt="copertina esperienza" class="rounded-t-xl w-full h-[148px] object-cover"/>' +
              '    <div class="p-4">' +
              '      <h5 class="mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">'+ el.titolo +'</h5>' +
              '      <p class="text-sm h-[80px] line-clamp-4">' + el.descrizione + '</p>' +
              '      <div class="mt-4 w-full flex justify-between items-center">\n' +
              '        <p>'+ el.costo.toLocaleString("de-DE", { style: "currency", currency: "EUR" }) +'</p>' +
              '        <a class="discover rounded-full bg-gray-200 px-4 py-2 text-sm" href="/">Scopri</a>\n' +
              '      </div>' +
              '    </div>' +
              '  </div>'
          )
      marker.bindPopup(popup);
      marker.addTo((map.value as any).map);
    })
    json.stones.forEach((el:any) => {
      const marker:Marker = new (L.marker as any)(el.coordinate);
      const popup = L.popup({maxWidth:250})
          .setLatLng(el.coordinate)
          .setContent(
              '<div class="w-full rounded-xl relative">' +
              '    <div class="absolute flex gap-2 top-3 left-3 w-full">' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-amber-300 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[0] + '</span>' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-amber-300 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[1] + '</span>' +
              '    </div>' +
              '    <img src="'+ images[removeExtension(el.immagine) as string] +'" alt="copertina esperienza" class="rounded-t-xl w-full h-[148px] object-cover"/>' +
              '    <div class="p-4">' +
              '      <h5 class="mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">'+ el.titolo +'</h5>' +
              '      <p class="text-sm h-[80px] line-clamp-4">' + el.descrizione + '</p>' +
              '      <div class="mt-4 w-full flex justify-between items-center">\n' +
              '        <p>'+ el.costo.toLocaleString("de-DE", { style: "currency", currency: "EUR" }) +'</p>' +
              '        <a class="discover rounded-full bg-gray-200 px-4 py-2 text-sm" href="/">Scopri</a>\n' +
              '      </div>' +
              '    </div>' +
              '  </div>'
          )
      marker.bindPopup(popup);
      marker.addTo((map.value as any).map);
    })
    json.luthiery.forEach((el:any) => {
      const marker:Marker = new (L.marker as any)(el.coordinate);
      const popup = L.popup({maxWidth:250})
          .setLatLng(el.coordinate)
          .setContent(
              '<div class="w-full rounded-xl relative">' +
              '    <div class="absolute flex gap-2 top-3 left-3 w-full">' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-sky-200 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[0] + '</span>' +
              '      <span class="max-w-[42.5%] rounded-full px-2 py-1 text-xs bg-sky-200 whitespace-nowrap overflow-hidden text-ellipsis">' + el.tags[1] + '</span>' +
              '    </div>' +
              '    <img src="'+ images[removeExtension(el.immagine) as string] +'" alt="copertina esperienza" class="rounded-t-xl w-full h-[148px] object-cover"/>' +
              '    <div class="p-4">' +
              '      <h5 class="mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">'+ el.titolo +'</h5>' +
              '      <p class="text-sm h-[80px] line-clamp-4">' + el.descrizione + '</p>' +
              '      <div class="mt-4 w-full flex justify-between items-center">\n' +
              '        <p>'+ el.costo.toLocaleString("de-DE", { style: "currency", currency: "EUR" }) +'</p>' +
              '        <a class="discover rounded-full bg-gray-200 px-4 py-2 text-sm" href="/">Scopri</a>\n' +
              '      </div>' +
              '    </div>' +
              '  </div>'
          )
      marker.bindPopup(popup);
      marker.addTo((map.value as any).map);
    })
  }, 1000)
})
const filtered = ref<string|undefined>(undefined);

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

function setFilteredMarkers(filter:string) {
  if(filtered.value === filter) {
    filtered.value = undefined;
  } else {
    filtered.value = filter;
  }

  (map.value as any).map.closePopup();

  switch(filtered.value) {
    case 'cycling':
      for(let layer of Object.values((map.value as any).map._layers)){
        if(layer._latlng) {
          for(let exp of json.cycling) {
            if(exp.coordinate[0] === layer._latlng.lat && exp.coordinate[1] === layer._latlng.lng) {
              layer.setOpacity(1);
              break;
            } else {
              layer.setOpacity(0);
            }
          }
        }
      }
      break;
    case 'stones':
      for(let layer of Object.values((map.value as any).map._layers)){
        if(layer._latlng) {
          for(let exp of json.stones) {
            if(exp.coordinate[0] === layer._latlng.lat && exp.coordinate[1] === layer._latlng.lng) {
              layer.setOpacity(1);
              break;
            } else {
              layer.setOpacity(0);
            }
          }
        }
      }
      break;
    case 'luthiery':
      for(let layer of Object.values((map.value as any).map._layers)){
        if(layer._latlng) {
          for(let exp of json.luthiery) {
            if(exp.coordinate[0] === layer._latlng.lat && exp.coordinate[1] === layer._latlng.lng) {
              layer.setOpacity(1);
              break;
            } else {
              layer.setOpacity(0);
            }
          }
        }
      }
      break;
    default:
      for(let layer of Object.values((map.value as any).map._layers)){
        if(layer._latlng) {
            layer.setOpacity(1);
          }
        }
  }
}

</script>

<template>
  <section class="w-full mt-24 border-b border-orange-800 pb-24">
    <div class="w-[80%] mx-auto">
      <h2 class="font-bold text-3xl mb-8 px-4">Scopri cosa offre il territorio vicino a te</h2>

  <!--    <div class="flex items-center gap-4 px-4 mb-2">-->
  <!--      <p>Scegli la data:</p>-->
  <!--      <div class="w-[200px]">-->
  <!--        <VueDatePicker v-model="date" :enable-time-picker="false" locale="it" select-text="Seleziona" cancel-text="Chiudi" :action-row="{ showPreview: false }"></VueDatePicker>-->
  <!--      </div>-->
  <!--    </div>-->

      <div class="flex items-center gap-4 px-4 mb-4">
        <ul class="text-sm flex gap-4">
          <li>
            <button type="button" class="flex items-center border border-orange-800 filter-base rounded-full px-4 py-2">
              <span class="flex items-center justify-center w-6 h-6 border-1 border-orange-500 rounded-lg font-bold text-xs text-orange-500 mr-2">F</span>
              Filtri
            </button>
          </li>
          <li>
            <button value="cycling" type="button" :class="`${filtered === 'cycling' ? 'filter-active' : 'filter'} rounded-full px-4 py-2`" @click="(e:any)=>setFilteredMarkers(e.target.value)">Cycling</button>
          </li>
          <li>
            <button value="stones" type="button" :class="`${filtered === 'stones' ? 'filter-active' : 'filter'} rounded-full px-4 py-2`" @click="(e:any)=>setFilteredMarkers(e.target.value)">Ancient Stones</button>
          </li>
          <li>
            <button value="luthiery" type="button" :class="`${filtered === 'luthiery' ? 'filter-active' : 'filter'} rounded-full px-4 py-2`" @click="(e:any)=>setFilteredMarkers(e.target.value)">Music & Luthiery</button>
          </li>
        </ul>
      </div>

      <VMap ref="map" style="height: 600px; border-radius: 8px" :center="center" :zoom="zoom" @view-changed="onViewChanged">
        <VMapGoogleTileLayer />
        <VMapZoomControl />
      </VMap>
    </div>
  </section>
</template>

<style scoped>
/*.dp__theme_light {
  --dp-background-color: #fff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
  --dp-border-radius: 32px;
}*/
</style>