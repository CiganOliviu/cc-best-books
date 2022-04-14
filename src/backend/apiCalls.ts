import useCustomFetch from "../hooks/useCustomFetch"

export const useCustomFetchData = (url: string) => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(url);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchDetailData = (id: string | undefined, url: string) => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(`${url}${id}`);

    return { isLoading, serverError, apiData };
};
