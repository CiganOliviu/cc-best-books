import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './App.style';
import AppLayout from './pages/AppLayout/AppLayout';
import Authors from './pages/Authors/Authors';
import Books from './pages/Books/Books';
import Categories from './pages/Categories/Categories';
import Nationalities from './pages/Nationalities/Nationalities';
import StyleComponents from './pages/StyleComponents/StyleComponents';
import { appPagesRouting } from './helpers/appPagesRouting';
import AuthorsDetailPage from './pages/Authors/AuthorsDetalPage';
import ModularPage from './pages/ModularPage/ModularPage';
import { useCustomFetchAuthors, useCustomFetchSchemas } from './backend/apiCalls';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={ appPagesRouting.SchemasPage } element={ <ModularPage useCustomFetch={ useCustomFetchSchemas } pageContentType='Schemas' /> } />
          <Route path={ appPagesRouting.AuthorsPage } element={ <ModularPage useCustomFetch={ useCustomFetchAuthors } pageContentType='Authors' /> } />
          <Route path={ appPagesRouting.AppLayouPage } element={ <AppLayout/> } />
          <Route path={ appPagesRouting.AuthorsPage } element={ <Authors /> } />
          <Route path={ appPagesRouting.AuthorsDetailPage } element={ <AuthorsDetailPage/> } ></Route>
          <Route path={ appPagesRouting.BooksPage } element={ <Books /> } />
          <Route path={ appPagesRouting.CategoriesPage } element={ <Categories /> } />
          <Route path={ appPagesRouting.NationalitiesPage } element={ <Nationalities /> } />
          <Route path={ appPagesRouting.StyleComponentsPage } element={ <StyleComponents /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
