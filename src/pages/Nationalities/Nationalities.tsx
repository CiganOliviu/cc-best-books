import React, { useEffect, useState } from 'react';
import { useCustomFetchNationalities } from '../../backend/apiCalls';
import { NationalitiesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const Nationalities = () => {
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);
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

    if (isDataFetchedValid(nationalities)) {
        return (
            <div>
                There isn't any data to show
            </div>
        );
    };

    return (
        <div>
            {
                nationalities.map((data: NationalitiesType) => {
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

export default Nationalities;