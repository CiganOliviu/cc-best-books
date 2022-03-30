import React, { useEffect, useState } from 'react';
import { useCustomFetchAuthors } from '../../backend/apiCalls';
import { AuthorsType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';
import { TableTitle } from '../Schemas/Schemas.style';
import { useNavigate } from 'react-router-dom';

const Authors: React.FC = () => {
    const [authors, setAuthors] = useState<AuthorsType[]>([]);

    const { apiData, serverError } = useCustomFetchAuthors();

    const navigate = useNavigate();

    useEffect(() => {
        if (apiData) {
            setAuthors(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error fetching data from AuthorsModel")
        }
    }, [serverError]);

    if (isDataFetchedValid(authors)) {
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
                        <TableTitle href={ data._id } onClick={() => navigate(data._id)}>{ data.first_name } { data.last_name }</TableTitle>                      
                    </div>
                );
            })
        }
        </div>
    )
};

export default Authors;