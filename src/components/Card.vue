<template>
  <q-card class="my-card q-mt-lg shadow-10">
    <q-img
        :src="pais.flag"
        class="shadow-5"
    />
    <q-separator color="grey" size="0.2rem" dark class="shadow-5" />
    <q-card-section>
      <div class="text-h4">{{ pais.name }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>CAPITAL</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.capital}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>NOMBRE NATIVO</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.nativeName}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>REGIÓN</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.region}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>SUB-REGIÓN</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.subregion}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>POBLACIÓN</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{numeroFormato(pais.population)}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>GENTILICIO</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.demonym}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>MONEDA</q-item-label>
            <div class="q-pa-md bg-grey-10 text-white">
              <q-list dark bordered separator class="text-center">
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>CÓDIGO</q-item-label>
                    <q-item-label class="text-yellow-5">{{pais.currencies[0].code}}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label overline>NOMBRE</q-item-label>
                    <q-item-label class="text-yellow-5">{{pais.currencies[0].name}}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label overline>SÍMBOLO</q-item-label>
                    <q-item-label class="text-yellow-5">{{pais.currencies[0].symbol}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>IDIOMA</q-item-label>
            <q-item-label class="text-center text-amber-10 text-h6">{{pais.languages[0].name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Card",
  props: ['pais'],
  setup(){
    const numeroFormato = (numero) => {
      return new Intl.NumberFormat("es-PE").format(numero)
    }
    return { numeroFormato }
  }
}
</script>

<style scoped>

</style>
