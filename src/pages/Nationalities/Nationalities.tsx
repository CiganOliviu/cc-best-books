import React, { useEffect, useState } from 'react';
import { useCustomFetchNationalities } from '../../backend/apiCalls';
import { NationalitiesType } from '../../helpers/types';

const Nationalities = () => {

    const [nationalities, setNationalities] = useState([]);
    const { apiDataNationalities, serverErrorNationalities } = useCustomFetchNationalities();

    useEffect(() => {
        if (apiDataNationalities) {
            setNationalities(apiDataNationalities);
        }
    }, [apiDataNationalities]);

    useEffect(() => {
        if (serverErrorNationalities) {
            throw new Error("Error when fetching Nationalities from backend");
        }
    }, [serverErrorNationalities]);

    if (Object.keys(apiDataNationalities).length === 0) {
        return (
            <div>
                There is no data to show
            </div>
        )
    }
    return (
        <div>
            {
                nationalities.map((data: NationalitiesType) => {
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

export default Nationalities;