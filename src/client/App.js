import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './contents/Home/Home';
import Category from './components/Category/Category';
import Article from './components/Article/Article';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='page'>
          <Header />
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route
                path='/science'
                element={<Category categoryId={1} displayTitle={true} />}
              />
              <Route
                path='/category/:categoryId/article/:articleId'
                element={<Article />}
              />
              <Route
                path='/technology'
                element={<Category categoryId={2} displayTitle={true} />}
              />
              <Route
                path='/movies'
                element={<Category categoryId={3} displayTitle={true} />}
              />
              <Route
                path='/fitness'
                element={<Category categoryId={4} displayTitle={true} />}
              />
              <Route
                path='/food'
                element={<Category categoryId={5} displayTitle={true} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
