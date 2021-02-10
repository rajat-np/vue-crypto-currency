import axios from 'axios'

import { LIMIT } from "../constants"

const API_URL = `https://api.coinranking.com/v1/public/coins/?limit=${LIMIT}`

export const fetchCryptoCurrenciesAPI = () => {
    return axios.get(API_URL)
}