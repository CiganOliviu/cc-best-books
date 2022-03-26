import React, { useEffect, useState } from 'react';
import { useCustomFetchSchemas } from '../../backend/apiCalls';
import { SchemasType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';
import { SchemasStyle, TableTitle, TitleContainer } from './Schemas.style';

const Schemas = () => {
    const [schemas, setSchemas] = useState<SchemasType[]>([]);
    const { apiDataSchemas, serverErrorSchemas } = useCustomFetchSchemas();

    useEffect(() => {
        if (apiDataSchemas) {
            setSchemas(apiDataSchemas);
        }
    }, [apiDataSchemas]);

    useEffect(() => {
        if (serverErrorSchemas) { 
            throw new Error("Error when fetching schemas from backend!");
        }
    }, [serverErrorSchemas]);

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