import React, { useEffect, useState } from 'react';
import { useCustomFetchSchemas } from '../../backend/apiCalls';
import { SchemasType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';
import { SchemasStyle, TableTitle, TitleContainer } from './Schemas.style';

const Schemas: React.FC = () => {
    const [schemas, setSchemas] = useState<SchemasType[]>([]);
    const { apiData, serverError } = useCustomFetchSchemas();

    useEffect(() => {
        if (apiData) {
            setSchemas(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) { 
            throw new Error("Error when fetching schemas from backend!");
        }
    }, [serverError]);

    if (isDataFetchedValid(schemas)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return(
        <SchemasStyle>
            {
                schemas.map((data: SchemasType) => {
                    return (
                        <TitleContainer key={ data.name }>
                            <TableTitle href={ data.route } >{ data.name }</TableTitle> 
                        </TitleContainer>
                    );
                })
            }
        </SchemasStyle>
    )
}

export default Schemas;