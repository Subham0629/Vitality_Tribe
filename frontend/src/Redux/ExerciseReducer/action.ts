import axios from "axios";

import{ EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESSFULL, POST_EXERCISE_SUCCESSFULL } from "./actionTypes"
import { user } from "./Reducer";

export const getExercise = (dispatch:any)=>{
   
  dispatch({ type: EXERCISE_REQUEST });
  axios({
    method: 'get',
    url: `https://anxious-fawn-petticoat.cyclic.app/exercise`
  })
    .then((res) => {
      dispatch({ type: EXERCISE_SUCCESSFULL, payload:res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EXERCISE_FAILURE,
      })
    });
}

export const addExercise = (data:user,token:string,dispatch:any)=>{
  const headers = {
    Authorization:`Bearer ${token}`
  };
  dispatch({ type: EXERCISE_REQUEST });
  axios({
    method: 'post',
    url: `https://anxious-fawn-petticoat.cyclic.app/dashboard/add`,
    data,
    headers:headers,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: POST_EXERCISE_SUCCESSFULL })
      alert("Added Exercise to Dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EXERCISE_FAILURE,
      })
    });
}


 