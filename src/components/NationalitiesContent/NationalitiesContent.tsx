import React from 'react';
import { AssetType } from '../../helpers/types';
import { useNavigate } from 'react-router-dom';
import { TableTitle } from '../../App.style';

const NationalitiesContent: React.FC<AssetType> = (asset: any) => {
    const navigate = useNavigate();
    return (
        <div>
            <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id )} >
                { asset?.asset?.name }
            </TableTitle>
        </div>
    )
};

export default NationalitiesContent;
