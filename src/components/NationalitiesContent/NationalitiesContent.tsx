import React from 'react';
import { AssetType } from '../../helpers/types';

const NationalitiesContent: React.FC<AssetType> = (asset: any) => {
    return (
        <p>{ asset?.asset?.name }</p>
    )
};

export default NationalitiesContent;