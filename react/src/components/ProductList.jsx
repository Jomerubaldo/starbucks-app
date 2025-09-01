import { useState } from 'react';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Blonde Roast',
      price: '$49.99',
      image: '/1.jpg',
    },
    {
      id: 2,
      name: 'Salted Caramel',
      price: '$29.99',
      image: '/2.jpg',
    },
    {
      id: 3,
      name: 'Nitro Vanilla Sweet Cream',
      price: '$99.99',
      image: '/3.jpg',
    },
    {
      id: 4,
      name: 'Nitro Cold Brew',
      price: '$49.99',
      image: '/4.jpg',
    },
    {
      id: 5,
      name: 'Cold Brew',
      price: '$29.99',
      image: '/5.jpg',
    },
    {
      id: 6,
      name: 'Vanilla Sweet Cream',
      price: '$99.99',
      image: '/6.jpg',
    },
    {
      id: 7,
      name: 'Dark Caramel Nitro',
      price: '$49.99',
      image: '/7.jpg',
    },
    {
      id: 8,
      name: 'Cream Frappuccino',
      price: '$29.99',
      image: '/8.jpg',
    },
    {
      id: 9,
      name: 'Frappuccino',
      price: '$99.99',
      image: '/9.jpg',
    },
  ];

  return (
    <div className="pt-10">
      <ul className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-64 h-96 bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-1/3">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div className="mt-6 p-6 bg-gray-100 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-48 h-48 object-cover my-4"
          />
          <p className="text-gray-700">{selectedProduct.price}</p>
          <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => setSelectedProduct(null)} // close details
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductList;
