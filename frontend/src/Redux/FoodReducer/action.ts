import axios from "axios";

import{ FOOD_FAILURE, FOOD_REQUEST, FOOD_SUCCESSFULL, POST_FOOD_SUCCESSFULL } from "./actionTypes"
import { user } from "./Reducer";

export const getFood = (dispatch:any)=>{
   
  dispatch({ type: FOOD_REQUEST });
  axios({
    method: 'get',
    url: `https://anxious-fawn-petticoat.cyclic.app/food`
  })
    .then((res) => {
      dispatch({ type: FOOD_SUCCESSFULL, payload:res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FOOD_FAILURE,
      })
    });
}

export const addFood = (data:user,token:string,dispatch:any)=>{
  console.log(data)
  const headers = {
    Authorization:`Bearer ${token}`
  };
  dispatch({ type: FOOD_REQUEST });
  axios({
    method: 'post',
    url: `https://anxious-fawn-petticoat.cyclic.app/dashboard/add`,
    data,
    headers:headers,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: POST_FOOD_SUCCESSFULL })
      alert("Added Food to Dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FOOD_FAILURE,
      })
    });
}



 