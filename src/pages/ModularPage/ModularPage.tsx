import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularPageType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';
import SchemasContent from '../../components/SchemasContent/SchemasContent';
import AuthorsContent from '../../components/AuthorsContent/AuthorsContent';

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