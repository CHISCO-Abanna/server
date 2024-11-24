import React, { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import EcomContext from "../../Context/EcomContext";
// import AuthContext from "../../Context/AuthContext";
import AuthContext from "../../Context/AuthtContext";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { showAndHide, isAuthenticated } = useContext(EcomContext);
  const redirect = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    console.log("Submitted")

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          role,
          address,
          password,
          confirmPassword,
        })
      })

      const data = await res.json();
      if (!res.ok) {
        showAndHide("error", data.message);
      }else {
        showAndHide("success", data.message);
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
        <div className="h-full">
          <div className="m-auto mt-16 max-w-lg w-full rounded shadow-lg">
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="p-5">
                <h1 className="text-2xl font-bold mb-3 text-center">Signup</h1>
                <form onSubmit={registerHandler}>
                  <div className="mb-6 ">
                    <label htmlFor="" className="capitalize">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#ccc] p-2 border-none outline-none"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 ">
                    <label htmlFor="" className="capitalize">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#ccc] p-2 border-none outline-none"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 ">
                    <label htmlFor="" className="capitalize">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#ccc] p-2 border-none outline-none"
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 ">
                    <label htmlFor="" className="capitalize">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#ccc] p-2 border-none outline-none"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 ">
                    <label htmlFor="" className="capitalize">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#ccc] p-2 border-none outline-none"
                      id="phone"
                      onChange={(e) => setAddress(e.target.value)}
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
                  <div className="mb-6">
                    <label htmlFor="password" className="pb-2 capitalize">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full bg-[#ccc] p-2 border-none outline-none"
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                      Register
                    </button>
                  </div>
                </form>
                <div className="mb-3 text-end">
                  <Link to="/login">Already Have an account?...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Register












// import { useContext, useState } from "react";
// import { BsCheck, BsEye, BsEyeSlash } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import EcomContext from "../../Context/EcomContext";

// export default function Register() {
//   const [visibleA, setVisibleA] = useState(false);
//   const [visibleB, setVisibleB] = useState(false);
//   const [registered, setRegistered] = useState(false);

//   const [number, setNumber] = useState(0);
//   const [values, setValues] = useState({
//     fullname: "",
//     email: "",
//     username: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//     referral: "",
//   });
//   const initialErrors = {
//     fullname: "",
//     email: "",
//     username: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//     referral: "",
//   };
//   const [errors, setErrors] = useState(initialErrors);

//   const { database, setDatabase, register } = useContext(EcomContext);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     if (
//       !values.fullname.trim() ||
//       !values.username.trim() ||
//       !values.email.trim() ||
//       !values.phoneNumber.trim() ||
//       !values.password.trim() ||
//       !values.confirmPassword.trim() ||
//       !values.gender.trim() ||
//       !values.referral.trim()
//     ) {
//       setErrors({
//         fullname: values.fullname.trim() ? "" : "Please fill in your Firstname",
//         email: values.email.trim() ? "" : "Please fill in your Email",
//         username: values.username.trim() ? "" : "Please fill in your Username",
//         password: values.password.trim() ? "" : "Please fill in your Password",
//         confirmPassword: values.confirmPassword.trim()
//           ? ""
//           : "Please confirm your password",
//         gender: values.gender.trim() ? "" : "Please select your gender",
//         referral: values.referral.trim() ? "" : "How were you refereed here?",
//         phoneNumber: values.phoneNumber.trim()
//           ? ""
//           : "Please fill in your Phone number",
//       });
//       return;
//     }

//     if (values.password !== values.confirmPassword)
//       return setErrors({
//         ...errors,
//         confirmPassword: "Passwords dont match",
//         password: "Passwords dont match",
//       });
//     if (values.password.length < 8 || values.confirmPassword.length < 8)
//       return setErrors({
//         ...errors,
//         confirmPassword:
//           values.confirmPassword.length < 8
//             ? "Passwords should be at least 8 characters"
//             : "",
//         password:
//           values.password.length < 8
//             ? "Passwords should be at least 8 characters"
//             : "",
//       });
//     if (isNaN(values.phoneNumber))
//       return setErrors({
//         ...errors,
//         phoneNumber: "Please input a valid Phone number",
//       });
//     setErrors(initialErrors);
//     const validate = register(
//       values.fullname,
//       values.email,
//       values.password,
//       values.phoneNumber,
//       values.username
//     );

//     console.log(validate.data, database);

//     if (validate.status === 400) {
//       setErrors({ ...errors, ...validate.errors });
//     } else {
//       setDatabase([...database, validate.data]);
//       setRegistered(true);
//       console.log(database);
//     }
//   };

//   return (
//     <div className="container-box">
//       <div
//         className={` text-white my-10 rounded-md shadow-md duration-300 ${
//           registered ? "bg-white shadow-transparent" : "bg-blue-950"
//         } px-3 md:px-6 py-5 md:py-10 `}
//       >
//         {!registered ? (
//           <form action="" onSubmit={submit}>
//             <div className="grid w-full gap-5 md:grid-cols-2">
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Fullname
//                 </label>{" "}
//                 <input
//                   value={values.fullname}
//                   name="fullname"
//                   onChange={onChange}
//                   type="text"
//                   className={`input ${errors.fullname ? "border-red-600" : ""}`}
//                 />
//                 <p
//                   className={`${
//                     errors.fullname ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.fullname}
//                 </p>
//               </div>
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Username
//                 </label>{" "}
//                 <input
//                   value={values.username}
//                   name="username"
//                   onChange={onChange}
//                   type="text"
//                   className={`input ${errors.username ? "border-red-600" : ""}`}
//                 />
//                 <p
//                   className={`${
//                     errors.username ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.username}
//                 </p>
//               </div>
//             </div>
//             <div className="grid w-full mt-4 gap-5 md:grid-cols-2">
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Email
//                 </label>{" "}
//                 <input
//                   value={values.email}
//                   name="email"
//                   onChange={onChange}
//                   type="email"
//                   className={`input ${errors.email ? "border-red-600" : ""}`}
//                 />
//                 <p
//                   className={`${
//                     errors.email ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.email}
//                 </p>
//               </div>
//               <div className="">
//                 <label htmlFor="phoneNumber" className="label">
//                   Phone Number
//                 </label>{" "}
//                 <input
//                   value={values.phoneNumber}
//                   type="tel"
//                   id="phoneNumber"
//                   className={`input ${
//                     errors.phoneNumber ? "border-red-600" : ""
//                   }`}
//                   name="phoneNumber"
//                   onChange={onChange}
//                 />
//                 <p
//                   className={`${
//                     errors.phoneNumber ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.phoneNumber}
//                 </p>
//               </div>
//             </div>
//             <div className="grid w-full mt-4 gap-5 md:grid-cols-2">
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Password
//                 </label>{" "}
//                 <div className="">
//                   <div className="relative">
//                     {visibleA ? (
//                       <BsEye
//                         onClick={() => setVisibleA(false)}
//                         className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                       />
//                     ) : (
//                       <BsEyeSlash
//                         onClick={() => setVisibleA(true)}
//                         className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                       />
//                     )}
//                     <input
//                       value={values.password}
//                       type={visibleA ? "text" : "password"}
//                       className={`input ${
//                         errors.password ? "border-red-600" : ""
//                       }`}
//                       name="password"
//                       onChange={onChange}
//                     />
//                   </div>
//                   <p
//                     className={`${
//                       errors.password ? "h-5" : "h-0"
//                     } duration-300 text-red-600`}
//                   >
//                     {errors.password}
//                   </p>
//                 </div>
//               </div>
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Confirm Password
//                 </label>{" "}
//                 <div className="">
//                   <div className="relative">
//                     {visibleB ? (
//                       <BsEye
//                         onClick={() => setVisibleB(false)}
//                         className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                       />
//                     ) : (
//                       <BsEyeSlash
//                         onClick={() => setVisibleB(true)}
//                         className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
//                       />
//                     )}

//                     <input
//                       value={values.confirmPassword}
//                       type={visibleB ? "text" : "password"}
//                       className={`input ${
//                         errors.confirmPassword ? "border-red-600" : ""
//                       }`}
//                       name="confirmPassword"
//                       onChange={onChange}
//                     />
//                   </div>
//                   <p
//                     className={`${
//                       errors.confirmPassword ? "h-5" : "h-0"
//                     } duration-300 text-red-600`}
//                   >
//                     {errors.confirmPassword}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="grid w-full mt-4 gap-5 md:grid-cols-2">
//               <div className="">
//                 <label htmlFor="" className="label">
//                   Gender
//                 </label>{" "}
//                 <select
//                   value={values.gender}
//                   name="gender"
//                   onChange={onChange}
//                   type="text"
//                   className={`input ${errors.gender ? "border-red-600" : ""}`}
//                 >
//                   <option value=""></option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="notSay">Rather not say</option>
//                 </select>
//                 <p
//                   className={`${
//                     errors.gender ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.gender}
//                 </p>
//               </div>
//               <div className="">
//                 <label htmlFor="" className="label">
//                   How did you know about us?
//                 </label>{" "}
//                 <select
//                   type="text"
//                   value={values.referral}
//                   name="referral"
//                   onChange={onChange}
//                   className={`input ${errors.referral ? "border-red-600" : ""}`}
//                 >
//                   <option value=""></option>
//                   <option value="newspapper">Newspaper</option>
//                   <option value="google">Google</option>
//                   <option value="youtube">Youtube</option>
//                   <option value="socialMedia">Social Media</option>
//                   <option value="friend">From a Friend</option>
//                 </select>
//                 <p
//                   className={`${
//                     errors.referral ? "h-5" : "h-0"
//                   } duration-300 text-red-600`}
//                 >
//                   {errors.referral}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-end mt-10 md:mt-5">
//               <button
//                 type="submit"
//                 className="py-3 w-full hover:bg-green-500 hover:text-white md:w-fit rounded-md shadow-md duration-300 px-10 hover:scale-105 active:scale-100 bg-white text-blue-950 font-semibold"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="h-96 grid text-center place-content-center">
//             <div className="h-64 w-64 bg-white text-black border-2 border-green-500 rounded-full flex flex-col items-center justify-center">
//               <BsCheck className="text-green-600 text-7xl" />
//               <p className="text-xl text-center font-bold">
//                 Registration Successful!
//               </p>
//               <p className="text-xl text-center font-bold"> Welcome aboard!</p>
//             </div>
//             <div className="flex justify-center">
//               <Link
//                 to={"/login"}
//                 className="py-3 px-3 w-fit self-center bg-blue-600 text-white rounded-md mt-5"
//               >
//                 Please Login to Continue
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
