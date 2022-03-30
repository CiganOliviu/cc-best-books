import React, { useEffect, useState } from 'react';
import { useCustomFetchBooks } from '../../backend/apiCalls';
import { BooksType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';

const Books: React.FC = () => {
    const [books, setBooks] = useState<BooksType[]>([]);
    const { apiData, serverError } = useCustomFetchBooks();

    useEffect(() => {
        if (apiData) {
            setBooks(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error when fetching Books from backend");
        }
    }, [serverError]);

    if (isDataFetchedValid(books)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return (
        <div>
        {
            books.map((data: BooksType) => {
                return (
                    <div key={ data.author }>
                        <h1>{ data.title }</h1>
                        <p>{ data.description } </p> 
                    </div>
                );
            })
        }
        </div>
    )
};

export default Books;