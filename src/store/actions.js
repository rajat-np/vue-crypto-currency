import { fetchCryptoCurrenciesAPI } from '../api'

export const fetchCryptoCurrencies = ({ commit }) => {
  fetchCryptoCurrenciesAPI().then(({ data }) => {
    commit('SET_CRYPTOCURRENCIES', {
      cryptoCurrencies: data.data.coins,
      loading: false
    })
  })
}