function CartPage({ cart, removeFromCart, updateItemCount }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px',
        }}>
            <h2>Список товаров</h2>
            {cart.map((item, index) => (
                <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderBottom: '1px solid #ccc',
                    padding: '10px 0',
                    maxWidth: '600px',
                    width: '100%',
                }}>
                    <span style={{flex: 1}}>
                        {item.name} — {item.price}₽ — {item.count} шт. ({item.count * item.price}₽)
                    </span>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-end'
                    }}>
                        <button
                            onClick={() => updateItemCount(item.id, item.count - 1)}
                            disabled={item.count <= 1}
                            style={{
                                backgroundColor: '#ddd',
                                border: 'none',
                                borderRadius: '100px',
                                padding: '4px 8px',
                                cursor: 'pointer'
                            }}
                        >−
                        </button>

                        <button
                            onClick={() => updateItemCount(item.id, item.count + 1)}
                            style={{
                                backgroundColor: '#ddd',
                                border: 'none',
                                borderRadius: '100px',
                                padding: '4px 8px',
                                cursor: 'pointer'
                            }}
                        >+
                        </button>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                                backgroundColor: '#ff4d4d',
                                border: 'none',
                                padding: '6px 12px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontFamily: "Monaco, monospace"
                            }}
                        >УДАЛИТЬ
                        </button>
                    </div>
                </div>
            ))}
            <div style={{maxWidth: '600px', width: '100%'}}>
                <h3 style={{marginTop: '20px'}}>Итого: {total}₽</h3>
            </div>
        </div>
    );
}

export default CartPage;
