import React, { useEffect, useState } from 'react';
import { useCustomFetchSchemas } from '../../backend/apiCalls';
import { SchemasType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

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
        <div>
            {
                schemas.map((data: SchemasType) => {
                    return (
                        <div key={ data.name }>
                            <a href={ data.route } >{ data.name }</a> 
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Schemas;