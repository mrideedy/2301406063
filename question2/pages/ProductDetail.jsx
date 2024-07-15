
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4">{product.productName}</Typography>
      <Typography variant="h6">Price: ${product.price}</Typography>
      <Typography variant="body1">Rating: {product.rating}</Typography>
      <Typography variant="body1">Discount: {product.discount}%</Typography>
      <Typography variant="body1">Availability: {product.availability}</Typography>
    </Container>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    availability: PropTypes.string.isRequired,
  }),
};

export default ProductDetail;
