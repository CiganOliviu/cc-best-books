import React, { useEffect, useState } from 'react';
import { AssetType, AuthorsType, CategoriesType } from '../../helpers/types';
import { ButtonsContainer, ContentParagraph, CustomButton, DetailPageContainer, InputContainer } from '../../App.style';
import { useCustomFetchData } from '../../backend/apiCalls';
import { requestUrls } from '../../backend/requestUrls';
import { getAuthor, getCategory } from '../../helpers/generalHelpers';

const BooksDetailPageContent: React.FC<AssetType> = (asset: any) => {
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [authors, setAuthors] = useState<AuthorsType[]>([]);
    const { apiData: apiDataCategories, serverError: serverErrorCategories } = useCustomFetchData(requestUrls.fetchCategories);
    const { apiData: apiDataAuthors, serverError: serverErrorAuthors  } = useCustomFetchData(requestUrls.fetchAuthors);

    useEffect(() => {
        if (apiDataCategories) {
            setCategories(apiDataCategories);
        }

        if (apiDataAuthors) {
            setAuthors(apiDataAuthors);
        }
    }, [apiDataCategories, apiDataAuthors]);

    useEffect(() => {
        if (serverErrorCategories || serverErrorAuthors) {
            throw new Error('Unable to fetch data for Books');
        }
    }, [serverErrorCategories, serverErrorAuthors])

    return (
        <DetailPageContainer>
            <form>
                <ContentParagraph>Author:</ContentParagraph>
                <InputContainer type="text" defaultValue={ getAuthor(authors, asset?.asset?.author) } />
                <ContentParagraph>Title:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.title } />
                <div>&nbsp;</div>
                <ContentParagraph>Description:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.description } />
                <div>&nbsp;</div>
                <ContentParagraph>Mark:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.mark } />
                <div>&nbsp;</div>
                <ContentParagraph>Cover:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.cover } />
                <div>&nbsp;</div>
                <ContentParagraph>Current Market Place:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.current_market_price } />
                <div>&nbsp;</div>
                <ContentParagraph>Pages:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.pages } />
                <div>&nbsp;</div>
                <ContentParagraph>Categories:</ContentParagraph>
                <InputContainer type="text" defaultValue={ getCategory(categories, asset?.asset?.category) } />
                <div>&nbsp;</div>
                <ContentParagraph>Owned:</ContentParagraph>
                <InputContainer type="text" defaultValue={ asset?.asset?.owned } />
                <div>&nbsp;</div>
                <ButtonsContainer>
                    <CustomButton isAlertButton={ false }>Update set of data</CustomButton>
                    <CustomButton isAlertButton={ true }>Delete set of data</CustomButton>
                </ButtonsContainer>
            </form>
        </DetailPageContainer>
    )
};

export default BooksDetailPageContent;
