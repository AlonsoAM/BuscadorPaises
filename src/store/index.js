import { createStore } from 'vuex'

export default createStore({
  state: {
    paises : [],
    filtropaises : []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setFiltroPaises(state, payload){
      state.filtropaises = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const resp = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await resp.json()
        //console.log(data)
        commit('setPaises', data)
      }catch (e) {
        console.log(e)
      }
    },
    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter((pais) => pais.region.includes(region))
      commit('setFiltroPaises', filtro)
    },
    filtroNombre({commit, state}, texto) {
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter(pais => {
        const textoAPI = pais.name.toLowerCase()
        if(textoAPI.includes(textoCliente)){
          return pais
        }
      })
      commit('setFiltroPaises', filtro)
    }
  },
  getters:{
    topPaisesPoblacion(state){
      return state.filtropaises.sort((a, b) => a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
