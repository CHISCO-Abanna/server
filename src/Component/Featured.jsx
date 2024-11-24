import React, { useContext } from "react";
import ProductItems from "./ProductItems";
import EcomContext from "../Context/EcomContext";
import { Carousel } from "flowbite-react";

function Featured() {
  const { featured } = useContext(EcomContext);
  return (
    <div>
      <div className="h-full">
        <h3>Featured</h3>
        <Carousel>
          {featured.map((items, index) => (
            <ProductItems key={index} productitems_prop={items} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;































// import React, { useContext } from "react";
// import ProductItems from "./ProductItems";
// import EcomContext from "../Context/EcomContext";
// // import ( useContext) from "react";


// function Featured() {
//   const {Product} =useContext(EcomContext);
//   return (
//     <div>
//       <h3>Featured</h3>
//       <div>
//       <div className="h-full">
//         <h3>Trending</h3>
//         {/* <Carousel> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3">
//           {Product.map((items, index) =>(
//             <ProductItems key={index} ProductItems_prop={items} />
//           ))}
//     </div>
//     {/* </Carousel> */}
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Featured;
