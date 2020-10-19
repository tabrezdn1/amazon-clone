import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
            <div className="header__search">
                <input className="header__search__input" type="text" />
                <SearchIcon className="header__search__icon" />
            </div>
            <div className="header__nav">
                <div className="header__nav__option">
                    <span className="header__nav__option__heading">Hello Guest</span>
                    <span className="header__nav__option__subheading">Sign In</span>

                </div>
                <div className="header__nav__option">
                    <span className="header__nav__option__heading">Returns</span>
                    <span className="header__nav__option__subheading">& orders</span>

                </div>
                <div className="header__nav__option">
                    <span className="header__nav__option__heading">Your</span>
                    <span className="header__nav__option__subheading">Prime</span>

                </div>
                <div className="header__nav__option__cart">
                    <ShoppingCartRoundedIcon />
                    <span className="header__nav__option__cart__count">0</span>

                </div>
            </div>

        </div>
    )
}

export default Header
