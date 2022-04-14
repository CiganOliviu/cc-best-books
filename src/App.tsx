import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './App.style';
import { appPagesRouting } from './helpers/appPagesRouting';
import ModularPage from './pages/ModularPage/ModularPage';
import { useCustomFetchData, useCustomFetchDetailData } from './backend/apiCalls';
import { pageContentTypes } from './helpers/pageContentTypes';
import ModularDetailPage from './pages/ModularDetailPage/ModularDetailPage';
import React from 'react';
import { requestUrls } from './backend/requestUrls';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={ appPagesRouting.SchemasPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.Schemas }
                                        requestUrl={ requestUrls.fetchSchemas }/> } />
          <Route path={ appPagesRouting.AuthorsPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.Authors}
                                        requestUrl={ requestUrls.fetchAuthors }/> } />
          <Route path={ appPagesRouting.NationalitiesPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.Nationalities }
                                        requestUrl={ requestUrls.fetchNationalities }/> } />
          <Route path={ appPagesRouting.AppLayoutPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.AppLayout }
                                        requestUrl={ requestUrls.fetchAppLayout }/> } />
          <Route path={ appPagesRouting.BooksPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.Books }
                                        requestUrl={ requestUrls.fetchBooks }/> } />
          <Route path={ appPagesRouting.CategoriesPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.Categories }
                                        requestUrl={ requestUrls.fetchCategories }/> } />
          <Route path={ appPagesRouting.StyleComponentsPage }
                 element={ <ModularPage useCustomFetch={ useCustomFetchData }
                                        pageContentType={ pageContentTypes.StyleComponents }
                                        requestUrl={ requestUrls.fetchStyleComponents }/> } />
          <Route path={ appPagesRouting.AuthorsDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.Authors }
                                        requestUrl={ requestUrls.fetchAuthors }/> } />
          <Route path={ appPagesRouting.NationalitiesDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.Nationalities }
                                        requestUrl={ requestUrls.fetchNationalities }/> } />
          <Route path={ appPagesRouting.AppLayoutDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.AppLayout }
                                        requestUrl={ requestUrls.fetchAppLayout }/> } />
          <Route path={ appPagesRouting.BooksDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.Books }
                                        requestUrl={ requestUrls.fetchBooks }/> } />
          <Route path={ appPagesRouting.CategoriesDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.Categories }
                                        requestUrl={ requestUrls.fetchCategories }/> } />
          <Route path={ appPagesRouting.StyleComponentsDetailPage }
                 element={ <ModularDetailPage useCustomFetch={ useCustomFetchDetailData }
                                        pageContentType={ pageContentTypes.StyleComponents }
                                        requestUrl={ requestUrls.fetchStyleComponents }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
