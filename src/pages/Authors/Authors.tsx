import React, { useEffect, useState } from 'react';
import { useCustomFetchAuthors } from '../../backend/apiCalls';
import { AuthorsType } from '../../helpers/types';

const Authors = () => {

    const [authors, setAuthors] = useState([]);
    const { apiDataAuthors, serverErrorAuthors } = useCustomFetchAuthors();

    useEffect(() => {
        if (apiDataAuthors) {
            setAuthors(apiDataAuthors);
        }
    }, [apiDataAuthors]);

    useEffect(() => {
        if (serverErrorAuthors) {
            throw new Error("Error fetching data from AuthorsModel")
        }
    }, [serverErrorAuthors]);

    return (
        <div>
        {
            authors.map((data: AuthorsType) => {
                return (
                    <div key={ data.last_name }>
                        <h1>{ data.first_name } { data.last_name }</h1> 
                    </div>
                )
            })
        }
        </div>
    )
};

export default Authors;