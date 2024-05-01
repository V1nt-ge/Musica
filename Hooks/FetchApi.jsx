import { useState,useEffect } from "react";

const useFatch = (url) => {
    const [data,setData] = useState([])

    const[loading,setLoading] = useState(true)

    const fetchData =  async () => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        }catch(error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[url])
    return ( data,loading );
}
 
export default useFatch;