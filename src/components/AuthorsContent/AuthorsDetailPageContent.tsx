import React from 'react';
import { AssetType } from '../../helpers/types';

const AuthorsDetailPageContent: React.FC<AssetType> = (asset: any) => {

    // { getNationality(nationalities, author?.nationality) }
    return (
        <div>
            <p>{ asset?.asset?.first_name }</p>
            <p>{ asset?.asset?.last_name }</p>
            <p>{ asset?.asset?.age }</p>
            <p>{ asset?.asset?.occupation }</p>
            <p>{ asset?.asset?.website }</p> 
        </div>
    )
};

export default AuthorsDetailPageContent;