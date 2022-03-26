import React, { useEffect, useState } from 'react';
import { useCustomFetchBooks } from '../../backend/apiCalls';
import { BooksType } from '../../helpers/types';

const Books = () => {

    const [books, setBooks] = useState([]);
    const { apiDataBooks, serverErrorBooks } = useCustomFetchBooks();

    useEffect(() => {
        if (apiDataBooks) {
            setBooks(apiDataBooks);
        }
    }, [apiDataBooks]);

    useEffect(() => {
        if (serverErrorBooks) {
            throw new Error("Error when fetching Books from backend");
        }
    }, [serverErrorBooks]);

    return (
        <div>
        {
            books.map((data: BooksType) => {
                return (
                    <div key={ data.author }>
                        <h1>{ data.title }</h1>
                        <p>{ data.description } </p> 
                    </div>
                )
            })
        }
        </div>
    )
};

export default Books;