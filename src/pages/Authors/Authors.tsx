import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCustomFetchAuthors, useCustomFetchNationalities } from '../../backend/apiCalls';
import { AuthorsType, NationalitiesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';
import { TableTitle } from '../Schemas/Schemas.style';

const Authors = () => {
    const [authors, setAuthors] = useState<AuthorsType[]>([]);
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);

    const { apiDataAuthors, serverErrorAuthors } = useCustomFetchAuthors();
    const { apiDataNationalities, serverErrorNationalities } = useCustomFetchNationalities();

    useEffect(() => {
        if (apiDataAuthors) {
            setAuthors(apiDataAuthors);
        }

        if (apiDataNationalities) {
            setNationalities(apiDataNationalities);
        }
    }, [apiDataAuthors, apiDataNationalities]);

    useEffect(() => {
        if (serverErrorAuthors || serverErrorNationalities) {
            throw new Error("Error fetching data from AuthorsModel")
        }
    }, [serverErrorAuthors, serverErrorNationalities]);

    if (isDataFetchedValid(authors) && isDataFetchedValid(nationalities)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return (
        <div>
        {
            authors.map((data: AuthorsType) => {
                return (
                    <div key={ data.last_name }>
                        <TableTitle href={ data._id }>{ data.first_name } { data.last_name }</TableTitle>                      
                    </div>
                );
            })
        }
        </div>
    )
};

export default Authors;