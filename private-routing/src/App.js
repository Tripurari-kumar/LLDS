import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/body';
import About from './components/about';
import Login from './components/login';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <div className='wrap'>
      {/* single page application as we don't have serate body.html about.html we
      have a single page here with common header reactjs, angluar have SPA's */}
      <div className='header'>
        <div>HEADER</div>
        <nav className='nav'>
          <a href='/'> Home</a>
          <a href='/about'> About</a>
          <a href='/login'> Login</a>
        </nav>
      </div>
      <BrowserRouter>
        {/* Wherever we are putting rotuing
        don't put authentication  logic over here make a wrapper
        inside that wrapper/HOC i will put protected routes */}
        {/* Don't combine your Auth logic with your routing logic */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* children of protected route */}
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/' element={<Body />} />
          {/* ONLY LOADED IF USER IS AUTHENTICATED PROTECTED */}
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
