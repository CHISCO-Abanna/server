import React, { useContext } from "react";
import { HiOutlineXMark } from "react-icons/hi2"; // Added missing import for delete icon
import EcomContext from "../../Context/EcomContext";

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="container-box mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3">
        {/* Table */}
        <div className="table md:col-span-2">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border text-center">S/N</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border text-center">Quantity</th>
                <th className="px-4 py-2 border text-center">Price</th>
                <th className="px-4 py-2 border text-center">Subtotal</th>
                <th className="px-4 py-2 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Product 1</td>
                <td className="px-4 py-2 border text-center">
                  <input type="number" className="w-24 border rounded p-1" defaultValue={2} />
                </td>
                <td className="px-4 py-2 border text-center">$123</td>
                <td className="px-4 py-2 border text-center">$246</td>
                <td className="px-4 py-2 border text-center">
                  <button aria-label="Delete item" type="button">
                    <HiOutlineXMark className="text-2xl" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">2</td>
                <td className="px-4 py-2 border">Product 2</td>
                <td className="px-4 py-2 border text-center">
                  <input type="number" className="w-24 border rounded p-1" defaultValue={2} />
                </td>
                <td className="px-4 py-2 border text-center">$60.89</td>
                <td className="px-4 py-2 border text-center">$121.78</td>
                <td className="px-4 py-2 border text-center">
                  <button aria-label="Delete item" type="button">
                    <HiOutlineXMark className="text-2xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Form */}
        <div className="cform bg-slate-400 px-4 py-6 mt-4 rounded-md md:col-span-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" name="fullName" id="fullName" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm">Address</label>
              <input type="text" className="w-full p-2 border rounded" name="address" id="address" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm">Email Address</label>
              <input type="email" className="w-full p-2 border rounded" name="email" id="email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-sm">Payment Method</label>
              <select name="paymentMethod" id="paymentMethod" className="w-full p-2 border rounded" required>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm">Total</label>
              <h5 className="bg-white p-2 rounded">$456</h5>
            </div>
            <div>
              <button type="submit" className="btn hover:bg-purple-500 bg-purple-700 text-white p-2 rounded">
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
































// import React from "react";
// import EcomContext from "../../Context/EcomContext";

// function Checkout() {

//     <tr>
//     <td className="px-4 py-2 border text-center">1</td>
//     <td className="px-4 py-2 border">Product 1</td>
//     <td className="px-4 py-2 border">$123</td>
//     <td className="px-4 py-2 border">
//         <input type="number" className="w-24 border rounded outline-none p-1" />
//     </td>
//     <td className="px-4 py-2 border text-center">2</td>
//     <td className="px-4 py-2 border">$60.89</td>
//     <td className="px-4 py-2 border text-center">
//         <button aria-label="Delete item" type="button">
//             <HiOutlineXMark className="text-2xl" />
//         </button>
//     </td>
// </tr>

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // handle form submission logic here
//     };

//     return (
//         <div className="container-box mt-12 mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3"></div>
//             {/* Table */}
//             <div className="table md:col-span-2">
//                 <table className="min-w-full border">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="px-4 py-2 border">S/N</th>
//                             <th className="px-4 py-2 border">Products</th>
//                             <th className="px-4 py-2 border">Quantity</th>
//                             <th className="px-4 py-2 border">Amount</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="px-4 py-2 border">1</td>
//                             <td className="px-4 py-2 border">Product 1</td>
//                             <td className="px-4 py-2 border">2</td>
//                             <td className="px-4 py-2 border">$60.89</td>
//                         </tr>
//                         <tr>
//                             <td className="px-4 py-2 border">2</td>
//                             <td className="px-4 py-2 border">Product 2</td>
//                             <td className="px-4 py-2 border">2</td>
//                             <td className="px-4 py-2 border">$60.89</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             {/* Form */}
//             <div className="cform bg-slate-400 px-4 py-6 mt-4 rounded-md md:col-span-1">
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="fullName" className="block text-sm">Full Name</label>
//                         <input type="text" className="w-full p-2 border rounded" name="fullName" id="fullName" required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="address" className="block text-sm">Address</label>
//                         <input type="text" className="w-full p-2 border rounded" name="address" id="address" required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm">Email Address</label>
//                         <input type="email" className="w-full p-2 border rounded" name="email" id="email" required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="paymentMethod" className="block text-sm">Payment Method</label>
//                         <select name="paymentMethod" id="paymentMethod" className="w-full p-2 border rounded" required>
//                             <option value="credit-card">Credit Card</option>
//                             <option value="paypal">PayPal</option>
//                             <option value="bank-transfer">Bank Transfer</option>
//                         </select>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm">Total</label>
//                         <h5 className="bg-white p-2 rounded">$456</h5>
//                     </div>
//                     <div>
//                         <button type="submit" className="btn hover:bg-purple-500 bg-purple-700 text-white p-2 rounded">
//                             Pay
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Checkout;















































// // import React from "react";

// // function Checkout() {
// //     return (
// //         <div className="container-box mt-12 mb-12">
// //             <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3"></div>
// //             {/*table*/}
// //             <div className="table md:col-span-2">
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>S/N</th>
// //                             <th>Products</th>
// //                             <th>Quanrity</th>
// //                             <th>Amount</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                 <tr>
// //                     <td>1</td>
// //                     <td>Product 1</td>
// //                     <td>2</td>
// //                     <td>$60.89</td>
// //                 </tr>
// //                 <tr>
// //                     <td>2</td>
// //                     <td>Product 2</td>
// //                     <td>2</td>
// //                     <td>$60.89</td>
// //                 </tr>
// //                 </tbody>
// //                 </table>
// //             </div>
// //             {/* table */}
// //             {/* form */}
// //             <div className="cform bg-slate-400 px-2 py-3">
// //                 <form action="">
// //                     <div className="mb-2">
// //                         <label htmlFor="">Full Name</label>
// //                         <input type="text" className="w-full border-none outline-none" name="" id="" />
// //                     </div>
// //                     <div className="mb-2">
// //                         <label htmlFor="">Address</label>
// //                         <input type="text" className="w-full border-none outline-none" name="" id="" />
// //                     </div>                  
// //                     <div className="mb-2">
// //                         <label htmlFor="">Email Address</label>
// //                         <input type="text" className="w-full border-none outline-none" name="" id="" />
// //                     </div>                  
// //                     <div className="mb-2">
// //                         <label htmlFor="">Payment Method</label>
// //                         <input type="text" className="w-full border-none outline-none" name="" id="" />
// //                     </div>                  
// //                     <div className="mb-2">
// //                         <label htmlFor="">Total</label>
// //                         {/* <input type="text" className="w-full border-none outline-none" name="" id="" /> */}
// //                         <h5 className="bg-[#fff] p-2">$456</h5>
// //                     </div> 
// //                     <div className="mb-2">
// //                         <button type="Submit" className="btn hover:bg-purple-500">Pay</button>
// //                     </div>
// //                 </form>
// //                 </div>
// //                 {/* </form> */}
// //                 </div>
// //     );
    
// // }

// // export default Checkout;