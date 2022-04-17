import React from 'react';
import { AssetType } from '../../helpers/types';
import { PageContainer, TableTitle } from '../../App.style';
import { useNavigate } from 'react-router-dom';

const BooksContent: React.FC<AssetType> = (asset: any) => {
    const navigate = useNavigate();
    return (
        <PageContainer>
            <div key={ asset?.asset?._id }>
                <TableTitle href={ asset?.asset?._id } onClick={() => navigate(asset?.asset?._id)}>
                    { asset?.asset?.title }
                </TableTitle>
            </div>
        </PageContainer>
    )
};

export default BooksContent;
