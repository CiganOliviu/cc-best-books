import React from 'react';
import { AssetType } from '../../helpers/types';
import { TableTitle } from '../../App.style';
import { useNavigate } from 'react-router-dom';

const AppLayoutContent: React.FC<AssetType> = (asset: any) => {
    const navigate = useNavigate();
    return (
        <div>
            <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id)}>
                { asset?.asset?.name }
            </TableTitle>
        </div>
    )
};

export default AppLayoutContent;
