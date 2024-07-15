
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Product Showcase
        </Typography>
        <Button color="inherit" component={Link} to="/">
          All Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
