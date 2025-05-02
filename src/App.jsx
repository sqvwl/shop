import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(p => p.id === product.id);
            if (existing) {
                return prev.map(p => p.id === product.id ? { ...p, count: p.count + 1 } : p);
            }
            return [...prev, { ...product, count: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateItemCount = (id, newCount) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, count: newCount } : item
            )
        );
    };

    return (
        <BrowserRouter>
            <Header cartCount={cart.reduce((total, item) => total + item.count, 0)} />
            <Routes>
                <Route path="/" element={<MainPage addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateItemCount={updateItemCount} />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;