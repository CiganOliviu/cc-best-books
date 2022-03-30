import React from 'react';
import { AssetType } from '../../helpers/types';
import { TableTitle, TitleContainer } from './Schemas.style';

const SchemasContent: React.FC<AssetType> = (asset: any) => {
    return (
        <TitleContainer key={ asset?.asset?.name }>
            <TableTitle href={ asset?.asset?.route } >{ asset?.asset?.name }</TableTitle> 
        </TitleContainer>
    )
};

export default SchemasContent;