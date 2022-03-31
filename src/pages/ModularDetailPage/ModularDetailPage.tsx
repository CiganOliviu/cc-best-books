import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularDetailPage } from '../../helpers/types';
import { useParams } from 'react-router-dom';
import { pageContentTypes } from '../../helpers/pageContentTypes';
import SchemasContent from '../../components/SchemasContent/SchemasContent';
import AuthorsDetailPageContent from '../../components/AuthorsContent/AuthorsDetailPageContent';
import NationalitiesContent from '../../components/NationalitiesContent/NationalitiesContent';
import AppLayoutContent from '../../components/AppLayoutContent/AppLayoutContent';
import BooksContent from '../../components/BooksContent/BooksContent';
import CategoriesContent from '../../components/CategoriesContent/CategoriesContent';
import StyleComponentsContent from '../../components/StyleComponentsContent/StyleComponentsContent';
import { isJsonObjectValid } from '../../helpers/generalHelpers';

const ModularPage: React.FC<ModularDetailPage> = ({ useCustomFetch, pageContentType }) => {
    const [modularPageData, setModularPageData] = useState<GeneralBackendType>();
    const { id } = useParams();
    const { apiData, serverError } = useCustomFetch(id);

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
    
    if (isJsonObjectValid(modularPageData!)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };  
    
    const getContentByPageContentType = (data: GeneralBackendType) => {
        return pageContentType === pageContentTypes.Schemas ? <SchemasContent asset={data} /> : 
               pageContentType === pageContentTypes.Authors ? <AuthorsDetailPageContent asset={data}></AuthorsDetailPageContent> :
               pageContentType === pageContentTypes.Nationalities ? <NationalitiesContent asset={data}></NationalitiesContent> :
               pageContentType === pageContentTypes.AppLayout ? <AppLayoutContent asset={data}></AppLayoutContent> :
               pageContentType === pageContentTypes.Books ? <BooksContent asset={data}></BooksContent> :
               pageContentType === pageContentTypes.Categories ? <CategoriesContent asset={data}></CategoriesContent> :
               pageContentType === pageContentTypes.StyleComponents ? <StyleComponentsContent asset={data}></StyleComponentsContent> :
               <></> 
    };

    return getContentByPageContentType(modularPageData!);
}

export default ModularPage;