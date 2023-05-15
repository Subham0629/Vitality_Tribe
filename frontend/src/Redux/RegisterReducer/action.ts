import axios from "axios";

import{
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESSFULL
} from "./actionTypes"

import {
    user,
    type //{type:string,payload}
} from "./Reducer"

export const addUser = (state:user,dispatch:any)=>{
   
  const data = state;
  dispatch({ type: REGISTER_REQUEST });
  axios({
    method: 'post',
    url: `https://anxious-fawn-petticoat.cyclic.app/users/register`,
    data: data,
  })
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESSFULL })
      alert(res.data.msg) 
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE,
      })
    });
}





 