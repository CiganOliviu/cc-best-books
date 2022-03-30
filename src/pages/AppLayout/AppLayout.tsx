import React, { useEffect, useState } from 'react';
import { useCustomFetchAppLayout } from '../../backend/apiCalls';
import { AppLayoutType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/generalHelpers';

const AppLayout: React.FC = () => {
    const [appLayout, setAppLayout] = useState<AppLayoutType[]>([]);
    const { apiData, serverError } = useCustomFetchAppLayout();

    useEffect(() => {
        if (apiData) {
            setAppLayout(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) { 
            throw new Error("Error when fetching AppLayout from backend!");
        }
    }, [serverError]);

    if (isDataFetchedValid(appLayout)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return(
        <div>
            {
                appLayout.map((data: AppLayoutType) => {
                    return (
                        <div key={ data.layout_title_id }>
                            <h1>{ data.target_page }</h1>
                            <p>{ data.style } </p> 
                        </div>
                    );
                })
            }
        </div>
    )
};

export default AppLayout;