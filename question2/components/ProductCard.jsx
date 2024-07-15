
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardContent>
          <Typography variant="h5">{product.productName}</Typography>
          <Typography variant="body2">Price: ${product.price}</Typography>
          <Typography variant="body2">Rating: {product.rating}</Typography>
          <Typography variant="body2">Discount: {product.discount}%</Typography>
          <Typography variant="body2">Availability: {product.availability}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    availability: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
