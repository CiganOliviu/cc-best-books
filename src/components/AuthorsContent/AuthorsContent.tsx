import React from 'react';
import { AssetType } from '../../helpers/types';
import { TableTitle } from '../../App.style';
import { useNavigate } from 'react-router-dom';

const AuthorsContent: React.FC<AssetType> = (asset: any) => {
    const navigate = useNavigate()
    return (
        <div>
            <div key={ asset?.asset?.last_name }>
                <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id)}>
                    { asset?.asset?.first_name } { asset?.asset?.last_name }
                </TableTitle>
            </div>
        </div>
    )
};

export default AuthorsContent;
