import React from 'react';
import { AssetType } from '../../helpers/types';
import { PageContainer, TableTitle } from '../../App.style';
import { useNavigate } from 'react-router-dom';

const AuthorsContent: React.FC<AssetType> = (asset: any) => {
    const navigate = useNavigate()
    return (
        <PageContainer>
            <div key={ asset?.asset?.last_name }>
                <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id)}>
                    { asset?.asset?.first_name } { asset?.asset?.last_name }
                </TableTitle>
            </div>
        </PageContainer>
    )
};

export default AuthorsContent;
