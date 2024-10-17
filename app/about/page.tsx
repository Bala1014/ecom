// app/products/page.jsx
import { Suspense } from 'react';
import ProductList from './ProductList';


export default function ProductPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList/>
      </Suspense>
    </div>
  );
}

