<template>
  <div v-for="pais in paises" :key="pais.name">
    <!--{{pais.name}}-->
    <Card :pais="pais"/>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, onMounted} from "vue";
import Card from "./Card";
export default {
  components: {Card},
  setup () {
      const store = useStore()
      const paises = computed(() => store.getters.topPaisesPoblacion)
      onMounted(async ()=>{
        await store.dispatch("getPaises")
        await store.dispatch("filtrarRegion", 'Americas')
      })
      return {
        paises
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
