import React, { useEffect, useState } from 'react';
import { useCustomFetchStyleComponents } from '../../backend/apiCalls';
import { StyleComponentsType } from '../../helpers/types';

const StyleComponents = () => {

    const [styleComponents, setStyleComponents] = useState([]);
    const { apiDataStyleComponents, serverErrorStyleComponents } = useCustomFetchStyleComponents();

    useEffect(() => {
        if (apiDataStyleComponents) {
            setStyleComponents(apiDataStyleComponents);
        }
    }, [apiDataStyleComponents]);

    useEffect(() => {
        if (serverErrorStyleComponents) {
            throw new Error("Error when fetching StyleComponents from backend");
        }
    }, [serverErrorStyleComponents]);

    if (Object.keys(apiDataStyleComponents).length === 0) {
        return (
            <div>
                There is no data to show
            </div>
        )
    }
    return (
        <div>
            {
                styleComponents.map((data: StyleComponentsType) => {
                    return (
                        <div key={ data.app_theme }>
                            { data.app_theme }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default StyleComponents;