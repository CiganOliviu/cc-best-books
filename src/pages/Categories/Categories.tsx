import React, { useEffect, useState } from 'react';
import { useCustomFetchCategories } from '../../backend/apiCalls';
import { CategoriesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const Categories = () => {
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const { apiDataCategories, serverErrorCategories } = useCustomFetchCategories();

    useEffect(() => {
        if (apiDataCategories) {
            setCategories(apiDataCategories);
        }
    }, [apiDataCategories]);

    useEffect(() => {
        if (serverErrorCategories) {
            throw new Error("Error when fetching Categories from backend");
        }
    }, [serverErrorCategories]);

    if (isDataFetchedValid(categories)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };
    return (
        <div>
            {
                categories.map((data: CategoriesType) => {
                    return (
                        <div key={ data.name }>
                            { data.name }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Categories;