import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Aside from '../components/Aside';

function MainPage({ addToCart }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [notification, setNotification] = useState("");
    const [timer, setTimer] = useState(null);

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    const handleAddToCart = (product) => {
        addToCart(product);
        if (timer) {
            clearTimeout(timer);
        }

        setNotification(`Товар "${product.name}" добавлен в корзину!`);

        const newTimer = setTimeout(() => {
            setNotification('');
        }, 2000);
        setTimer(newTimer);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Aside setSelectedCategory={setSelectedCategory} />
            <main style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '45px', marginLeft: '230px' }}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
                ))}
            </main>

            {notification && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    zIndex: 1000
                }}>
                    {notification}
                </div>
            )}
        </div>
    );
}

export default MainPage;
