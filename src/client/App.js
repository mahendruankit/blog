import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './contents/Home/Home';
import Science from './contents/Science/Science';
import Technology from './contents/Technology/Technology';
import Movies from './contents/Movies/Movies';
import Fitness from './contents/Fitness/Fitness';
import Food from './contents/Food/Food';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='page'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/science' element={<Science />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/food' element={<Food />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
