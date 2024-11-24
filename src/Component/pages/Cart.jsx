import React, { useContext } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import EcomContext from "../../Context/EcomContext";

function Cart() {
    const {cartItems, removeCartItems, updateCartItem, calcSubTotalAmount, calTotalAmount, calcVatAmount } = useContext(EcomContext)
    const newcart = cartItems?.products?.map((items) =>(
        <tr key={items.id}>
            <td>{items.product.id}</td>
            <td>{items.product.name}</td>
            <td>${items.product.price}</td>
            <td>
                <input type="number" className="w-24nborder-none outline-none p-1" name="" min="1" value={items.quantity} onChange={(e)  => updateCartItem(parseInt(items.product.id), e.target.value)} id="items" />
            </td>
            <td>{items.quantity}</td>
            <td>{items.amounts}</td>
            <td><button type="submit" onClick={() => removeCartItems(parseInt(items.product.id)) }><HiOutlineXMark className="text-2xl"/></button></td>
        </tr>
    ))
    
    return (
        <div className="container-box mt-12 mb-12">
            <div className="table">
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">S/N</th>
                            <th className="px-4 py-2 border">Products</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Update</th>
                            <th className="px-4 py-2 border">Quantity</th>
                            <th className="px-4 py-2 border">Amount</th>
                            <th className="px-4 py-2 border">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.products?.length > 0 ? (
                            newcart
                        ) : (
                            <h6 className="m-auto text-center uppercase">No items in Cart</h6>
                        )}
                        {/* <tr>
                            <td className="px-4 py-2 border text-center">1</td>
                            <td className="px-4 py-2 border">Product 1</td>
                            <td className="px-4 py-2 border">$123</td>
                            <td className="px-4 py-2 border">
                                <input type="number" className="w-24 border rounded outline-none p-1" />
                            </td>
                            <td className="px-4 py-2 border text-center">2</td>
                            <td className="px-4 py-2 border">$60.89</td>
                            <td className="px-4 py-2 border text-center">
                                <button aria-label="Delete item" type="button">
                                    <HiOutlineXMark className="text-2xl" />
                                </button>
                            </td>
                        </tr> */}
                        <tr>
                            <td colSpan="5" className="text-right pr-4 border">Subtotal:</td>
                            <td className="px-4 py-2 border">${calcSubTotalAmount()}</td>
                        </tr>
                        <tr>
                            <td colSpan="5" className="text-right pr-4 border">VAT (7.5%): ${calcVatAmount()}</td>
                            <td className="px-4 py-2 border">$75.00</td>
                        </tr>
                        <tr className="font-bold">
                            <td colSpan="5" className="text-right pr-4 border">Total: ${calTotalAmount()}</td>
                            <td className="px-4 py-2 border">$1075.00</td>
                        </tr>
                        <tr>
                            <td colSpan="7" className="text-right py-4">
                                <Link to="/checkout" className="btn bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded">
                                    Checkout
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;







































// import React from "react";
// import {HiOutlineXMark} from "react-icons/hi2";
// import {Link} from "react-router-dom";

// function Cart() {
//     return (
//         <div className="container-box mt-12 mb-12">
//             <div className="table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>S/N</th>
//                             <th>Products</th>
//                             <th>Price</th>
//                             <th>Update</th>
//                             <th>Quantity</th>
//                             <th>Amount</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>1</td>
//                             <td>Product 1</td>
//                             <td>$123</td>
//                             <td>
//                                 <input type="number" className="w-24 border-none outline-none p-1" name="" id="" />
//                             </td>
//                             <td>2</td>
//                             <td>$60.89</td>
//                             <td><button type="Submit"><HiOutlineXMark className="text-2xl"/></button></td>
//                         </tr>
//                         <tr>
//                             <td>1</td>
//                             <td>Product 1</td>
//                             <td>$123</td>
//                             <td>
//                                 <input type="number" className="w-24 border-none outline-none p-1" name="" id="" />
//                             </td>
//                             <td>2</td>
//                             <td>$60.89</td>
//                             <td><button type="Submit"><HiOutlineXMark className="text-2xl"/></button></td>
//                         </tr>
//                     </tbody>
//                 <tbody>
//                 <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>SubTotal: $1000.00</td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>Vat(7.5%): $1000.00</td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>Total: $1000.00</td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td><Link to="/checkout" className="btn hover:bg-purple-500 text-white">Checkout</Link></td>
//                     </tr>
//                 </tbody>
//                 </table>
//             </div>
//         </div>
//     );

// }

// export default Cart;