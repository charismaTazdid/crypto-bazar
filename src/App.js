import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import CoinPage from './components/CoinPage/CoinPage';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import CustomAlert from './components/CustomAlert/CustomAlert';

function App() {


  return (

    <Router>
      <div className="container">

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins/:id' element={<CoinPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <CustomAlert />
    </Router>
  );
}

export default App;
