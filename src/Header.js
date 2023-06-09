import   React from 'react'
import './Header.css';
import logo from './logoAmazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const[{basket}, dispatch] = useStateValue()

  return (
    <div className='header' >
        <Link to="/" >
            <img className='header__logo' src={logo} alt="Amazon Logo" />
        </Link>
        
        <div className="header__search">
            <input className='header__searchInput' type="text" />
            <SearchIcon className='header__searchIcon' />
        </div>
        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign in</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>  
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            <div className="header__option"></div>
        </div>
        <Link to="/checkout" >
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>
        
    </div>
  )
}

export default Header
