import useCustomFetch from "../hooks/useCustomFetch"
import { requestUrls } from "./requestUrls";

export const useCustomFetchSchemas = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchSchemas);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchCategories = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchCategories);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchCategory = (id: string | undefined) => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchCategories}${id}`);

    return { isLoading, serverError, apiData };
}; 

export const useCustomFetchAuthors = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchAuthors);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchAuthor = (id: string | undefined) => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchAuthors}${id}`);

    return { isLoading, serverError, apiData }; 
};

export const useCustomFetchBooks = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchBooks);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchBook = (id: string | undefined) => {
    const {
        serverError, 
        apiData, 
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchBooks}${id}`);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchNationalities = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchNationalities);

    return { serverError, apiData, isLoading };
};

export const useCustomFetchNationality = (id: string | undefined) => {
    const {
        serverError,
        apiData, 
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchNationalities}${id}`);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchStyleComponents = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchStyleComponents);

    return { serverError, apiData, isLoading };
};

export const useCustomFetchStyleComponent = (id: string | undefined) => {
    const {
        serverError, 
        apiData,
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchCategories}${id}`);

    return { serverError, apiData, isLoading };
}

export const useCustomFetchAppLayout = () => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(requestUrls.fetchAppLayout);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchAppLayoutElement = (id: string | undefined ) => {
    const {
        serverError,
        apiData,
        isLoading,
    } = useCustomFetch(`${requestUrls.fetchAppLayout}${id}`);

    return { isLoading, serverError, apiData };
}