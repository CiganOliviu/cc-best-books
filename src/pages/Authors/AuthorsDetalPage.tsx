import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomFetchAuthor, useCustomFetchNationalities } from '../../backend/apiCalls';
import { getNationality } from '../../helpers/generalHelpers';
import { AuthorsType, NationalitiesType } from '../../helpers/types';

const AuthorsDetailPage: React.FC = () => {
    
    const [author, setAuthor] = useState<AuthorsType>();
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);

    const { id } = useParams();
    const { apiDataAuthor, serverErrorAuthor } = useCustomFetchAuthor(id);
    const { apiData, serverError } = useCustomFetchNationalities();

    useEffect(() => {
        if (apiDataAuthor) {
            setAuthor(apiDataAuthor);
        }
        if (apiData) {
            setNationalities(apiData);
        }
    }, [apiDataAuthor, apiData]);

    useEffect(() => {
        if (serverErrorAuthor || serverError) {
            throw new Error("Error fetching 3333333data from AuthorsModel");
        }
    });

    return (
        <div>
            <p>{ author?.first_name }</p>
            <p>{ author?.last_name }</p>
            <p>{ author?.age }</p>
            <p>{ author?.occupation }</p>
            { getNationality(nationalities, author?.nationality) }
            <p>{ author?.website }</p> 
        </div>
    );
};

export default AuthorsDetailPage;