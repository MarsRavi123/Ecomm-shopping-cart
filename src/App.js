import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
