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
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route
              path='/science'
              element={
                <Category
                  categoryId={1}
                  displayTitle={true}
                  requiresPadding={true}
                />
              }
            />
            <Route
              path='/technology'
              element={
                <Category
                  categoryId={2}
                  displayTitle={true}
                  requiresPadding={true}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <Category
                  categoryId={3}
                  displayTitle={true}
                  requiresPadding={true}
                />
              }
            />
            <Route
              path='/fitness'
              element={
                <Category
                  categoryId={4}
                  displayTitle={true}
                  requiresPadding={true}
                />
              }
            />
            <Route
              path='/food'
              element={
                <Category
                  categoryId={5}
                  displayTitle={true}
                  requiresPadding={true}
                />
              }
            />
            <Route
              path='/category/:categoryId/article/:articleId'
              element={<Article />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
