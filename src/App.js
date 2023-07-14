import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/home';
import Sidebar from './components/Sidebar';
import Post from './pages/post';
import Category from './pages/category';
import Footer from './components/Footer';

function App() {

   
  return (
      <>
         <BrowserRouter>
            <Nav/>
              <Sidebar/>
              <Routes>    
                <Route path="/" element={ <Home/> } />
                <Route path="/:id/:ids" element={ <Post/> } />
                <Route path="/:id" element={ <Category/> } />
              </Routes>
              <Footer/>
          </BrowserRouter>
      </>
  )
}

export default App;
