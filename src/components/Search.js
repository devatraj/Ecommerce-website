import React, { useEffect, useState } from "react";

export default function Search({ products, setFilteredItems }) {
  const [input, setInput] = useState("");
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(input) ||
        product.description.toLowerCase().includes(input)||
        product.category.toLowerCase().includes(input)
      );
    });
    if (input !== "") setFilteredItems(filteredProducts);
    else setFilteredItems(products);
  }, [input, products, setFilteredItems]);

  return (
    <search className="center">
      <div>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search for a product"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </div>
    </search>
  );
}