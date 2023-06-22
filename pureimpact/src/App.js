import List from './components/list';
import Nav from './components/nav';
import Login from './components/login';
import Profile from './components/profile';
import { Route,Routes, useLocation } from 'react-router-dom';
import Register from './components/register';
import Maps from './components/maps';
import Main from './components/main';
import { Footer } from './components/footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;