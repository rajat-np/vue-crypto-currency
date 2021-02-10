export const SET_CRYPTOCURRENCIES = (state, { cryptoCurrencies, base, stats, loading }) => {
  state.cryptoCurrencies = cryptoCurrencies
  state.base = base
  state.stats = stats
  state.loading = loading
}