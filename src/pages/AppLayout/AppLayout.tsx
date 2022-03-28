import React, { useEffect, useState } from 'react';
import { useCustomFetchAppLayout } from '../../backend/apiCalls';
import { AppLayoutType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const AppLayout: React.FC = () => {
    const [appLayout, setAppLayout] = useState<AppLayoutType[]>([]);
    const { apiDataAppLayout, serverErrorAppLayout } = useCustomFetchAppLayout();

    useEffect(() => {
        if (apiDataAppLayout) {
            setAppLayout(apiDataAppLayout);
        }
    }, [apiDataAppLayout]);

    useEffect(() => {
        if (serverErrorAppLayout) { 
            throw new Error("Error when fetching AppLayout from backend!");
        }
    }, [serverErrorAppLayout]);

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