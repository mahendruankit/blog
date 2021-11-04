import Header from './components/Header/Header';
import { HashRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <div className='page'>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Header />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
