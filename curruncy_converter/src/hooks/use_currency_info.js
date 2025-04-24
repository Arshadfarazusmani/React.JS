import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setdata]=useState({})
    useEffect(()=>{
        
        fetch(`https://v6.exchangerate-api.com/v6/42e8d698ca60bb22f46c9d9f/latest/${currency}`)
        .then((res)=>res.json)
        .then((res)=>setdata(res[currency]))
    },[currency])
    return data

}

export default useCurrencyInfo;