import { useState, useEffect } from 'react'
import { FetchResponseType } from '../helpers/types';

const useCustomFetch = (url: RequestInfo): FetchResponseType => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const request = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await request.json();

                setApiData(data);
                setIsLoading(false);

            } catch (error: any) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return { apiData, serverError, isLoading };
};


export default useCustomFetch;