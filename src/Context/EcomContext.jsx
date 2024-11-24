// import { createContext, useEffect, useState } from "react";
// import EcomData from "../data/EcomData";
// import useAlert from "../hooks/useAlert";

// const EcomContext = createContext();

// export const EcomProvider = ({ children }) => {
//   const [product, setProduct] = useState([]);
//   const [featured, setFeatured] = useState([]);
//   const [trending, setTrending] = useState([]);
//   const [loading, setLoading] = useState(0)
//   // const [ cartItems, setCartItems] = useStateState([]);
//   const [cartCount, setCartCount] = useState(0); // cartcount state
//   const [cartItems, setCartItems] = useState(() => {
//     const storedData = localStorage.getItem("cartItems"); // retrieves from localStorage
//     return storedData ? JSON.parse(storedData) : [];
//   });
//   const { alertInfo, showAndHide } = useAlert();
  
//   useEffect(() => {
//     // localStorage.setItem("cartItems", JSON.stringify(cartItems)); //set or into localStorage
//     const cartcount = cartItems?.products?.reduce((acc, curr) => {
//       return acc + curr.quantity;
//     }, 0);
//     const count = cartcount ? cartcount : 0;
//     setCartCount(count);
//   }, [cartItems]);

//   // fetch product
//   const fetchProduct = async () => {
//     try {
//       // const response = await fetch("https://localhost:5000/products", {
//       //   method: "GET",
//       //   headers: {
//       //     "Contex-Type": "application/json",
//       //   },
//       //   // body: JSON.stringify()
//       // })
//       const response = await fetch("http://localhost:5000/api/products");
//       const data = await response.json();
//       if (data.success) {
//         showAndHide("success", "Product Available");
//         setProduct(data.data);
//         setFeatured(product?.filter((product) => product.featured === true))
//         setTrending(product?.filter((product) => product.trending === true))
//       } else {
//         showAndHide("error", "Could not fetch product");
//       }
//       console.log(product, featured, trending);
//     } catch (error) {
//       console.log(error);
//     }
//     finally{
//       setLoading(1)
//     }
//   };

//   const addToCart = (prod) => {
//     const existingItem = cartItems.findIndex((item) => item.id === prod.id);
//     if (existingItem !== -1) {
//       const items = [...cartItems];
//       const itemsInCart = items[existingItem];
//       itemsInCart.quantity += prod.quantity;
//       itemsInCart.amount = itemsInCart.price * itemsInCart.quantity;
//       setCartItems(items);
//       showAndHide("success", "Product already exists in cart");
//     } else {
//       setCartItems([
//         ...cartItems,
//         { ...prod, amount: prod.price * prod.quantity },
//       ]);
//       showAndHide("success", "Product Added to cart");
//     }
//   };

//   const removeCartItems = (id) => {
//     if (
//       window.confirm(
//         "Are you sure you want to delete this product from your cart?"
//       )
//     ) {
//       setCartItems(cartItems.filter((items) => items.id !== id));
//       showAndHide("success", "Product Successfully deleted from cart");
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [loading]);


//   // // delete cart
//   // const removeCartItems = (prodItem, newQuantity) =-> (
//   //   if(window.confirm("Are you sure you want to delete this product from your cart?")) (
//   //     setCartItems(cartItems.filter(items => items.id 1== id))
//   //   )
//   // )

//   // UpdateCart cart
//   const updateCartItem = (prodItem, newQuantity) => {
//     const existingItem = cartItems.findIndex(
//       (items) => (items) => items.id === prodItem
//     );
//     if (existingItem !== -1) {
//       const items = [...cartItems];
//       const itemsInCart = items[existingItem];
//       itemsInCart.quantity = newQuantity;
//       itemsInCart.amount = itemsInCart.price * itemsInCart.quantity;
//       setCartItems(items);
//       console.log("items", items);
//       showAndHide("success", "Product already exists in cart");
//     }
//   };

//   // calcSubTotalAmount
//   const calcSubTotalAmount = () => {
//     return cartItems.reduce((acc, curr) => (acc, +curr.amount), 0);
//   };

//   // calcVatAmount
//   const calcVatAmount = () => {
//     const vat = calcSubTotalAmount() + 0.075;
//     return vat;
//   };

//   const calTotalAmount = () => {
//     const vat = calcVatAmount();
//     const subtotal = calcSubTotalAmount();
//     return vat + subtotal;
//   };


