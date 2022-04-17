import React from 'react';
import { AssetType } from '../../helpers/types';
import { ButtonsContainer, ContentParagraph, CustomButton, DetailPageContainer, InputContainer } from '../../App.style';

const NationalitiesDetailPageContent: React.FC<AssetType> = (asset: any) => {

    return (
        <DetailPageContainer>
            <form>
                <ContentParagraph>Profile picture:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.name } />
                <div>&nbsp;</div>
                <ButtonsContainer>
                    <CustomButton isAlertButton={false}>Update set of data</CustomButton>
                    <CustomButton isAlertButton={true}>Delete set of data</CustomButton>
                </ButtonsContainer>
            </form>
        </DetailPageContainer>
    )
};

export default NationalitiesDetailPageContent;
