import axios from "axios"

import {
  DASHBOARD_FAILURE,
  DASHBOARD_REQUEST,
  GET_DASHBOARD_PRODUCT_SUCCESS
} from "./actionTypes"



export const getDashboardItems = (token:string, item:string, dispatch:any) => {
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const data = {
      userId: item
    };
    dispatch({ type: DASHBOARD_REQUEST });
    axios({
      method: 'get',
      url: `https://anxious-fawn-petticoat.cyclic.app/dashboard/`,
      data: data,
      headers: headers
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_DASHBOARD_PRODUCT_SUCCESS,payload : res.data})
        localStorage.setItem("dashboard", JSON.stringify(res.data))
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: DASHBOARD_FAILURE });
        console.log(err);
      });
  }
