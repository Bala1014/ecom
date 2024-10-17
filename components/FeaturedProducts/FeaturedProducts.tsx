import React from 'react'
import './FeaturedProducts.css';
import FeaturedProductsCard from './FeaturedProductsCard';
const FeaturedProducts = () => {
  return (
    <div className='Featured-products-container'>
        <div className="Featured-products-content">
            <h2>FEATURED PRODUCTS</h2>
            <p>The main products are plastic evaporative cooling pads, deodorization evaporative cooling pads, light transmission and heat preservation air intakes, pig house ceiling air intakes, chicken house ventilation air intakes, automatic side wall air intakes, plastic livestock fans, calf protection breeding pens, fan Lens hood, etc.</p>
            <FeaturedProductsCard/>
            <div className="Featured-products-button">
                <button>more Products</button>
            </div>


        </div>

    </div>
  )
}

export default FeaturedProducts