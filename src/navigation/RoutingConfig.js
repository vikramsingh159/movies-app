import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MovieDetails from '../components/MovieDetails/MovieDetails';
//pages
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function Routing() {
  return (
    // Path Route Section
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetails/>} />
          <Route element={<PageNotFound/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routing;
