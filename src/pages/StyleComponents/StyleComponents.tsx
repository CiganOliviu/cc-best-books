import React, { useEffect, useState } from 'react';
import { useCustomFetchStyleComponents } from '../../backend/apiCalls';
import { StyleComponentsType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const StyleComponents: React.FC = () => {
    const [styleComponents, setStyleComponents] = useState<StyleComponentsType[]>([]);
    const { apiData, serverError } = useCustomFetchStyleComponents();

    useEffect(() => {
        if (apiData) {
            setStyleComponents(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error when fetching StyleComponents from backend");
        }
    }, [serverError]);


    if (isDataFetchedValid(styleComponents)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return (
        <div>
            {
                styleComponents.map((data: StyleComponentsType) => {
                    return (
                        <div key={ data.app_theme }>
                            { data.app_theme }
                        </div>
                    );
                })
            }
        </div>
    )
};

export default StyleComponents;