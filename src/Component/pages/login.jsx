// LOGIN:::

import React, { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import EcomContext from "../../Context/EcomContext";
// import useLocalStorage from "../../hooks/useLocalStorage";
import useLocalStorage from "../../hooks/useLocalStorage";
import AuthContext from "../../Context/AuthtContext";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch ]= useContext(AuthContext)
    const { showAndHide, isAuthenticated, setCartItems, fetchCart } = useContext(EcomContext);
    const { setItem, getItem, deleteItem } = useLocalStorage("auth-token");
    const redirect = useNavigate()

    if (isAuthenticated) {
      return <Navigate to="/" />
    }
    
    const loginHandler = async (e) => {
      e.preventDefault();
      if (!email || !password) {
        showHide("error", "Email and Passowrd is required")
        return;
      } 
      try {
        const res = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          showAndHide("error", data.message);
        }else {
          dispatch({ type: "setToken", payload: data.token });
          setItem("auth-token", data.token);
          const cartDataItem = JSON.parse(localStorage.getItem("cartItems"));
          if(cartDataItem){
            await Promise.all(cartDataItem?.products?.map(async (item) => {
              const response = await fetch("http://localhost:5000/api/add-to-cart", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": getItem("auth-token"),  // Use the token directly
                },
                body: JSON.stringify({ productId: parseInt(item.product.id), quantity: item.quantity }),
              });

              const cartdata = await response.json();
              console.log( "todday", cartdata);
              if (res.ok) {
                setCartItems(cartdata.data);
                fetchCart();
                showAndHide("success", "added to cart successfully")
              } else {
                console.error("Failed to add items to the backend cart");
              }
            }))
            localStorage.removeItem("cartItems");
          }
          redirect("/");
          showAndHide("success", data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
    <div className="h-full">
      <div className="m-auto mt-16 max-w-lg w-full rounded shadow-lg">
        <div className="grid grid-cols-1 items-center justify-center">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-3 text-center">Signin</h1>
            <form onSubmit={loginHandler}>
              <div className="mb-6 ">
                <label htmlFor="" className="capitalize">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#ccc] p-2 border-none outline-none"
                  name=""
                  id="email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="pb-2 capitalize">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-[#ccc] p-2 border-none outline-none"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-purple-600 w-24 p-2 text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mb-3 flex justify-between items-center">
              <Link to="/register">Don't have an account?..</Link>
              <Link to="">Forgot password?..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login






















// import { useContext, useState } from "react";
// import { BsCheck, BsEye, BsEyeSlash } from "react-icons/bs";
// import EcomContext from "../../Context/EcomContext";

// export default function Login() {
//   const [visible, setVisible] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const [values, setValues] = useState({
//     usernameEmail: "",
//     password: "",
//   });

//   const { database } = useContext(EcomContext);

//   const initialErrors = {
//     usernameEmail: "",
//     password: "",
//   };
//   const [errors, setErrors] = useState(initialErrors);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };


//   const submit = (e) => {
//     e.preventDefault();
//     if (!values.usernameEmail.trim() || !values.password.trim()) {
//       setErrors({
//         usernameEmail: values.email.trim() ? "" : "Please fill in your Email",
//         password: values.password.trim() ? "" : "Please fill in your Password",
//       });
//       return;
//     }
//     if (
//       database.some(
//         (el) =>
//           el.username === values.usernameEmail ||
//           el.email === values.usernameEmail
//       )
//     ) {
//       const passwordCorrect = database.some(
//         (el) =>
//           (el.email === values.usernameEmail ||
//             el.username === values.usernameEmail) &&
//           el.password === values.password
//       );
//       if (!passwordCorrect) {
//         return setErrors({ ...errors, password: "Password Incorrect" });
//       }
//       setErrors(initialErrors);
//       setLoggedIn(true);
//       return;
//     } else {
//       setErrors({
//         ...errors,
//         usernameEmail: "Email / Usernmae does not exist",
//       });
//       return;
//     }
//   };

//   return (
//     <div
//       className={`container-box my-10 rounded-md shadow-md duration-300 ${
//         loggedIn ? "bg-white shadow-transparent" : "bg-blue-950"
//       } p-6 py-10 `}
//     >
//       {!loggedIn ? (
//         <form action="" onSubmit={submit}>
//           <div className="grid w-full mt-4 gap-5">
//             <div className="">
//               <label htmlFor="" className="label">
//                 Username or Email
//               </label>{" "}
//               <input
//                 value={values.fullname}
//                 name="usernameEmail"
//                 onChange={onChange}
//                 type="text"
//                 className={`input ${
//                   errors.usernameEmail ? "border-red-600" : ""
//                 }`}
//               />
//               <p
//                 className={`${
//                   errors.usernameEmail ? "h-5" : "h-0"
//                 } duration-300 text-red-600`}
//               >
//                 {errors.usernameEmail}
//               </p>
//             </div>
//             <div className="">
//               <label htmlFor="" className="label">
//                 Password
//               </label>{" "}
//               <div className="">
//                 <div className="relative">
//                   {visible ? (
//                     <BsEye
//                       onClick={() => setVisible(false)}
//                       className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                     />
//                   ) : (
//                     <BsEyeSlash
//                       onClick={() => setVisible(true)}
//                       className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                     />
//                   )}
//                   <input
//                     value={values.password}
//                     type={visible ? "text" : "password"}
//                     className={`input ${
//                       errors.password ? "border-red-600" : ""
//                     }`}
//                     name="password"
//                     onChange={onChange}
//                   />
//                 </div>
//                 <p
//                   className={`${
//                     errors.password ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.password}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end mt-5">
//             <button
//               type="submit"
//               className="py-3 rounded-md shadow-md duration-300 px-10 hover:scale-105 active:scale-100 bg-white text-blue-950 font-semibold"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="h-96 grid place-content-center">
//           <div className="h-64 w-64 bg-white border-2 border-green-500 rounded-full flex flex-col items-center justify-center">
//             <BsCheck className="text-green-600 text-7xl" />
//             <p className="text-xl text-center font-bold">Login Successful!</p>
//             <p className="text-xl text-center font-bold">
//               {" "}
//               Welcome to your Dahsboard!
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
