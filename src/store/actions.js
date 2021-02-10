import { fetchCryptoCurrenciesAPI } from '../api'

export const fetchCryptoCurrencies = ({ commit }) => {
  fetchCryptoCurrenciesAPI().then(({ data }) => {
    commit('SET_CRYPTOCURRENCIES', {
      cryptoCurrencies: data.data.coins,
      stats: data.data.stats,
      base: data.data.base,
      loading: false
    })
  })
}