export type SchemasType = {
    _id: string;
    name?: string;
    route: string;
};

export type AppLayoutType = {
    _id: string;
    layout_title_id: string;
    target_page: string;
    style: string;
};

export type AuthorsType = {
    _id: string;
    profile_picture: string;
    first_name: string;
    last_name: string;
    age: number;
    nationality: string;
    occupation: string;
    website: string;
};

export type BooksType = {
    _id: string;
    author: string;
    title: string;
    description: string;
    mark: number;
    cover: string;
    current_market_price: number;
    pages: number;
    category: string;
    owned: boolean;
};

export type CategoriesType = {
    _id: string;
    name: string;
};

export type NationalitiesType = {
    _id: string;
    name: string;
};

export type StyleComponentsType = {
    _id: string;
    app_theme: string;
}

export type GeneralBackendType = SchemasType | AppLayoutType | AuthorsType | BooksType | CategoriesType | NationalitiesType | StyleComponentsType;

export type FetchResponseType = {
    apiData: null;
    serverError: null;
    isLoading: boolean;
}

export type ModularPageType = {
    useCustomFetch: (url: string) => FetchResponseType;
    pageContentType: string;
    requestUrl: string;
}

export type ModularDetailPage = {
    useCustomFetch: (id: string | undefined, url: string) => FetchResponseType;
    pageContentType: string;
    requestUrl: string;
}

export type AssetType = {
    asset: GeneralBackendType;
}
