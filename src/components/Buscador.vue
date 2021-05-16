<template>
  <q-input standout bottom-slots v-model="texto" label="Escriba un País" counter maxlength="20" :dense="dense"
           @keyup="procesarInput">
    <template v-slot:before>
      <q-icon name="flight_takeoff" />
    </template>
    <template v-slot:append>
      <q-icon v-if="texto !== ''" name="close" @click="texto = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import {ref} from 'vue'
import {useStore} from "vuex";
export default {
  name: "Buscador",
  setup(){
    const texto = ref('')
    const store = useStore()
    const procesarInput = () => {
      //console.log(texto.value)
      store.dispatch('filtroNombre', texto.value.trim())
    }
    return {
      texto,
      procesarInput
    }
  }
}
</script>

<style scoped>

</style>
