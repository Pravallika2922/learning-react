import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

function Shopping_Header(){

    return (
        <div className="header_container">
        <a href="#" className="header_links home">Home</a>
        <a href="#" className="header_links aboutus">About us</a>
        <a href="#" className="header_links contact">Contact</a>
        <a href="#" className="header_links login">Login</a>
        <a href="#" className="header_links logout">Logout</a>
        <IconButton aria-label="shoppingcart"  className="header_links cart"><AddShoppingCartIcon />
          </IconButton>
        </div>
    )
}

export default Shopping_Header;