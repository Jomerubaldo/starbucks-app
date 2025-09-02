import { useState } from 'react';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Blonde Roast',
      price: '$49.99',
      image: '/1.jpg',
      description:
        'Swing by and warm up while enjoying any of our three roasts brewed daily.',
    },
    {
      id: 2,
      name: 'Salted Caramel',
      price: '$29.99',
      image: '/2.jpg',
      description:
        'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.',
    },
    {
      id: 3,
      name: 'Nitro Vanilla Sweet Cream',
      price: '$99.99',
      image: '/3.jpg',
      description:
        'Served cold, straight from the tap, our Nitro Cold Brew is topped with a float of house-made vanilla sweet cream. The result: a cascade of velvety coffee that is more sippable than ever.',
    },
    {
      id: 4,
      name: 'Nitro Cold Brew',
      price: '$49.99',
      image: '/4.jpg',
      description:
        'Our small-batch cold brew—slow-steeped for a super smooth taste—gets even better. Were infusing it with nitrogen for a naturally sweet flavor and cascading, velvety crema. Perfection is served.',
    },
    {
      id: 5,
      name: 'Cold Brew',
      price: '$29.99',
      image: '/5.jpg',
      description:
        'Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat—Starbucks® Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor.',
    },
    {
      id: 6,
      name: 'Vanilla Sweet Cream',
      price: '$99.99',
      image: '/6.jpg',
      description:
        'Just before serving, our slow-steeped custom blend Cold Brew is topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup.',
    },
    {
      id: 7,
      name: 'Dark Caramel Nitro',
      price: '$49.99',
      image: '/7.jpg',
      description:
        'Nonfat milk Cold Foam elevates our Nitro Cold Brew with a touch of creaminess and flavor. The drink is finished with a strike of Turkish coffee ground.',
    },
    {
      id: 8,
      name: 'Cream Frappuccino',
      price: '$29.99',
      image: '/8.jpg',
      description:
        'A creamy blend of spicy chai, milk and ice is finished with sweetened whipped cream and a sprinkle of cinnamon. Spice up your afternoon treat.',
    },
    {
      id: 9,
      name: 'Frappuccino',
      price: '$99.99',
      image: '/9.jpg',
      description:
        'A smooth blend of white chocolate sauce, milk and ice and topped with whipped cream for a flavor that wows.',
    },
  ];

  return (
    <div className="pt-10">
      <h1 className="text-center pb-10 font-bold text-5xl pr-15 text-white">
        Products
      </h1>
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
          <div className="flex">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-48 h-48 object-cover my-4"
            />
            <p className="text-gray-600 mt-2 pt-5 pl-5">
              <span className="text-3xl font-bold text-black">
                {selectedProduct.name}
              </span>{' '}
              <br />
              <span className="text-2xl">3 calories</span> <br />
              {selectedProduct.description}
            </p>
          </div>
          <p className="text-gray-700">{selectedProduct.price}</p>
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
