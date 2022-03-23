import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './App.style';
import AppLayout from './components/AppLayout/AppLayout';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Nationalities from './components/Nationalities/Nationalities';
import Schemas from './components/Schemas/Schemas';
import StyleComponents from './components/StyleComponents/StyleComponents';
import { appPagesRouting } from './helpers/appPagesRouting';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={ appPagesRouting.SchemasPage } element={ <Schemas/> } />
          <Route path={ appPagesRouting.AppLayouPage } element={ <AppLayout/> } />
          <Route path={ appPagesRouting.AuthorsPage } element={ <Authors /> } />
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
