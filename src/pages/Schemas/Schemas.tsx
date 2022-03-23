import React, { useEffect, useState } from 'react';
import { useCustomFetchSchemas } from '../../backend/apiCalls';
import { SchemasType } from '../../helpers/types';

const Schemas = () => {

    const [schemas, setSchemas] = useState([]);
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

    return(
        <div>
            {
                schemas.map((data: SchemasType) => {
                    return (
                        <div key={ data.name }>
                            <a href={ data.route } >{ data.name }</a> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Schemas;