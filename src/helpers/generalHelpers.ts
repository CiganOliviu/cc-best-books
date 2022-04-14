import { GeneralBackendType, NationalitiesType } from "./types";

export const isDataFetchedValid = (apiData: GeneralBackendType[]): boolean => {
    return Object.keys(apiData).length === 0;
};

export const isJsonObjectValid = (apiData: GeneralBackendType): boolean => {
    return apiData === null || apiData === undefined;
}

export const getNationality = (nationalities: NationalitiesType[], authorId?: string): string => {

    let result = '';

    nationalities.forEach((nationality: NationalitiesType) => {
        if (nationality._id === authorId![0]) {
            result = nationality.name
        }
    });

    return result;
};
