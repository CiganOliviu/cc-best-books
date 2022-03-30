import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularPageType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';
import SchemasContent from '../../components/SchemasContent/SchemasContent';
import AuthorsContent from '../../components/AuthorsContent/AuthorsContent';
import NationalitiesContent from '../../components/NationalitiesContent/NationalitiesContent';
import AppLayoutContent from '../../components/AppLayoutContent/AppLayoutContent';
import BooksContent from '../../components/BooksContent/BooksContent';
import CategoriesContent from '../../components/CategoriesContent/CategoriesContent';
import StyleComponentsContent from '../../components/StyleComponentsContent/StyleComponentsContent';

const ModularPage: React.FC<ModularPageType> = ({ useCustomFetch, pageContentType }) => {
    const [modularPageData, setModularPageData] = useState<GeneralBackendType[]>([]);
    const { apiData, serverError } = useCustomFetch();
    
    useEffect(() => {
        if (apiData) {
            setModularPageData(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error when fetching data from backend!");
        }
    }, [serverError]);

    if (isDataFetchedValid(modularPageData)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };  

    const result = (data: GeneralBackendType) => {
        return pageContentType === 'Schemas' ? <SchemasContent asset={data} /> : 
               pageContentType === 'Authors' ? <AuthorsContent asset={data}></AuthorsContent> :
               pageContentType === 'Nationalities' ? <NationalitiesContent asset={data}></NationalitiesContent> :
               pageContentType === 'AppLayout' ? <AppLayoutContent asset={data}></AppLayoutContent> :
               pageContentType === 'Books' ? <BooksContent asset={data}></BooksContent> :
               pageContentType === 'Categories' ? <CategoriesContent asset={data}></CategoriesContent> :
               pageContentType === 'StyleComponents' ? <StyleComponentsContent asset={data}></StyleComponentsContent> :
               <></> 
    };

    return (
        <div>
        {
            modularPageData.map((data: GeneralBackendType) => {
                return result(data);
            })
        }
        </div>
    )
}

export default ModularPage;