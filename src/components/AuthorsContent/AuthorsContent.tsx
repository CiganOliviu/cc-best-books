import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AssetType } from '../../helpers/types';
import { TableTitle } from '../../pages/Schemas/Schemas.style';

const AuthorsContent: React.FC<AssetType> = (asset: any) => {

    const navigate = useNavigate();
    return (
        <div>
            <div key={ asset?.asset?.last_name }>
                <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id)}>{ asset?.asset?.first_name } { asset?.asset?.last_name }</TableTitle>                      
            </div>
        </div>
    )
};

export default AuthorsContent;