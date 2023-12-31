import {useState, useEffect, useRef} from "react";
import {getProductsPage} from "../api/Axios";
import getQueryParam from "../utility/getqueryparam";

// i use this custom hook for get products when we have filters or merchantids
const usePosts = (pageNum, merchantIds = [], setPageNum, setResults) => {
    const filter = getQueryParam();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);
    const mercahtsRef = useRef([]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({});

        // Check if merchantIds has changed
        if (!areArraysEqual(merchantIds, mercahtsRef.current) || filter !== null) {
            setPageNum(1);
            setHasNextPage(false);
            setResults([]);
            mercahtsRef.current = merchantIds; // Update the reference
        }
        const controller = new AbortController();
        const {signal} = controller;

        getProductsPage(pageNum, 10, merchantIds, filter, {signal})
            .then((data) => {

                if (data.totalItems === 0) {
                    setIsLoading(false);
                    return;
                }

                setResults((prev) => [...prev, ...data.data]);
                const remainingItems = data.totalItems - pageNum * 10;
                remainingItems > 0 ? setHasNextPage(true) : setHasNextPage(false);
            })
            .catch((e) => {
                if (signal.aborted) return;
                setIsError(true);
                setError({message: e.message});
            })
            .finally(() => setIsLoading(false));

        return () => {
            controller.abort();
        };
    }, [pageNum, merchantIds, filter]);

    return {isLoading, error, isError, hasNextPage};
};

// Helper function to compare arrays
function areArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}

export default usePosts;