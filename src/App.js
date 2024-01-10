
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

import SearchProduct from './pages/SearchProduct';
import Login from './pages/Login';
import ProtectedRoute from './protected_route/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <NavBar/>
      </div>
      <div className='Routes-pages'>
        <Routes>
          {/* local routes */}

          <Route path='/' element={<Login/>} />

          {/* protected routes */}

          <Route element={<ProtectedRoute/>} >

          <Route path="/Home" element={<Home/>} />
          <Route path='/Cart' element={<CartPage/>} />
          <Route path='/Product' element={ <SearchProduct/>} />

          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;

