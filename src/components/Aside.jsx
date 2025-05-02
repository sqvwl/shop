import React from 'react';
import products from '../data/products';

function Aside({setSelectedCategory }) {
    const categories = Array.from(new Set(products.map(p => p.category)));

    return (
        <aside style={{
            backgroundColor: '#424141',
            color: 'white',
            width: '200px',
            padding: '10px',
            height: '100vh',
            position: 'fixed',
            overflowY: 'auto',
            top: '40px',
        }}>
            <h2 style={{marginBottom: 30}}>Категории</h2>
            <ul style={{paddingLeft: 20 }}>
                <li
                    style={{ cursor: 'pointer', marginBottom: 30 }}
                    onClick={() => setSelectedCategory(null)}
                >
                    Все товары
                </li>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        style={{ cursor: 'pointer', marginBottom: 30 }}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Aside;