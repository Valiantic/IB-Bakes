import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../pages/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add trending descriptions
const trendingDescriptions = [
  "🔥 Top seller this month! Perfect for special occasions.",
  "⭐ Most loved by our customers! A must-try classic.",
  "✨ New trending design! Limited availability.",
  "💝 Customer favorite! Great for celebrations."
];

// Update ProductCard to include trendDescription
const ProductCard = ({ id, image, price, title, description, trendDescription }) => (
  <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
    <div className="relative h-64 bg-gray-200 flex-shrink-0">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-rose-500 italic mb-4 flex-grow">{trendDescription}</p>
      <Link to={`/products/${id}`}>
        <button className="w-full bg-rose-400 text-white font-semibold py-2 rounded-lg hover:bg-rose-600 transition-colors">
          Check-Out
        </button>
      </Link>
    </div>
  </div>
);

const HiglightProduct = () => {
  const highlightedProducts = productsData.slice(0, 4);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <div id="products" data-aos="fade-up" className="max-w-screen-xl mx-auto p-6 font-[Poppins]">
      <h2 className="text-4xl font-montserrat font-bold mb-8 mt-7 text-rose-500">Checkout our Best Sellers!</h2>
      <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-stretch">
        {highlightedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            trendDescription={trendingDescriptions[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default HiglightProduct;
