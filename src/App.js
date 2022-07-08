import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
// import Product from './Product';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  //onAdd function--
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //onRemove function--
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
 //displayProducts function
 
 const [filteredItems, setFilteredItems] = useState(products);

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <Search products={products} setFilteredItems={setFilteredItems}></Search>
      <div className="row">
        <Main products={filteredItems} onAdd={onAdd}></Main>
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
      </div>
    </div>
  );
}

export default App;
