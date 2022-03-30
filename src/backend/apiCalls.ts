import useCustomFetch from "../hooks/useCustomFetch"
import { requestUrls } from "./requestUrls";

export const useCustomFetchSchemas = () => {
    const {
        error: serverError,
        data: apiData,
        isLoading: isLoading,
    } = useCustomFetch(requestUrls.fetchSchemas);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchCategories = () => {
    const {
        error: serverError,
        data: apiData,
        isLoading: isLoading,
    } = useCustomFetch(requestUrls.fetchCategories);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchAuthors = () => {
    const {
        error: serverError,
        data: apiData,
        isLoading: isLoading,
    } = useCustomFetch(requestUrls.fetchAuthors);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchAuthor = (id: string | undefined) => {
    const {
        error: serverErrorAuthor,
        data: apiDataAuthor,
        isLoading: isLoadingAuthor,
    } = useCustomFetch(`${requestUrls.fetchAuthors}${id}`);

    return { isLoadingAuthor, serverErrorAuthor, apiDataAuthor }; 
};

export const useCustomFetchBooks = () => {
    const {
        error: serverError,
        data: apiData,
        isLoading: isLoading,
    } = useCustomFetch(requestUrls.fetchBooks);

    return { isLoading, serverError, apiData };
};

export const useCustomFetchNationalities = () => {
    const {
        error: serverErrorNationalities,
        data: apiDataNationalities,
        isLoading: isLoadingNationalities,
    } = useCustomFetch(requestUrls.fetchNationalities);

    return { serverErrorNationalities, apiDataNationalities, isLoadingNationalities };
};

export const useCustomFetchStyleComponents = () => {
    const {
        error: serverErrorStyleComponents,
        data: apiDataStyleComponents,
        isLoading: isLoadingStyleComponents,
    } = useCustomFetch(requestUrls.fetchStyleComponents);

    return { serverErrorStyleComponents, apiDataStyleComponents, isLoadingStyleComponents };
};

export const useCustomFetchAppLayout = () => {
    const {
        error: serverErrorAppLayout,
        data: apiDataAppLayout,
        isLoading: isLoadingAppLayout,
    } = useCustomFetch(requestUrls.fetchAppLayout);

    return { serverErrorAppLayout, apiDataAppLayout, isLoadingAppLayout };
};