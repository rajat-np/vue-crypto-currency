import axios from 'axios'

const API_URL = 'https://api.coinranking.com/v1/public/coins/?limit=10'

export const fetchCryptoCurrenciesAPI = () => {
    return axios.get(API_URL)
}