//   const [database, setDatabase] = useState([
//     {
//       fullname: "John",
//       email: "john@gmail.com",
//       username: "johndoe",
//       phoneNumber: "123457",
//       password: "Password",
//     },
//     {
//       fullname: "Jane",
//       email: "jane@gmail.com",
//       username: "janedoe",
//       phoneNumber: "123456",
//       password: "Password",
//     },
//   ]);

//   let errors = {};

//   const register = (fullname, email, password, phoneNumber, username) => {
//     console.log(fullname, email, password, phoneNumber, username);

//     const emailExists = database.some(
//       (el) => el.email.toLowerCase() == email.toLowerCase()
//     );
//     const phoneNumberExists = database.some(
//       (el) => el.phoneNumber == phoneNumber
//     );
//     const usernameExists = database.some(
//       (el) => el.username.toLowerCase() == username.toLowerCase()
//     );
//     console.log(username);
//     if (emailExists || phoneNumberExists || usernameExists) {
//       errors.email = emailExists ? "Email already exists" : "";
//       errors.phoneNumber = phoneNumberExists
//         ? "Phone Number already exists"
//         : "";
//       errors.username = usernameExists ? "Username already exists" : "";
//       return {
//         errors,
//         status: 400,
//       };
//     }

//     const newData = {
//       fullname,
//       email,
//       username,
//       password,
//       phoneNumber,
//     };
//     const newDatabase = [...database, newData];
//     setDatabase(newDatabase);
//     return {
//       data: newData,
//       status: 200,
//     };
//   };

//   return (
//     <EcomContext.Provider
//       value={{
//         product,
//         featured,
//         register,
//         database,
//         trending,
//         setDatabase,
//         alertInfo,
//         cartItems,
//         // setartCount,
//         cartCount,

//         addToCart,
//         removeCartItems,
//         updateCartItem,
//         calcSubTotalAmount,
//         calTotalAmount,
//         calcVatAmount,
//       }}
//     >
//       {children}
//     </EcomContext.Provider>
//   );
// };

// export default EcomContext;






















// EcomContext::

import { createContext, useState, useEffect, useContext } from "react";
import EcomData from "../data/EcomData";
import useAlert from "../hooks/useAlert";
import AuthContext from "../Context/AuthtContext";

const EcomContext = createContext();


