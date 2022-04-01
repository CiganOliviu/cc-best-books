import React from 'react';
import { AssetType } from '../../helpers/types';

const BooksContent: React.FC<AssetType> = (asset: any) => {
    return (
        <p>
            { asset?.asset?.title }
        </p>
    )
};

export default BooksContent;