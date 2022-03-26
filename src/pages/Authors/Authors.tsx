import React, { useEffect, useState } from 'react';
import { useCustomFetchAuthors, useCustomFetchNationalities } from '../../backend/apiCalls';
import { AuthorsType, NationalitiesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

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
    
    const getNationality = (authorId: string): string => {

        let result = '';
        nationalities.forEach((nationality: NationalitiesType) => {
            if (nationality._id === authorId[0]) {
                result = nationality.name
            }
        });

        return result;
    };

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
                        <p>{ data.first_name }</p>
                        <p>{ data.last_name }</p>
                        <p>{ data.age }</p>
                        <p>{ getNationality(data.nationality) } </p>
                        <p>{ data.occupation }</p>
                        <p>{ data.website }</p>                        
                        <div>&nbsp;</div>
                    </div>
                );
            })
        }
        </div>
    )
};

export default Authors;