


import axios from "axios"



const baseURL = "http://localhost:4000/api"

if (window.location.hostname == 'localhost') {
    baseURL = "http://localhost:4000/api"
}
if (window.location.hostname == "page-e.netlify.app") {
    // BASE_URL = "https://page-server-2rmw.onrender.com/api"
    baseURL = "https://kseb-bill-calculator-server-production.up.railway.app/api"
}

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