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
import { pageContentTypes } from '../../helpers/pageContentTypes';

const ModularPage: React.FC<ModularPageType> = ({ useCustomFetch, pageContentType, requestUrl }) => {
    const [modularPageData, setModularPageData] = useState<GeneralBackendType[]>([]);
    const { apiData, serverError } = useCustomFetch(requestUrl);

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
    }

    const getContentByPageContentType = (data: GeneralBackendType) => {
        return pageContentType === pageContentTypes.Schemas ? <SchemasContent asset={data}/> :
               pageContentType === pageContentTypes.Authors ? <AuthorsContent asset={data}/> :
               pageContentType === pageContentTypes.Nationalities ? <NationalitiesContent asset={data}/> :
               pageContentType === pageContentTypes.AppLayout ? <AppLayoutContent asset={data}/> :
               pageContentType === pageContentTypes.Books ? <BooksContent asset={data}/> :
               pageContentType === pageContentTypes.Categories ? <CategoriesContent asset={data}/> :
               pageContentType === pageContentTypes.StyleComponents ? <StyleComponentsContent asset={data}/> :
               <></>
    };

    return (
        <div>
        {
            modularPageData.map((data: GeneralBackendType) => {
                return getContentByPageContentType(data);
            })
        }
        </div>
    )
}

export default ModularPage;
