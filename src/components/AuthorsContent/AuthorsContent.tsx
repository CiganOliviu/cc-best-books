import React from 'react';
import { AssetType } from '../../helpers/types';

const AuthorsContent: React.FC<AssetType> = (asset: any) => {

    // { getNationality(author?.nationality) }
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

export default AuthorsContent;