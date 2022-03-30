import React, { useEffect, useState } from 'react';
import { useCustomFetchCategories } from '../../backend/apiCalls';
import { CategoriesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const { apiData, serverError } = useCustomFetchCategories();

    useEffect(() => {
        if (apiData) {
            setCategories(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error when fetching Categories from backend");
        }
    }, [serverError]);

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
                    );
                })
            }
        </div>
    )
};

export default Categories;