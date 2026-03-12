import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading("loading...")
        setError(null)
        setData(null)

        fetchDataFromApi(url).then(res => {
            setLoading(false)
            setData(res)
        }).catch((error) => {
            setLoading(false)
            setError("KUCH TO GADBAD HAI DAYAA !!!!")
        })

    }, [url])

    return { data, loading, error }
};

export default useFetch;
