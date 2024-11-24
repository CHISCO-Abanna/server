import React, { useContext } from "react";
import EcomContext from "../Context/EcomContext";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import AuthContext from "../Context/AuthtContext";

function Header() {
  const { cartCount } = useContext(EcomContext);
  // const [state, dispatch] = useContext(AuthContext)
  // const redirect - useNavigate()
  // console.log(cartCount)

  // function Header() {
  //   const { cartCount } = useContext(EcomContext);
    const location = useLocation();

    function logout (e){
      e.preventDafualt()
      console.log("logout out")
      dispatchEvent({type: "setToken", payload: null})
      localStorage.removeItem("auth-token")
      redirect("/")
    }

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
  ];

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CHISCO-Abanna
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">CHISCO-WIRE</span>
              <span className="block truncate text-sm font-medium">
                brancketchisco@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full flex items-center space-x-2" to="/cart">
                <CiShoppingCart className="text-xl" />
                <span>Cart {cartCount}</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "text-blue-500" : ""}
            >
              {link.label}
            </Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;








































// import React, { useContext } from "react";
// import EcomContext from "../Context/EcomContext";
// import { Link, useLocation } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci";
// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// // import EcomContext from "../Context/EcomContext";
// import EcomContext from "../Context/EcomContext";
// // import {cartCount} from "../Context/EcomContext"

// function Header() {
//   const {cartCount} = useContext(EcomContext)
//   const location = useLocation();

//   return (
//     <div>
//       <Navbar fluid rounded>
//         <Navbar.Brand href="/">
//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//             Flowbite React
//           </span>
//         </Navbar.Brand>
//         <div className="flex md:order-2">
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar
//                 alt="User settings"
//                 img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                 rounded
//               />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">Bonnie Green</span>
//               <span className="block truncate text-sm font-medium">
//                 name@flowbite.com
//               </span>
//             </Dropdown.Header>
//             <Dropdown.Item>
//               Dashboard
//             </Dropdown.Item>
//             <Dropdown.Item>
//               Settings
//             </Dropdown.Item>
//             <Dropdown.Item>
//               <Link className="w-full flex items-center space-x-2" to="/cart">
//                 <CiShoppingCart className="text-xl" />
//                 <span>Cart {cartCount}</span>
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//           <Navbar.Toggle />
//         </div>
//         <Navbar.Collapse>
//           <Link
//             to="/"
//             className={`${
//               location.pathname === "/" ? "text-blue-500" : ""
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`${
//               location.pathname === "/about" ? "text-blue-500" : ""
//             }`}
//           >
//             About
//           </Link>
//           <Link
//             to="/products"
//             className={`${
//               location.pathname === "/products" ? "text-blue-500" : ""
//             }`}
//           >
//             Products
//           </Link>
//           <Link
//             to="/pricing"
//             className={`${
//               location.pathname === "/pricing" ? "text-blue-500" : ""
//             }`}
//           >
//             Pricing
//           </Link>
//           <Link
//             to="/contact"
//             className={`${
//               location.pathname === "/contact" ? "text-blue-500" : ""
//             }`}
//           >
//             Contact
//           </Link>
//           <Link
//             to="/register"
//             className={`${
//               location.pathname === "/register" ? "text-blue-500" : ""
//             }`}
//           >
//             Register
//           </Link>
//           <Link
//             to="/login"
//             className={`${
//               location.pathname === "/login" ? "text-blue-500" : ""
//             }`}
//           >
//             Login
//           </Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;






























// // import React from "react";
// // import { Link } from 'react-router-dom';
// // import {CiShoppingCart } from "react-icons/ci";
// // "use client";
// // import { Avatar, Dropdown, Navbar } from "flowbite-react";



// // function Header() {
// //   return (
// //     <div>
// //       <Navbar fluid rounded>
// //         <Navbar.Brand href="https://flowbite-react.com">
// //           {/* <img
// //             src="/favicon.svg"
// //             className="mr-3 h-6 sm:h-9"
// //             alt="Flowbite React Logo"
// //           /> */}
// //           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
// //             Flowbite React
// //           </span>
// //         </Navbar.Brand>
// //         <div className="flex md:order-2">
// //           <Dropdown
// //             arrowIcon={false}
// //             inline
// //             label={
// //               <Avatar
// //                 alt="User settings"
// //                 img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
// //                 rounded
// //               />
// //             }
// //           >
// //             <Dropdown.Header>
// //               <span className="block text-sm">Bonnie Green</span>
// //               <span className="block truncate text-sm font-medium">
// //                 name@flowbite.com
// //               </span>
// //             </Dropdown.Header>
// //             <Dropdown.Item>Dashboard</Dropdown.Item>
// //             <Dropdown.Item>Settings</Dropdown.Item>
// //             <Dropdown.Item><Link className='w-full flex' to={"/cart"}><CiShoppingCart className="text-xl"/>Cart</Link></Dropdown.Item>
// //             <Dropdown.Divider />
// //             <Dropdown.Item>Sign out</Dropdown.Item>
// //           </Dropdown>
// //           <Navbar.Toggle />
// //         </div>
// //         <Navbar.Collapse>
// //           <Navbar.Link href="/" active>
// //             Home
// //           </Navbar.Link>
// //           <Navbar.Link href="#">About</Navbar.Link>
// //           <Navbar.Link href="/products">Products</Navbar.Link>
// //           <Navbar.Link href="#">Pricing</Navbar.Link>
// //           <Navbar.Link href="#">Contact</Navbar.Link>
// //         </Navbar.Collapse>
// //       </Navbar>
// //     </div>
// //   );
// // }

// // export default Header;
