// import { loginUserSuccess, loginUserFailure } from '../constants/productConstaint';
import * as actionTypes from '../constants/productConstaint';
import axios from 'axios';

const URL = 'https://flipkart-api-nh1s.onrender.com';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};









// // loginUser action
// export const loginUser = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post("http://localhost:8000/login", data);

//     if (response.status === 200) {
//       // Update the action to handle the nested structure of the response
//      dispatch(loginUserSuccess(response.data.data));
//      return response
//     } else {
//       dispatch(loginUserFailure("Invalid credentials"));
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 400) {
//       console.log("The provider username or password is incorrect")
//       dispatch(loginUserFailure("The provided username or password is incorrect."));
//     } else {
//       console.error("Error in loginUser thunk", error);
//       dispatch(loginUserFailure("An unexpected error occurred"));
//     }
//   }
// }; 

// // loginUserSuccess action
// export const loginUserComplite = (userData) => ({
//   type: 'LOGIN_USER_SUCCESS',
//   payload: userData,
// });
