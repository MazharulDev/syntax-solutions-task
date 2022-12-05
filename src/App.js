import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './compoents/auth/Login';
import Footer from './compoents/footer/Footer';
import Home from './compoents/home/Home';
import Header from './compoents/header/Header'
import AddContent from './compoents/addContent/AddContent';
import ViewContents from './compoents/viewContents/ViewContents';
import RequireAdmin from './compoents/shared/RequireAdmin';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addcontent' element={<RequireAdmin><AddContent /></RequireAdmin>} />
        <Route path='/viewcontent' element={<ViewContents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

