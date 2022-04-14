import React from 'react';
import { AssetType } from '../../helpers/types';
import { ContentParagraph } from '../../App.style';

const CategoriesDetailPageContent: React.FC<AssetType> = (asset: any) => {

    return (
        <div>
            <ContentParagraph>id: { asset?.asset?._id }</ContentParagraph>
            <ContentParagraph>name: { asset?.asset?.name }</ContentParagraph>
        </div>
    )
};

export default CategoriesDetailPageContent;
