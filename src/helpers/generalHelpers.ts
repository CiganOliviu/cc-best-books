import { GeneralBackendType, NationalitiesType } from "./types";

export const isDataFetchedValid = (apiData: GeneralBackendType[]): boolean => {
    if (Object.keys(apiData).length === 0) {
        return true;
    };

    return false;
};


export const getNationality = (nationalities: NationalitiesType[], authorId?: string): string => {

    let result = '';

    nationalities.forEach((nationality: NationalitiesType) => {
        if (nationality._id === authorId![0]) {
            result = nationality.name
        }
    });

    return result;
};