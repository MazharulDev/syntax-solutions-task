import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './compoents/auth/Login';
import Footer from './compoents/footer/Footer';
import Home from './compoents/home/Home';
import Header from './compoents/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

