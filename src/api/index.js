import axios from 'axios'

const LIMIT = 100

const API_URL = `https://api.coinranking.com/v1/public/coins/?limit=${LIMIT}`

export const fetchCryptoCurrenciesAPI = () => {
    return axios.get(API_URL)
}