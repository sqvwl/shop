import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
    return (
        <header style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            top: 0,
            width: '100%',
            zIndex: 1000,
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'fixed'
        }}>
            <div style={{flex: 1}}>
                <Link to="/" style={{color: 'white', textDecoration: 'none', marginRight: '20px'}}>Главная</Link>
                <span style={{marginRight: '20px'}}>|</span>
                <Link to="/cart" style={{color: 'white', textDecoration: 'none'}}>Корзина</Link>
            </div>
            <div>
                <span>Товаров в корзине: {cartCount}</span>
            </div>
        </header>
    );
}

export default Header;
