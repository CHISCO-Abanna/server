// import { Card } from "flowbite-react";
import React, {useContext} from "react";
import { Carousel } from "flowbite-react";
import ProductItems from "./ProductItems";
import EcomContext from "../Context/EcomContext";
// import { useContext } from "react";


function Trending() {
  const { trending } = useContext(EcomContext);
  return (
    <div>
      <div className="h-full">
        <h3>Trending</h3>
        <Carousel>
          {trending.map((items, index) => (
            <ProductItems                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             key={index} productitems_prop={items} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Trending;






















// function Trending() {
// //   const {Trending} = useContext(EcomContext);
// //   return (
// //     <div>
// //     <div className="h-full">
// //       <h3>Trending</h3>
// //       {/* <Carousel> */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3">
// //         {/* {console.log("Product from trending",product)} */}
// //         {Trending.map((items, index) => {
// //           <ProductItems key={items} ProductItems_prop={items}/>
// //         })

// //         /* <ProductItems >
// //         </ProductItems>
// //         <ProductItems />
// //         <ProductItems />
// //         <ProductItems /> */

// //       }
// //       </div>
// //       {/* </Carousel> */}
// //     </div>
// //     </div>
// //   );
// // }

// // export default Trending;
