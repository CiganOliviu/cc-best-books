import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomFetchAuthor, useCustomFetchNationalities } from '../../backend/apiCalls';
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

    const getNationality = (authorId?: string): string => {

        let result = '';

        nationalities.forEach((nationality: NationalitiesType) => {
            if (nationality._id === authorId![0]) {
                result = nationality.name
            }
        });

        return result;
    };

    return (
        <div>
            <p>{ author?.first_name }</p>
            <p>{ author?.last_name }</p>
            <p>{ author?.age }</p>
            <p>{ author?.occupation }</p>
            { getNationality(author?.nationality) }
            <p>{ author?.website }</p> 
        </div>
    );
};

export default AuthorsDetailPage;