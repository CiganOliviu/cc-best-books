import useCustomFetch from "../hooks/useCustomFetch"
import { requestUrls } from "./requestUrls";

export const useCustomFetchSchemas = () => {
    const {
        error: serverErrorSchemas,
        data: apiDataSchemas,
        isLoading: isLoadingSchemas,
    } = useCustomFetch(requestUrls.fetchSchemas);

    return { isLoadingSchemas, serverErrorSchemas, apiDataSchemas };
};

export const useCustomFetchCategories = () => {
    const {
        error: serverErrorCategories,
        data: apiDataCategories,
        isLoading: isLoadingCategories,
    } = useCustomFetch(requestUrls.fetchCategories);

    return { isLoadingCategories, serverErrorCategories, apiDataCategories };
};

export const useCustomFetchAuthors = () => {
    const {
        error: serverErrorAuthors,
        data: apiDataAuthors,
        isLoading: isLoadingAuthors,
    } = useCustomFetch(requestUrls.fetchAuthors);

    return { isLoadingAuthors, serverErrorAuthors, apiDataAuthors};
};

export const useCustomFetchBooks = () => {
    const {
        error: serverErrorBooks,
        data: apiDataBooks,
        isLoading: isLoadingBooks,
    } = useCustomFetch(requestUrls.fetchBooks);

    return { isLoadingBooks, serverErrorBooks, apiDataBooks };
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