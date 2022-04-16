import React, { useEffect, useState } from 'react';
import { useCustomFetchData } from '../../backend/apiCalls';
import { getNationality } from '../../helpers/generalHelpers';
import { AssetType, NationalitiesType } from '../../helpers/types';
import { requestUrls } from '../../backend/requestUrls';
import { ContentParagraph, DetailPageContainer } from '../../App.style';

const AuthorsDetailPageContent: React.FC<AssetType> = (asset: any) => {
    const [nationalities, setNationalities] = useState<NationalitiesType[]>([]);
    const { apiData, serverError } = useCustomFetchData(requestUrls.fetchNationalities);

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
        <DetailPageContainer>
            <ContentParagraph>{ asset?.asset?.first_name }</ContentParagraph>
            <ContentParagraph>{ asset?.asset?.last_name }</ContentParagraph>
            <ContentParagraph>{ asset?.asset?.age }</ContentParagraph>
            <ContentParagraph>{ asset?.asset?.occupation }</ContentParagraph>
            <ContentParagraph>{ getNationality(nationalities, asset?.asset?.nationality) }</ContentParagraph>
            <ContentParagraph>{ asset?.asset?.website }</ContentParagraph>
        </DetailPageContainer>
    )
};

export default AuthorsDetailPageContent;
