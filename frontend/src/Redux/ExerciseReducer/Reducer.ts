
import{ EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESSFULL, POST_EXERCISE_SUCCESSFULL } from "./actionTypes"
interface MyObject {
    isError: boolean;
    isloading: boolean;
    data: any[]; 
  }
const init:MyObject = {
    isError:false,
    isloading:false,
    data:[]
}

export interface user{
   name : string,
   Energy : number,
   time : number,
   type? : string,
   quantity:number
}
export interface type{
   type : string,
   payload ?: Array<user>
}

export const Reducer = (state=init,{type,payload}:type) => {
    switch(type){
        case EXERCISE_REQUEST:
            return { ...state, isloading: true,isError:false};
            case EXERCISE_FAILURE:
            return { ...state, isloading: false,isError:true };
        case EXERCISE_SUCCESSFULL:
            return { ...state, isloading: false, data: payload };
            case POST_EXERCISE_SUCCESSFULL:
            return { ...state, isloading: false};
         default: return state
   }
  
}


