<template>
  <q-page class="text-center">
    <h2><b>Países</b></h2>
    <Coninente/>
    <Buscador/>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-6 col-xs-12">
        <card-list />
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script>
import CardList from '../components/CardList.vue'
import Coninente from "../components/Coninente";
import Buscador from "../components/Buscador";
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Buscador,
    Coninente,
    CardList
  }
}
</script>
