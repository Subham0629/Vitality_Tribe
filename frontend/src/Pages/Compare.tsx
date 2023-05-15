import React from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompareData } from '../Redux/CommunityReducer/action';
import CompareStats from '../Components/CompareStats';
interface MyReducerState {
    isError: boolean;
    isLoading: boolean;
    data: any[];
    userData : any;
    compareData : any;
  }
  interface RootState {
    CommunityReducer: MyReducerState;
  }
const Compare = () => {
  const [isOpen, setisOpen] = React.useState(true);
  const {userID} = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.CommunityReducer)
  
  React.useEffect(()=>{
    getCompareData(userID,dispatch)
  },[])
  console.log(store);
  return (
    <div className='flex mt-[78px] '>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
      <div className={`flex w-3/4 my-8 ${isOpen ? "ml-[320px]" : "ml-[150px]"} duration-500 `}>
           {
            store.compareData!=0 ? <div className='flex w-full justify-between'>
             <div className='w-[50%] border border-gray shadow-lg rounded-lg p-4'>
                <p className='text-3xl'>User Name : {store.userData.user}</p>
              <CompareStats obj={store.userData}/>
             </div>
             <div  className='w-[50%] border border-gray shadow-lg rounded-lg p-4'>
             <p className='text-3xl'>User Name : {store.compareData.user}</p>
              <CompareStats obj={store.compareData}/>
             </div>
            </div>:<div></div>
           }
        </div>
    </div>
  )
}

export default Compare