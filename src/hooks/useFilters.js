import {useState, useEffect} from 'react';

// determine this custom hook for get category and merchants
const useFilters = (filters) => {
    const [filterResults, setFilterResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})


    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const {signal} = controller

        filters({signal})
            .then(data => {
                setFilterResults(data.data)

                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
                if (signal.aborted) return
                setIsError(true)
                setError({message: e.message})
            })

        return () => controller.abort()

    }, [])

    return {isLoading, isError, error, filterResults}
}

export default useFilters;