import React, { useEffect, useState } from 'react';
import { useCustomFetchData } from '../../backend/apiCalls';
import { getNationality } from '../../helpers/generalHelpers';
import { AssetType, NationalitiesType } from '../../helpers/types';
import { requestUrls } from '../../backend/requestUrls';
import { ContentParagraph, DetailPageContainer, InputContainer, CustomButton, ButtonsContainer } from '../../App.style';

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
            <form>
                <ContentParagraph>Profile picture:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.profile_picture } />
                <div>&nbsp;</div>
                <ContentParagraph>First name:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.first_name } />
                <div>&nbsp;</div>
                <ContentParagraph>Last name:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.last_name } />
                <div>&nbsp;</div>
                <ContentParagraph>Age:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.age } />
                <div>&nbsp;</div>
                <ContentParagraph>Occupation:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.occupation } />
                <div>&nbsp;</div>
                <ContentParagraph>Nationality:</ContentParagraph>
                <InputContainer type="text" defaultValue={ getNationality(nationalities, asset?.asset?.nationality) } />
                <div>&nbsp;</div>
                <ContentParagraph>Website:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.website } />
                <div>&nbsp;</div>
                <ButtonsContainer>
                    <CustomButton isAlertButton={false}>Update set of data</CustomButton>
                    <CustomButton isAlertButton={true}>Delete set of data</CustomButton>
                </ButtonsContainer>
            </form>
        </DetailPageContainer>
    )
};

export default AuthorsDetailPageContent;
