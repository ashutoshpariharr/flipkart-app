import * as actionTypes from '../constants/productConstaint';


  export const getProductReducer = (state = { products: [] },action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload };
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};  
  

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
};

// // reducer.js
// // authReducer.js

// const initialState = {
//   username: null,
//   password: null,
// };

// // Load authentication data from local storage
// const loadAuthDataFromStorage = () => {
//   const storedAuthData = localStorage.getItem('authData');
//   if (storedAuthData) {
//     return JSON.parse(storedAuthData);
//   }
//   return initialState;
// };

// // authReducer.js
// const authReducer = (state = loadAuthDataFromStorage(), action) => {
//   switch (action.type) {
//     case 'LOGIN_USER_SUCCESS':
//       const { firstname } = action.payload;
//       const newAuthData = { username: firstname, password: null };
//       localStorage.setItem('authData', JSON.stringify(newAuthData));

//       return {
//         ...state,
//         ...newAuthData,
//       };
//     case 'LOGIN_USER_FAILURE':
//       const errorAuthData = { username: null, errorMsg: action.payload };
//       localStorage.setItem('authData', JSON.stringify(errorAuthData));

//       return {
//         ...state,
//         ...errorAuthData,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
