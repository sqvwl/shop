function ProductCard({ product, addToCart }) {
    return (
        <div style={{
            border: '5px solid #333',
            marginTop: 10,
            width: 220,
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            <div style={{padding: '10px'}}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'contain',
                        backgroundColor: '#fff',
                    }}
                />
            </div>
            <div style={{
                backgroundColor: '#f0f0f0',
                padding: 10,
            }}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Цена: {product.price}₽</p>
                <button onClick={() => addToCart(product)} style={{
                    backgroundColor: '#ccc',
                    border: 'none',
                    padding: '6px 12px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontFamily: "Monaco, monospace"
                }}>Добавить в корзину
                </button>
            </div>
        </div>
    );
}

export default ProductCard;