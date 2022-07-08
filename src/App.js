import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/Aboutpage/about';
import BlogPage from './pages/Blogspage/Blogspage';
import Booking from './pages/Bookingpage/booking';
import Hire from './pages/Carhire/Hire';
import Contactpage from './pages/Contactspage/Contactpage';
import Custom from './pages/Custom-safaris/custom';
import Home from './pages/Homepage/Home';
import BookingInfo from './pages/Packagepage/bookinginfo';
import Events from './pages/PackagesPage/EventsPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/kalbo-main" element={<Home/>}/>
        <Route exact path="/kalbo-main/about" element={<About/>}/>
        <Route exact path="/kalbo-main/blogs" element={<BlogPage/>}/>
        <Route exact path="/kalbo-main/safari-packages" element={<Events/>}/>
        <Route exact path="/kalbo-main/hire-ride" element={<Hire />} />
        <Route exact path="/kalbo-main/custom-safaris" element={<Custom />} />
        <Route exact path="/kalbo/booking" element={<Booking />} />
        <Route exact path="/kalbo/contact-us" element={<Contactpage />}/>
        <Route
          exact
          path="/kalbo-main/safari-packages/:id"
          element={<BookingInfo />}
        />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
