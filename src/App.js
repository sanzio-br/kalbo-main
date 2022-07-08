import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/Aboutpage/about';
import Home from './pages/Homepage/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/kalbo-main" element={<Home/>}/>
        <Route exact path="/kalbo-main/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
