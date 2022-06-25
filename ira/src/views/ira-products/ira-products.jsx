import React, { useEffect, useState } from "react";

const mockProductsEndpoint = "https://dummyjson.com/products";

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

const IraProducts = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(mockProductsEndpoint);
      console.log(data?.products);
      setProducts(data?.products);
    })();
  }, []);

  return (
    <div className="h-full w-full flex flex-col text-3xl text-blue-700 p-4 bg-white overflow-hidden">
      <h2 className="text-3xl text-pink-700 p-8 mb-5">IRA PRODUCTS</h2>

      {Array.isArray(products) && products.length > 0 ? (
        <div className="flex overflow-auto">
          <table className="h-5/6 w-full border-2">
            <thead>
              <tr>
                {Object.keys(products[0]).map((key, i) => (
                  <th
                    className="bg-black text-white capitalize border-2 p-2 text-sm"
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
                      className="bg-white text-black capitalize border-2 text-center p-1 hover:bg-yellow-100 text-sm"
                      key={`ira-products__td--${i}`}
                    >
                      {Array.isArray(value) ? (
                        value.length > 0 && (
                          <div className="h-30 w-30 flex inline-flex items-center overflow-scroll">
                            {value.map(
                              (v) =>
                                v.includes("http") && (
                                  <img className="h-10" src={v} />
                                )
                            )}
                          </div>
                        )
                      ) : value?.includes?.("http") ? (
                        <img className="h-10" src={value} />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>NO DATA</>
      )}
    </div>
  );
};

export default IraProducts;
