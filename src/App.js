import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Order from './components/Order';
import OrderFood from './components/OrderFood';

function App() {
  return (
      <div>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Order/>}  />
          <Route path='/order' element={<OrderFood/>}  />
        </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
