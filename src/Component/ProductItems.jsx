import React, { useContext } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import EcomContext from '../Context/EcomContext'; // Import your context..................

function ProductItems({ productitems_prop }) {
  const {addToCart} = useContext(EcomContext); // Access addToCart from ...............

  const handleAddToCart = () => {
    addToCart(productitems_prop.                      id, 1, productitems_prop); // Add product with.................
    // addToCart({...productitems_prop, quantity: 1}); // Add product with.................
  };

  // console.log(" from product Items",productitems_prop)
    return (
        <Card className="max-w-sm p-0 m-0 border-none shadow-none">
          <div className="overflow-hidden">
            <img
              src={productitems_prop.image} 
              alt="Apple Watch Series 7 in colors pink, silver, and black" 
              className="w-full h-64 object-cover" 
            />
          </div>

          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {productitems_prop.name}
            </h5>
            {/* <p>{productitems_prop.description}</p> */}
          </a>
         
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${productitems_prop.price.toLocaleString()}</span>
            <button
            type="button"
            onClick={handleAddToCart} // Add product to cart on button
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </button>
            <Link to={`/details/${productitems_prop.id}`} className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            view
            </Link>
          </div>
        </Card>
    );
}

export default ProductItems;















// import React from "react";
// import { Card } from "flowbite-react";

// function ProductItems({ productitems_prop }) {
//   return (
//     <Card className="max-w-sm">
//       <div className=" w-full h-[200px] bg-[url('../public/img/55020045_31G_g.jpg')] bg-cover bg-center">tOP</div>
//       <a href="#">
//         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//           {productitems_prop.name}
//         </h5>
//       </a>

//       <div className="flex items-center justify-between">
//         <span className="text-3xl font-bold text-gray-900 dark:text-white">
//           ${productitems_prop.price}
//         </span>
//         <a
//           href="#"
//           className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//         >
//           Add to cart
//         </a>
//       </div>
//     </Card>
//   );
// }
// export default ProductItems;
