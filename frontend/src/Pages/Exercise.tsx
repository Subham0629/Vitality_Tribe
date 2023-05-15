import React from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { addExercise, getExercise } from '../Redux/ExerciseReducer/action'
import { useDispatch, useSelector } from 'react-redux'
  interface MyReducerState {
    isError: boolean;
    isLoading: boolean;
    data: any[]; 
  }
  interface RootState {
    ExerciseReducer: MyReducerState;
  }
  interface login {
    isError:boolean,
    isloading:boolean,
    isAuth : boolean,
    token : string,
  }
  
  interface store {
    LoginReducer : login
  }
  
const Exercise = () => {
  const [isOpen, setisOpen] = React.useState(true);
  const [quantity,setQuantity]=React.useState<any>(1)
const dispatch=useDispatch()
const stores=useSelector((store:RootState)=>store.ExerciseReducer.data)
const {token} = useSelector((store:store)=>store.LoginReducer)
React.useEffect(()=>{
  getExercise(dispatch)
},[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
  }

const handleSubmit=(id:String)=>{
let postData=stores.filter((el)=>el._id===id)
let data=postData[0]
let obj={...data}
delete obj._id
obj["Energy"]=obj.Energy*(+quantity)
obj["quantity"]=+quantity
addExercise(obj,token,dispatch)
}
  return (
    <div className='flex mt-[78px]'>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
      <div className={`w-4/5 p-6 border border-gray-400 ${isOpen ? "ml-72" : "ml-20"} duration-500`}>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
          Select Your Exercise
        </h1>
        <div className='w-full shadow-lg rounded-[5px] p-6 border border-gray-400 overflow-y-scroll h-[450px]'>
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Energy</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Time(in minutes)</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 ">
              {stores.map((el) =>
                <tr key={el._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {el.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{el.Energy}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {el.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* <div className="text-sm text-gray-500">{el.Energy}</div> */}
                    <button onClick={() => handleSubmit(el._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </td>
                </tr>
              )}


            </tbody>
          </table>
        </div>
        <div className='mt-[10px]'>
          <span className="ml-2 text-gray-700">Enter minutes you have worked :</span>
          <input className="border border-gray-400 px-4 py-2 rounded-lg ml-[5px]" type="Number" placeholder="Enter minutes"
            value={quantity} onChange={handleChange}
          ></input>

        </div>
      </div>
    </div>
  )
}

export default Exercise
// value={quantity}
// onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setQuantity(e.target.value)}