import React, { useEffect, useState } from 'react';
import { GeneralBackendType, ModularPageType } from '../../helpers/types';

const ModularPage: React.FC<ModularPageType> = ({ pageType }) => {
    
    const [modularPageData, setModularPageData] = useState<GeneralBackendType[]>([]);

    return (
        <div>

        </div>
    )
}

export default ModularPage;