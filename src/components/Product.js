import React from 'react';
// import Search from './components/Search';

export default function Product(props) {
  const { product, onAdd } = props;
  return (     
    <div>
      <img className="small" src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      {/* <aside>{ product.description }</aside> */}
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div> );
   
}