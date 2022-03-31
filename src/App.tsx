import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './App.style';
import { appPagesRouting } from './helpers/appPagesRouting';
import ModularPage from './pages/ModularPage/ModularPage';
import { useCustomFetchAppLayout, useCustomFetchAuthors, useCustomFetchBooks, useCustomFetchCategories, 
  useCustomFetchNationalities, useCustomFetchSchemas, useCustomFetchStyleComponents,
  useCustomFetchAuthor } from './backend/apiCalls';
import { pageContentTypes } from './helpers/pageContentTypes';
import ModularDetailPage from './pages/ModularDetailPage/ModularDetailPage';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={ appPagesRouting.SchemasPage } element={ <ModularPage useCustomFetch={ useCustomFetchSchemas } pageContentType={ pageContentTypes.Schemas } /> } />
          <Route path={ appPagesRouting.AuthorsPage } element={ <ModularPage useCustomFetch={ useCustomFetchAuthors } pageContentType={ pageContentTypes.Authors} /> } />
          <Route path={ appPagesRouting.NationalitiesPage } element={ <ModularPage useCustomFetch={ useCustomFetchNationalities } pageContentType={ pageContentTypes.Nationalities } /> } />
          <Route path={ appPagesRouting.AppLayouPage } element={ <ModularPage useCustomFetch={ useCustomFetchAppLayout } pageContentType={ pageContentTypes.AppLayout } /> } />
          <Route path={ appPagesRouting.BooksPage } element={ <ModularPage useCustomFetch={ useCustomFetchBooks } pageContentType={ pageContentTypes.Books } /> } />
          <Route path={ appPagesRouting.CategoriesPage } element={ <ModularPage useCustomFetch={ useCustomFetchCategories } pageContentType={ pageContentTypes.Categories } /> } />
          <Route path={ appPagesRouting.StyleComponentsPage } element={ <ModularPage useCustomFetch={ useCustomFetchStyleComponents } pageContentType={ pageContentTypes.StyleComponents } /> } />
          <Route path={ appPagesRouting.AuthorsDetailPage } element={ <ModularDetailPage useCustomFetch={ useCustomFetchAuthor } pageContentType={ pageContentTypes.Authors } /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
