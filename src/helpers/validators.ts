import { GeneralBackendType } from "./types";

export const isDataFetchedValid = (apiData: GeneralBackendType[]): boolean => {
    if (Object.keys(apiData).length === 0) {
        return true;
    };

    return false;
};