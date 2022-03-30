import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularPageType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const ModularPage: React.FC<ModularPageType> = ({ useCustomFetch }) => {
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

    console.log(modularPageData);

    return (
        <div>

        </div>
    )
}

export default ModularPage;