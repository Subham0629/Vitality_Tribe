import axios from "axios";

import{
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESSFULL,
    LOGOUT_USER,
    UPDATE_SUCCESSFULL
} from "./actionTypes"

import {
    user,
    type //{type:string,payload}
} from "./Reducer"
import { log } from "console";

export const loginUser = (state:user,dispatch:any)=>{
   
  const data = state;
  dispatch({ type: LOGIN_REQUEST });
 return axios({
    method: 'post',
    url: `https://anxious-fawn-petticoat.cyclic.app/users/login`,
    data: data,
  })
    .then((res) => {
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify([res.data.user]))
      localStorage.setItem("isAuth",JSON.stringify(true));
      dispatch({ type: LOGIN_SUCCESSFULL,payload : [res.data.token,[res.data.user]] })
      alert(res.data.msg) 
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE,
      })
    });
}

export const logoutUser = (dispatch:any)=>{
  console.log("logout user called");
  
  localStorage.removeItem("token");
  localStorage.removeItem("isAuth");
  dispatch({type: LOGOUT_USER})
}

export const updateUser = (state:any,id:string,dispatch:any)=>{
  const data = {details:state};
  dispatch({ type: LOGIN_REQUEST });
 return axios({
    method: 'patch',
    url: `https://anxious-fawn-petticoat.cyclic.app/users/update/${id}`,
    data:data,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: UPDATE_SUCCESSFULL,payload:res.data.user })
      alert(res.data.msg) 
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE,
      })
    });
}
 

 