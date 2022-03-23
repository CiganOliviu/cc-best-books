import useCustomFetch from "../hooks/useCustomFetch"
import { requestUrls } from "./requestUrls";

export const useCustomFetchSchemas = () => {
    const {
        error: serverErrorSchemas,
        data: apiDataSchemas,
        isLoading: isLoadingSchemas,
    } = useCustomFetch(requestUrls.fetchSchemas);

    return { isLoadingSchemas, serverErrorSchemas, apiDataSchemas };
}