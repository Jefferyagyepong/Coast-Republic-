// context/CartContext.js
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Calculate paginated items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(cart.length / itemsPerPage);

  // Pagination controls
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
