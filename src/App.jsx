import Header from "./Component/Header";
import Banner from "./Component/Banner";
import FeaturedTrends from "./Component/FeaturedTrends";
import { EcomProvider } from "./Context/EcomContext";
import Products from "./Component/pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
// import Pricing from "./components/pages/Pricing";
import ProductDetails from "./Component/pages/ProductDetails";
import Cart from "./Component/pages/Cart";
import Checkout from "./Component/pages/Checkout";
import ThankYou from "./Component/pages/ThankYou";
import Register from "./Component/pages/Register";
import Login from "./Component/pages/login";
import Alert from "./Component/shared/Alert";
import CreateProduct from "./Component/shared/CreateProduct"
import { useEffect, useState } from "react";
import Loader from "./Component/shared/Loader";
import About from "./Component/About";
import { AuthProvider } from "./Context/AuthtContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [loading, setLoading] = useState(true);
  const {getItem} = useLocalStorage("auth-token");
  const token = getItem("auth-token");
  const authInitaToken = {accessToken: token ?? null}; 
  // const {getItem} = useLocalStorage("auth-token");

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


    // function App(){

  return (
    <>
    {/* <CreateProduct /> */}
    <AuthProvider defaultState={authInitaToken}>
      <EcomProvider>
        {loading ? (
          <Loader />
        ) : (
          <Router>
            <Header />
            <Alert />
            <Banner />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <About />
                    <FeaturedTrends />
                    <Contact />
                  </>
                }
              />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/pricing" element={<Pricing />} /> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/loader" element={<Loader />} /> */}
              <Route path="/products" element={<Products />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              {/* <Route path="/details/:id" element={<ProductDetails />} /> */}
            </Routes>
            <Footer />
          </Router>
        )}
      </EcomProvider>
      </AuthProvider>
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Banner from "./Component/Banner";
// import About from "./Component/About";
// import FeaturedTrends from "./Component/FeaturedTrends";
// import { EcomProvider } from "./Context/EcomContext";
// import Contact from "./Component/Contact";
// import Footer from "./Component/Footer";
// import Products from "./Component/pages/Products";
// import ProductDetails from "./Component/pages/ProductDetails";
// import Cart from "./Component/pages/Cart"
// import Checkout from "./Component/pages/Checkout";
// import Register from './Component/pages/Register'
// import Login from "./Component/pages/login";
// import Alert from "./Component/shared/Alert";

// function App() {
//   return (
//     <>
//       <EcomProvider>
//         <Router>
//           <Header />
//           <Alert />
//           <Banner />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <About />
//                   <FeaturedTrends />
//                   <Contact />
//                 </>
//               }
//             />
//             <Route path="/products" element={<Products />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/details/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart/>} />
//             <Route path="/checkout" element={<Checkout/>} />
//             {/* <Route path="/details/:id" element={<ProductDetails />} /> */}
//           </Routes>
//             <Footer />
//         </Router>
//       </EcomProvider>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import About from "./components/About";
// import FeaturedTrends from "./components/FeaturedTrends";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { EcomProvider } from "./context/EcomContext";
// import Products from "./components/pages/Products";
// import Aboutt from "./components/pages/Aboutt";
// import Pricing from "./components/pages/Pricing";
// import ProductDetails from "./components/pages/ProductDetails";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import ThankYou from "./components/pages/ThankYou";
// import Register from "./components/pages/Register";
// import Login from "./components/pages/Login"; // Uncommented if needed
// import Alert from "./components/shared/Alert";
// import Loader from "./components/shared/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loader = setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     return () => clearTimeout(loader); // Cleanup on unmount
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <EcomProvider>
//           <Router>
//             <Header />
//             <Alert />
//             <Banner />
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <About />
//                     <FeaturedTrends />
//                     <Contact />
//                   </>
//                 }
//               />
//               <Route path="/about" element={<Aboutt />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/pricing" element={<Pricing />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<Checkout />} />
//               <Route path="/thankyou" element={<ThankYou />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/details/:id" element={<ProductDetails />} />
//             </Routes>
//             <Footer />
//           </Router>
//         </EcomProvider>
//       )}
//     </>
//   );
// }

// export default App;
