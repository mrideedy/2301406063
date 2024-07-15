
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from '../pages/AllProducts';
import ProductDetail from '../pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
