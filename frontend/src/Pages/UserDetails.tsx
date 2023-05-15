import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/RegisterReducer/action";
import { updateUser } from "../Redux/LoginReducer/action";
import SideNavigationBar from "../Components/SideNavigationBar";
import axios from "axios";

interface MyReducerState {
    isError:boolean,
    isloading:boolean,
    isAuth :boolean,
    token : String ,
    user : any 
  }
  interface RootState {
    LoginReducer: MyReducerState;
  }
  

const UserDetails = () => {
    const [reload,setReload]=useState(true)
    const [store,setStore]=useState<any>([])
    const [isOpen, setisOpen] = React.useState(true);
    const [userData,setUserData]=useState<any>({});
    const loginstore=JSON.parse(localStorage.getItem("user")!)

    const dispatch=useDispatch()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let {name,value}=e.target;
        // userData[name]=value;
        console.log(name,value);
        setUserData({...userData,[name]:value})
         
      }
      React.useEffect(()=>{
         axios.get(`https://anxious-fawn-petticoat.cyclic.app/users/single/${loginstore[0]._id}`)
         .then(res=>{
            console.log("kk",res.data)
            setStore(res.data)})
         .catch(err=>console.log(err))
      },[reload])
      


      const handleSubmit=()=>{
      updateUser(userData,loginstore[0]._id,dispatch).then(res=>setReload(prev=>!prev))
      
     // window.location.reload()
      }
    return (
        <div className='flex mt-[78px]'>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
            <div className={`mt-8 height-[500px] ${isOpen ? "ml-72" : "ml-20"} duration-500`}>
        <div className="flex w-4/5 m-auto gap-16">
            <div className="p-6 pb-10  border-r border-gray-700 border-1 shadow-lg rounded-md">
                <h2 className="text-2xl font-semibold text-">User Details</h2>
                <p>This information is public so please be careful what you share online!!</p>
                <div className="m-auto w-[60%] mt-2 ">
                        <img className="w-[50%] m-auto" src={store[0]?.image} alt="" />
                    </div>
                <div className="flex w-4/5 m-auto mt-10 gap-6">
                    
                    <div className="flex flex-col w-[80%]">
                        <div>
                            <div className="relative  rounded-md shadow-sm flex justify-between">
                            <h3 className="text-lg font-bold text-gray-800 text-left ">Name :</h3>
                                <h4 className="text-lg font-semibold text-gray-800 ">{store[0]?.firstname + store[0]?.lastname}</h4>
                            </div>
                            <br />
                            <div className="w-[100%] relative  rounded-md shadow-sm flex justify-between ">
                            <h3 className="text-lg font-bold text-gray-800 text-left ">Email :</h3>
                                <h4 className="text-lg font-semibold text-gray-800">{store[0]?.email}</h4>
                            </div>
                            <br />
                            <div>
                                <div className="relative  rounded-md shadow-sm flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left">Age :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.age}</h4>
                                </div>
                                <br />
                                <div className="relative  rounded-md shadow-sm flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left ">Gender :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.gender}</h4>
                                </div>
                                <br />
                                <div className="relative  rounded-md shadow-sm flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left ">Location :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.location}</h4>
                                </div>
                                <br />
                                <div className="relative  rounded-md shadow-sm  flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left ">Phone No. :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.phone}</h4>
                                </div>
                                <br />
                                <div className="relative  rounded-md shadow-sm flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left ">Weight :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.weight}</h4>
                                </div>
                                <br />
                                <div className="relative  rounded-md shadow-sm flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 text-left ">Height :</h3>
                                    <h4 className="text-lg font-semibold text-gray-800">{store[0]?.details?.height}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-16">
                        <h4 className="text-2xl font-bold text-gray-800">Add Additional User Details</h4>
                    <div>
                        <label htmlFor="age" className=" block text-left text-sm font-medium leading-6 text-gray-900">
                            Age
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="age"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Age"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender" className=" mt-2 block text-sm font-medium text-left leading-6 text-gray-900">
                            Gender
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="gender"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Gender"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="location" className="mt-2 block text-left text-sm font-medium leading-6 text-gray-900">
                            City
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="location"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your City"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mt-2 block text-left text-sm font-medium leading-6 text-gray-900">
                            Phone No.
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="number"
                                name="phone"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your Phone number"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mt-2 block text-left text-sm font-medium leading-6 text-gray-900">
                            Weight
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="number"
                                name="weight"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your Weight"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mt-2 block text-left text-sm font-medium leading-6 text-gray-900">
                            Height
                        </label>
                        <div className="relative  rounded-md shadow-sm">
                            <input
                                type="number"
                                name="height"
                                mb-4
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your Height"
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className=" bg-sky-600 text-lg hover:bg-blue-700 text-white mt-4 pl-7 pr-7 pt-2 pb-2 rounded-md"> Submit</button>
                </div>
            </div>
            </div>
            </div>
            )
}

 export default UserDetails;