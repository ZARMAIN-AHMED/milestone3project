'use client'

import React, { useState, useEffect } from 'react';

export default function Product({ params }: { params: { products: string } }) {
  const [res, setRes] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]); // Cart state to manage added products

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetcchdata = await fetch(`https://fakestoreapi.com/products/${params.products}`);
        const data = await fetcchdata.json();
        setRes(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [params.products]);

  // Function to add product to cart
  const addToCart = () => {
    const existingProduct = cart.find(item => item.id === res.id);
    if (existingProduct) {
      // If product is already in the cart, update the quantity
      setCart(cart.map(item =>
        item.id === res.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new product to cart
      setCart([...cart, { ...res, quantity: 1 }]);
    }
  };

  // Function to remove product from cart
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Function to update product quantity in cart
  const updateQuantity = (productId: number, quantity: number) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  if (!res) {
    return <div className='flex justify-center text-2xl mt-72'>Loading...</div>; // Loading message
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-20 object-cover object-center rounded"
              src={res.image}
            />
            <div className="lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {res.category.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {res.title}
              </h1>
              <div className="flex mb-4">
                {/* Rating Section */}
                <span className="flex items-center">
                  {/* Add your star rating icons here */}
                </span>
              </div>
              <p className="leading-relaxed">
                {res.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {/* Color buttons */}
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${res.price}
                </span>
                <button
                  onClick={addToCart}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="container px-5 py-24 mx-auto">
        <h2 className="text-gray-900 text-3xl font-medium mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-900 font-medium">{item.title}</h3>
                  <p>Quantity: 
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border border-gray-300 rounded"
                    />
                  </p>
                  <p>Price: ${item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
