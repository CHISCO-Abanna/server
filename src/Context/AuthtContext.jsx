// SIR PROMISE WORKS..........................

import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initalState = {
  accessToken: null,
};

function reducer(state, action) {
  if (action.type === "setToken") {
    state = { ...state, accessToken: action.payload };
  }
  return state;
}

export const AuthProvider = ({ children, defaultState = initalState }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
























// MY FILES....................................


// import { createContex, useContext, useReducer } from "react";


// const AuthContext = createContext()


// const initialState = {
//     accessToken: null
// };

// function reducer () {
//     if(useActionData.type === "setToken"){
//         state= {...state, accessToken: useActionData.payload}
//     }
//     return state;
// }


// export const AuthProvider = ({children, defaultState=initialState}) =>{
//     const [state, dispatch] = useReduce ([initialState, reducer])
//     return(
//         <AuthContext.Provider value={{state, dispatch}}>
//             {children}
//             </AuthContext.Provider>
//     )
// }

// export default AuthContext;