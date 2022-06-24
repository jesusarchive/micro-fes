import React, { useState } from "react";

const mockProducts = [
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
  { name: "foo", color: "black", price: "50 EUR" },
  { name: "bar", color: "white", price: "99 EUR" },
  { name: "baz", color: "red", price: "30 EUR" },
];
const IraProducts = ({}) => {
  const [products, setProducts] = useState(mockProducts);

  return (
    <div className="h-full w-full flex flex-col text-3xl border-4 border-blue-900 text-blue-700 bg-blue-300 p-4">
      <h2 className="text-3xl text-pink-700 p-8 mb-5">IRA PRODUCTS</h2>

      <table className="h-5/6 w-full border-2 overflow-auto">
        <thead>
          <tr>
            {Object.keys(products[0]).map((key, i) => (
              <th
                className="bg-black text-white capitalize border-2 p-2"
                key={`ira-products__th--${i}`}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={`ira-products__tr--${i}`}>
              {Object.values(product).map((value, i) => (
                <td
                  className="bg-white text-black capitalize border-2 text-center p-1 hover:bg-yellow-100"
                  key={`ira-products__td--${i}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IraProducts;
