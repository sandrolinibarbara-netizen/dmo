<script setup lang="ts">
import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';
import type { LatLng, LatLngBounds, LatLngTuple } from 'leaflet';
import type { ViewChangedEvent } from 'vue-use-leaflet';
import {ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

const center = ref<LatLngTuple | LatLng>([45.136887, 10.028458]);
const zoom = ref(14);
// https://github.com/Microsoft/TypeScript/issues/29773
const bounds = ref<LatLngBounds | null>([[45.11750909007312, 9.973697662353517], [45.15625871494646, 10.083217620849611]] as unknown as LatLngBounds);

function onViewChanged(e: ViewChangedEvent) {
  center.value = e.center;
  zoom.value = e.zoom;
  bounds.value = e.bounds;
}

</script>

<template>
  <div class="w-[80%] mx-auto my-12">
    <h2 class="font-bold text-xl mb-4 px-4">Scopri cosa offre il territorio vicino a te</h2>

    <div class="flex items-center gap-4 px-4 mb-2">
      <p>Scegli la data:</p>
      <div class="w-[200px]">
        <VueDatePicker v-model="date" :enable-time-picker="false" locale="it" select-text="Seleziona" cancel-text="Chiudi" :action-row="{ showPreview: false }"></VueDatePicker>
      </div>
    </div>

    <div class="flex items-center gap-4 px-4 mb-4">
      <p>Filtri:</p>
      <ul class="text-sm flex gap-4">
        <li>
          <button type="button" class="border rounded-full px-4 py-2">Tales of Cycling</button>
        </li>
        <li>
          <button type="button" class="border rounded-full px-4 py-2">Tales of Stones</button>
        </li>
        <li>
          <button type="button" class="border rounded-full px-4 py-2">Tales of Luthery</button>
        </li>
      </ul>
    </div>

    <VMap style="height: 600px; border-radius: 8px" :center="center" :zoom="zoom" @view-changed="onViewChanged">
      <VMapOsmTileLayer />
      <VMapZoomControl />
    </VMap>

  </div>
</template>

<style scoped>

.dp__theme_light {
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
}
</style>