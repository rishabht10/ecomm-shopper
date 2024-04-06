import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import  Breadcrum  from '../comps/Breadcrums/Breadcrum.jsx';
import  ProductDisplay  from '../comps/ProductDisplay/ProductDisplay';
import DescriptionBox from '../comps/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../comps/RelatedProducts/RelatedProducts.jsx';



 const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));

  return (
    <div>
     
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      
    </div>
  )
}

export default Product
