import React from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { addFood, getFood } from '../Redux/FoodReducer/action';

    interface MyReducerState {
      isError: boolean;
      isLoading: boolean;
      data: any[]; 
    }
    interface RootState {
      FoodReducer: MyReducerState;
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
const Food = () => {
  const [isOpen, setisOpen] = React.useState(true);
  const [quantity,setQuantity]=React.useState<any>(1)
  const dispatch=useDispatch()
const stores=useSelector((store:RootState)=>store.FoodReducer.data)
const {token} = useSelector((store:store)=>store.LoginReducer)

React.useEffect(()=>{
  getFood(dispatch)
},[])

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setQuantity(e.target.value)
}

const handleSubmit=(id:String)=>{
  let postData=stores.filter((el)=>el._id===id)
  let data=postData[0]
  let obj={...data}
  delete obj._id
  obj["Energy"]=obj.Energy*(+quantity)
  obj["Protein"]=obj.Protein*(+quantity)
  obj["Fat"]=obj.Fat*(+quantity)
  obj["Netcarbs"]=obj.Netcarbs*(+quantity)
  obj["quantity"]=+quantity
  addFood(obj,token,dispatch)
  }

  return (
    <div className='flex mt-[78px]'>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
      <div className={`w-4/5 p-6 border border-gray-400 my-8 ${isOpen ? "ml-72" : "ml-20"} duration-500`}>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
        Select Your Food
</h1>
<div className='w-full shadow-lg rounded-[5px] p-6 border border-gray-400 overflow-y-scroll h-[450px]'>
        <table className="min-w-full divide-y divide-gray-200 ">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Energy</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Protein</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Carbs</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fat</th>
    </tr>
  </thead>
  
  <tbody className="bg-white divide-y divide-gray-200 ">
    {stores?.map((el)=>
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
        {el.Protein}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        {el.Netcarbs}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        {el.Fat}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <button onClick={()=>handleSubmit(el._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add
</button>
    </td>
  </tr>
    )}
    
   
  </tbody>
</table>
</div>
<div className='mt-[10px]'>
<span className="ml-2 text-gray-700">Enter the quantity of food :</span>
<input className="border border-gray-400 px-4 py-2 rounded-lg ml-[5px]" type="Nubber" placeholder="Enter quantity"
value={quantity} onChange={handleChange}
></input>

</div>
</div>
    </div>
  )
}

export default Food