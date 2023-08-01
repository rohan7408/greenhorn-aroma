import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: "$19.99",
    imageUrl:
      "https://soapytwist.com/cdn/shop/products/basil_essential_oil.jpg?v=1689577768&width=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$29.99",
    imageUrl:
      "https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16467068847609.jpg?imageView2/2/w/1920/q/75/format/webp",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: "$24.99",
    imageUrl:
      "https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16466397406598.jpg?imageView2/2/w/1920/q/75/format/webp",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$29.99",
    imageUrl:
      "https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16466435301290.jpg?imageView2/2/w/1920/q/75/format/webp",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$29.99",
    imageUrl:
      "https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16466451746203.jpg?imageView2/2/w/1920/q/75/format/webp",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$29.99",
    imageUrl:
      "https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16462116012775.jpg?imageView2/2/w/1920/q/75/format/webp",
  },
];

const Shop = () => {
  return (
    <div className="p-4 md:p-8 bg-green-100">
      <h2 className="text-3xl text-center mb-8 font-serif text-green-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-md shadow-md mb-4"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-600 font-semibold mb-4">{product.price}</p>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
