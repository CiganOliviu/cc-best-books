import React from 'react';
import { AssetType } from '../../helpers/types';

const StyleComponentsContent: React.FC<AssetType> = (asset: any) => {
    return (
        <p>{ asset?.asset?.name }</p>
    )
};

export default StyleComponentsContent;