export const EcomProvider = ({ children }) => {
    // const [product, setProduct] = useState(EcomData);
    const [product, setProduct] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount] = useState(0); // cartcount state
    const { alertInfo, showAndHide } = useAlert();
    const [state, dispatch ] = useContext(AuthContext)
    const isAuthenticated = state.accessToken !== null;
    console.log(isAuthenticated)

    const featured = product.filter(product => product.featured === true);
    const trending = product.filter(product => product.trending === true);
    console.log("cart",localStorage.getItem("cartItems"))

    useEffect(() => {
        fetchProduct() 
    }, [])

    useEffect(() => {
      fetchCart
    }, [cartItems])
 

    useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems)) //set or pass into localStorage
        // fetchCart()
        const cartcount = cartItems?.products?.reduce((acc, curr) => {
            return acc + curr.quantity
        }, 0)

        const count = cartcount ? cartcount : 0;
        setCartCount(count);
    }, [])

    // fetch products
    const fetchProduct = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify()
            })
            const data = await response.json()
            if(!response.ok) {
                showAndHide("error", "Could not fetch product")
            }else{
                showAndHide("success", "Product Available")
                setProduct(data.data)
            }
        }catch(error) {
            console.log(error)
        }
    }

    // add to cart 
    const addToCart = async (productId, quantity, product) => {
    if (isAuthenticated) {
      // if authenticated
      try {
        const res = await fetch("http://localhost:5000/api/add-to-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({ productId, quantity }), // pass the value of quantity and productId in the details
        });
        const data = await res.json();
        if (res.ok) {
          setCartItems(data.data); // add the data
          console.log(data.data);
          showAndHide("success", "You have successfully added item to cart");
        } else {
          showAndHide("error", "product was not added to cart");
        }
      } catch (error) {
        console.log(error);
      }
      // if authenticated done
    } else {
      // if unauthenticated
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || { products: [] };
      const itemIndex = storedCart.products.findIndex(
        (item) => item.product.id === productId
      );

      if (itemIndex >= 0) {
        storedCart.products[itemIndex].quantity += 1;
        storedCart.products[itemIndex].amount = product.price * storedCart.products[itemIndex].quantity;
      } else {
        storedCart.products.push({
          product,
          quantity: 1,
          amount: product.price * 1,
        });
        console.log(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(storedCart));
      showAndHide("success", "Product added to cart successfully!");
      setCartItems(storedCart); 
    }
  };

   // fetch cart
   const fetchCart = async () => {
    if (isAuthenticated) {
      // authenticated
      const res = await fetch("http://localhost:5000/api/carts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
      });
      const data = await res.json();
      console.log("without",data)
      if (res.ok) {
        // console.log("with produtcs",data.data.products)
        console.log(cartItems)
        console.log(setCartItems(data))
        setCartItems(data); // change the operator both statement has to be true
      } else {
        showAndHide("error", "Could not get cart");
      }
      // authenticated done
    } else {
      // unauthenticated
      const localCart = localStorage.getItem("cartItems");
      console.log(localCart);
      if (localCart) {
        setCartItems(JSON.parse(localCart));
      
      } else {
        setCartItems([]); // Clear cart items if nothing is in local storage
      }
      // unauthenticated done
    }
  };

    // const addToCart = (prodItem) => {
    //     const existingItems = cartItems.findIndex(items => items.id === prodItem.id)
    //     if(existingItems !== -1 ){
    //         const items = [...cartItems];
    //         const itemsInCart = items[existingItems]
    //         itemsInCart.quantity += prodItem.quantity
    //         itemsInCart.amount = itemsInCart.price * itemsInCart.quantity
    //         setCartItems(items)
    //         console.log("Items", items)
    //         showAndHide("error","Product already exists in cart")
    //     }else{
    //         console.log("Items", prodItem)
    //         setCartItems([
    //             ...cartItems, { ...prodItem, amount: prodItem.price * prodItem.quantity }
    //         ])
    //         showAndHide("success", "Product added to cart Successfully")
    //     }
    // }

    // delete cart
     // remove cart items
  const removeCartItems = async (productId) => {
    if (window.confirm("Are you sure you want to delete?..")) {
      if (isAuthenticated) {
        try {
          // authenticated
          const res = await fetch("http://localhost:5000/api/delete-cart-items", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({ productId }),
          });
          const data = await res.json();
          if (res.ok) {
            showAndHide("success", "Product Successfully deleted from cart");
            setCartItems(data);
          }
        } catch (error) {
          console.log(error);
        }
        // authenticated done
      } else {
        // unauthenticated
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
          products: [],
        };
        const itemIndex = storedCart.products.findIndex(
          (item) => item.product.id === productId
        );

        if (itemIndex >= 0) {
          storedCart.products.splice(itemIndex, 1);
          localStorage.setItem("cartItems", JSON.stringify(storedCart));
          setCartItems(storedCart); // Update the state to reflect changes in local storage
          showAndHide("success", "Product removed from cart successfully!");
        } else {
          showAndHide("error", "Product not found in cart.");
        }
        // unauthenticated done
      }
    }
  };

    // const removeCartItems = (id) => {
    //     if(window.confirm("Are you sure you want to delete this item from your cart?")) {
    //         setCartItems(cartItems.filter(items => items.id !== id))
    //         showAndHide("success", "Product Deleted Successfully!")
    //     }
    // }

    // updateCart Items 
    const updateCartItem = async (productId, quantity) => {
      const parsedQuantity = parseInt(quantity, 10);
    
      if (parsedQuantity < 0 || isNaN(parsedQuantity)) {
        showAndHide("error", "Quantity must be a positive number!");
        return;
      }
    
      if (isAuthenticated) {
        try {
          const res = await fetch("http://localhost:5000/api/update-cart-items", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({ productId, quantity: parsedQuantity }),
          });
    
          const data = await res.json();
          if (res.status === 200) {
            const existingItems = cartItems.products?.findIndex(
              (items) => items.product.id === productId
            );
    
            if (existingItems !== -1) {
              const itemsInCart = [...cartItems.products];
              const updatedCartItem = { ...itemsInCart[existingItems] };
              updatedCartItem.quantity = parsedQuantity;
              updatedCartItem.amount = updatedCartItem.product.price * parsedQuantity;
    
              // Remove item if quantity is 0
              if (parsedQuantity === 0) {
                itemsInCart.splice(existingItems, 1);
              } else {
                itemsInCart[existingItems] = updatedCartItem;
              }
    
              setCartItems({ ...cartItems, products: itemsInCart });
            }
          } else {
            showAndHide("error", "Could not update cart");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
          products: [],
        };
    
        const itemIndex = storedCart.products.findIndex(
          (item) => item.product.id === productId
        );
    
        if (itemIndex >= 0) {
          if (parsedQuantity === 0) {
            // Remove item if quantity is 0
            storedCart.products.splice(itemIndex, 1);
          } else {
            // Update quantity of item
            storedCart.products[itemIndex].quantity = parsedQuantity;
            storedCart.products[itemIndex].amount =
              storedCart.products[itemIndex].product.price * parsedQuantity;
          }
          localStorage.setItem("cartItems", JSON.stringify(storedCart));
          setCartItems(storedCart);
          showAndHide("success", "Cart updated successfully!");
        }
      }
    };
    
  // const updateCartItem = async (productId, quantity) => {
  //   if (isAuthenticated) {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/update-cart-items", {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": ${localStorage.getItem("auth-token")},
  //         },
  //         body: JSON.stringify({ productId, quantity }),
  //       });
  //       const data = await res.json();
  //       if (res.status === 200) {
  //         const existingItems = cartItems.products?.findIndex(
  //           (items) => items.product.id === productId
  //         );
  //         if (existingItems !== -1) {
  //           const itemsInCart = [...cartItems.products];
  //           const updateCartItems = itemsInCart[existingItems];
  //           updateCartItems.quantity = parseInt(quantity);
  //           updateCartItems.amount =
  //             updateCartItems.product.price * updateCartItems.quantity;
  //           setCartItems({ ...cartItems, products: itemsInCart });
  //         }
  //       } else {
  //         showAndHide("error", "Could not update cart");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     // Handle updating cart items in local storage for unauthenticated users
  //     const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {
  //       products: [],
  //     };
  //     const itemIndex = storedCart.products.findIndex(
  //       (item) => item.product.id === productId
  //     );

  //     if (itemIndex >= 0) {
  //       if (quantity === 0) {
  //         storedCart.products.splice(itemIndex, 1);
  //       } else {
  //         // Update quantity of item
  //         storedCart.products[itemIndex].quantity = parseInt(quantity, 10);
  //         storedCart.products[itemIndex].amount =
  //           storedCart.products[itemIndex].product.price *
  //           storedCart.products[itemIndex].quantity;
  //       }
  //       localStorage.setItem("cartItems", JSON.stringify(storedCart));
  //       setCartItems(storedCart);
  //       showAndHide("success", "Cart updated successfully!");
  //     }
  //   }
  // };
    // const updateCartItem = (prodItem, newQuantity) => {
    //     const existingItems = cartItems.findIndex(items => items.id === prodItem)
    //     if(existingItems !== -1 ){
    //         const items = [...cartItems];
    //         const itemsInCart = items[existingItems]
    //         itemsInCart.quantity = newQuantity
    //         itemsInCart.amount = itemsInCart.price * itemsInCart.quantity
    //         setCartItems(items)
    //         console.log("Items", items)
    //         showAndHide("success","Product already exists in cart")
    //     }
    // }

    // calculateTotalAmount
    const calcSubTotalAmount =() => {
        return cartItems?.products?.reduce((acc, curr) => acc + curr.amount, 0)
    }

    // calcvatAmount 
    const calcVatAmount = () => {
        const vat = calcSubTotalAmount() * 0.075;
        return vat
    }

    const calTotalAmount = () => {
        const vat = calcVatAmount()
        const subtotal = calcSubTotalAmount()
        return vat + subtotal
    }

    
    return (
        <EcomContext.Provider value={{
            product,
            featured,
            trending,
            alertInfo,
            cartItems,
            cartCount,
            showAndHide,
            isAuthenticated,
            setCartItems,
            fetchCart,

            addToCart,
            removeCartItems,
            updateCartItem,
            calcSubTotalAmount,
            calcVatAmount,
            calTotalAmount,
        }}>
            {children}
        </EcomContext.Provider>
    )
}

export default EcomContext;








//     // useEffect(() => {
//     //     const cartcount = cartItems.reduce((acc, curr) => {
//     //         return acc + curr.quantity
//     //     }, 0)

//     //     const count = cartcount ? cartcount : 0;
//     //     setCartCount(count)
//     // }, [cartItems])*
