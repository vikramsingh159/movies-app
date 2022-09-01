import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function Routing() {
  return (
    // Path Route Section
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
