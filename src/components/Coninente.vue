<template>
  <p style="font-size: 2rem">Filtrar por continente</p>
  <div class="q-pa-md q-gutter-sm">
    <q-btn push color="blue-grey-8" label="AM" class="shadow-10" @click="filtro('Americas')"/>
    <q-btn push color="blue-grey-8" label="EU" class="shadow-10" @click="filtro('Europe')"/>
    <q-btn push color="blue-grey-8" label="AS" class="shadow-10" @click="filtro('Asia')"/>
    <q-btn push color="blue-grey-8" label="OC" class="shadow-10" @click="filtro('Oceania')"/>
    <q-btn push color="blue-grey-8" label="AF" class="shadow-10" @click="filtro('Africa')"/>
    <q-btn push color="blue-grey-8" label="ALL" class="shadow-10" @click="filtro('')"/>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Coninente",
  setup(){
    const store = useStore()

    const filtro = (region) => {
      store.dispatch("filtrarRegion", region)
    }
    return{filtro}
  }
}
</script>

<style scoped>

</style>
