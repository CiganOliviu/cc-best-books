export type SchemasType = {
    _id: string;
    name: string;
    route: string;
}

export type AppLayoutType = {
    _id: string;
    layout_title_id: string;
    target_page: string;
    style: string;
}

export type AuthorsType = {
    _id: string;
    profile_picture: string;
    first_name: string;
    last_name: string;
    age: number;
    nationality: string;
    occupation: string;
    website: string;
}