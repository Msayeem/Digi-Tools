import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ product, setProduct }) => {
  // Calculate total and ensure it stays as a number, then format for display
  const totalPrice = product.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedCart = product.filter((item) => item.id !== id);
    setProduct(updatedCart);
    toast.info('Item removed from cart');
  };

  const handleCheckout = () => {
    setProduct([]);
    toast.success('Checkout Successful!');
  };

  return (
    <div className='lg:w-[60%] w-[90%] mx-auto py-20 space-y-8 mb-10 border-b-2 border-purple-600'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>
      
      {product.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl font-semibold py-10">Your Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {product.map((item) => (
            <div 
              key={item.id} // Added unique key
              className='border-2 border-purple-400 hover:px-6 transition-[0.35s] md:p-5 p-3 rounded-3xl flex gap-3 items-center justify-between'
            >
              <div className='flex items-center gap-3'>
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={item.icon} alt={item.name} className="max-w-full max-h-full" />
                </div>
                <div>
                  <h3 className='md:text-[20px] font-semibold'>{item.name}</h3>
                  <h3 className='text-[16px] font-medium text-[#627382]'>${item.price}</h3>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => handleRemove(item.id)} // Attached remove logic
                  className='text-[#FF3980] font-bold hover:underline'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className='flex justify-between px-5 pt-5'>
            <h2 className='text-[20px] font-semibold text-[#627382]'>Total</h2>
            <h1 className='text-2xl font-bold'>${totalPrice}</h1>
          </div>
          
          <button 
            onClick={handleCheckout} 
            className='hover:scale-[1.01] transition-transform active:opacity-80 w-full font-bold text-[20px] py-5 px-7 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl shadow-lg'
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;