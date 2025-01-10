import React from 'react';

const OrderModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-rose-500 mb-6">{product.price}</p>
            <button className="bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition-colors mt-auto">
              Place to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
