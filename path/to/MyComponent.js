import React from 'react';
import Cart from './Cart';
import CartOverlay from './CartOverlay';

const MyComponent = () => {
    // Assuming we have a way to determine the current page, e.g., using window.location.pathname
    const currentPage = window.location.pathname;
    const showCart = ['/specific-page', '/another-page'].includes(currentPage);

    return (
        <div>
            {showCart && <Cart />}
            {showCart && <CartOverlay />}
            {/* Other component contents */}
        </div>
    );
};

export default MyComponent;