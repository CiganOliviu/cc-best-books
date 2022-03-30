import React, { useEffect, useState } from 'react';
import { useCustomFetchNationalities } from '../../backend/apiCalls';
import { NationalitiesType } from '../../helpers/types';
import { isDataFetchedValid } from '../../helpers/validators';

const Nationalities: React.FC = () => {
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);
    const { apiData, serverError } = useCustomFetchNationalities();

    useEffect(() => {
        if (apiData) {
            setNationalities(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error("Error when fetching Nationalities from backend");
        }
    }, [serverError]);

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