
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import PropTypes from 'prop-types';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

AllProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      availability: PropTypes.string.isRequired,
    })
  ),
};

export default AllProducts;
