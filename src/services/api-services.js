


import axios from "axios"



const baseURL = "http://localhost:4000/api"

const getTariff = async()=>{
    return await axios.get(baseURL + '/tarif')
}

const calculateBill = async(units)=>{
    return await axios.post(baseURL + '/calculate',{units:units})
}


export const API_SERVICES = {
    getTariff,
    calculateBill,
}