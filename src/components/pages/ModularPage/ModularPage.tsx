import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularPageType } from '../../../helpers/types';
import { isDataFetchedValid } from '../../../helpers/generalHelpers';
import { pageContentTypes } from '../../../helpers/pageContentTypes';
import SchemasContent from '../../SchemasContent/SchemasContent';
import AuthorsContent from '../../AuthorsContent/AuthorsContent';
import NationalitiesContent from '../../NationalitiesContent/NationalitiesContent';
import AppLayoutContent from '../../AppLayoutContent/AppLayoutContent';
import BooksContent from '../../BooksContent/BooksContent';
import CategoriesContent from '../../CategoriesContent/CategoriesContent';
import StyleComponentsContent from '../../StyleComponentsContent/StyleComponentsContent';
import { ButtonsContainer, CustomButton, PageContainer } from '../../../App.style';

const ModularPage: React.FC<ModularPageType> = ({ useCustomFetch, pageContentType, requestUrl, isSchemasPage }) => {
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
        <PageContainer>
        {
            modularPageData.map((data: GeneralBackendType) => {
                return getContentByPageContentType(data);
            })
        }
        {
            !isSchemasPage &&
            <ButtonsContainer>
                <CustomButton isAlertButton={ false }>Add new entry</CustomButton>
            </ButtonsContainer>
        }
        </PageContainer>
    )
}

export default ModularPage;
