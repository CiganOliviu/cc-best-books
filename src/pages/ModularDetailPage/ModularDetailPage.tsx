import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularDetailPage } from '../../helpers/types';
import { useParams } from 'react-router-dom';
import { pageContentTypes } from '../../helpers/pageContentTypes';
import AuthorsDetailPageContent from '../../components/AuthorsContent/AuthorsDetailPageContent';
import { isJsonObjectValid } from '../../helpers/generalHelpers';
import SchemasDetailPageContent from '../../components/SchemasContent/SchemasDetailPageContent';
import NationalitiesDetailPageContent from '../../components/NationalitiesContent/NationalitiesDetailPageContent';
import AppLayoutDetailPageContent from '../../components/AppLayoutContent/AppLayoutDetailPageContent';
import BooksDetailPageContent from '../../components/BooksContent/BooksDetailPageContent';
import CategoriesDetailPageContent from '../../components/CategoriesContent/CategoriesDetailPageContent';
import StyleComponentsDetailPageContent from '../../components/StyleComponentsContent/StyleComponentsDetailPageContent';

const ModularPage: React.FC<ModularDetailPage> = ({ useCustomFetch, pageContentType , requestUrl}) => {
    const [modularPageData, setModularPageData] = useState<GeneralBackendType>();
    const { id } = useParams();
    const { apiData, serverError } = useCustomFetch(id, requestUrl);

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
    }

    const getContentByPageContentType = (data: GeneralBackendType) => {
        return pageContentType === pageContentTypes.Schemas ? <SchemasDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.Authors ? <AuthorsDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.Nationalities ? <NationalitiesDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.AppLayout ? <AppLayoutDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.Books ? <BooksDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.Categories ? <CategoriesDetailPageContent asset={data} /> :
               pageContentType === pageContentTypes.StyleComponents ? <StyleComponentsDetailPageContent asset={data} /> :
               <></>
    };

    return getContentByPageContentType(modularPageData!);
}

export default ModularPage;
