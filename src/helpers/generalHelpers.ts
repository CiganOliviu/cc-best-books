import { AuthorsType, CategoriesType, GeneralBackendType, NationalitiesType } from "./types";

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

export const getCategory = (categories: CategoriesType[], bookId?: string): string => {
    let result = '';

    categories.forEach((category: CategoriesType) => {
        if (category._id === bookId![0]) {
            result = category.name;
        }
    });

    return result;
};

export const getAuthor = (authors: AuthorsType[], bookId?: string): string => {
    let result = '';

    authors.forEach((author: AuthorsType) => {
        if (author._id === bookId![0]) {
            result = author.first_name + ' ' + author.last_name;
        }
    });

    return result;
};
