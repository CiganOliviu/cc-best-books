import React, { useEffect, useState } from 'react';
import { useCustomFetchNationalities } from '../../backend/apiCalls';
import { getNationality } from '../../helpers/generalHelpers';
import { AssetType, NationalitiesType } from '../../helpers/types';

const AuthorsDetailPageContent: React.FC<AssetType> = (asset: any) => {
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);
    const { apiData, serverError } = useCustomFetchNationalities();

    useEffect(() => {
        if (apiData) {
            setNationalities(apiData);
        }
    }, [apiData]);

    useEffect(() => {
        if (serverError) {
            throw new Error('Unable to fetch nationalities from authors');
        }
    }, [serverError])

    return (
        <div>
            <p>{ asset?.asset?.first_name }</p>
            <p>{ asset?.asset?.last_name }</p>
            <p>{ asset?.asset?.age }</p>
            <p>{ asset?.asset?.occupation }</p>
            <p>{ getNationality(nationalities, asset?.asset?.nationality) }</p>
            <p>{ asset?.asset?.website }</p> 
        </div>
    )
};

export default AuthorsDetailPageContent;