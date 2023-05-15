import React, { useEffect, useState } from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardItems } from '../Redux/DashboardReducer/action'
import Stats from '../Components/Stats'

import Example from '../Components/PieChart'
import Charts from '../Components/PieChart'
import Home from './Home'
import Chart from '../Components/PieChart'
import StackedBarChart from '../Components/StackedChart'
import { addToCommunity } from '../Redux/CommunityReducer/action'

interface login {
  isError: boolean,
  isloading: boolean,
  isAuth: boolean,
  token: string,
  user: any
}

interface store {
  LoginReducer: login
}

interface dashboard {
  isError: boolean,
  isloading: boolean,
  dashboard: any
}

interface dashboardstore {
  DashboardReducer: dashboard
}

const initialObj = {
  userID: "",
  user: "",
  Energy: 0,
  Energy_percentage: 0,
  Protein_percentage: 0,
  Fat_percentage: 0,
  Netcarbs_percentage: 0,
  Protein: 0,
  Fat: 0,
  Netcarbs: 0,
  quantity: { type: Number, default: 1 },
  caloriesburnt: 0,
  caloriesremaining: 0,
  caloriesconsumed: 0
}

const DashboardPage = () => {
  const [isOpen, setisOpen] = React.useState(true);
  const [state, setState] = useState(initialObj)
  const { token, user } = useSelector((store: store) => store.LoginReducer);
  const { dashboard } = useSelector((store: dashboardstore) => store.DashboardReducer);
  const dispatch = useDispatch();
  const data1 = [
    { name: 'Total Calories Consumed', value: state.caloriesconsumed },
    { name: 'Target Calories', value: 2481 - state.caloriesconsumed },
  ];

  const data2 = [
    { name: 'Total Calories Remaining', value: state.caloriesremaining },
    { name: 'Target Calories', value: 2481 - state.caloriesremaining },
  ];

  const data3 = [
    { name: 'Total Calories Burnt', value: state.caloriesburnt },
    { name: 'Target Calories Consumed', value: state.caloriesconsumed },
  ];

  const data4 = [
    {name : "Protein" , value1 : state.Protein ,value2 : 177},
    {name : "Netcarbs" , value1 : state.Netcarbs ,value2 : 319},
    {name : "Fat" , value1 : state.Fat ,value2 : 94},
  ]

  const Calculator = (dashboard: any) => {
    if (dashboard.length != 0 && user.length!==0) {
      let caloriesconsumed = dashboard.reduce((sum: Number, current: any) => {
        let calories
        if (current.type == "food") {
          calories = current.Energy;
        } else {
          calories = 0;
        }
        return sum + calories;
      }, 0);
      let energyPercent = ((caloriesconsumed / 2481) * 100).toFixed(0);

      let caloriesremaining = 2481 - caloriesconsumed;

      let caloriesburnt = dashboard.reduce((sum: Number, current: any) => {
        let calories
        if (current.type == "food") {
          calories = current.Energy;
        } else if (current.type = "exercise") {
          calories = (-1 * current.Energy);
        }
        return sum + calories;
      }, 0);
      let totalprotein = dashboard.reduce((sum: Number, current: any) => {
        let protein
        if (current.type == "food") {
          protein = current.Protein;
        } else {
          protein = 0
        }
        return sum + protein;
      }, 0);
      let proteinPercent = ((totalprotein / 177.6) * 100).toFixed(0);
      let totalNetcarbs = dashboard.reduce((sum: Number, current: any) => {
        let Netcarbs
        if (current.type == "food") {
          Netcarbs = current.Netcarbs;
        } else {
          Netcarbs = 0
        }
        return sum + Netcarbs;
      }, 0);
      let NetcarbsPercent = ((totalNetcarbs / 319.6) * 100).toFixed(0);
      let totalFat = dashboard.reduce((sum: Number, current: any) => {
        let Netcarbs
        if (current.type == "food") {
          Netcarbs = current.Netcarbs;
        } else {
          Netcarbs = 0
        }
        return sum + Netcarbs;
      }, 0);


      let FatPercent = ((totalFat / 94.7) * 100).toFixed(0);
      console.log("user",user)
      setState({
        userID: user[0]._id,
        user: `${user[0].firstname} ${user[0].lastname}`,
        Energy: caloriesconsumed,
        Energy_percentage: +energyPercent,
        Protein: totalprotein,
        Protein_percentage: +proteinPercent,
        Fat: totalFat,
        Fat_percentage: +FatPercent,
        Netcarbs: totalNetcarbs,
        Netcarbs_percentage: +NetcarbsPercent,
        quantity: { type: Number, default: 1 },
        caloriesburnt: caloriesburnt,
        caloriesremaining: caloriesremaining,
        caloriesconsumed: caloriesconsumed
      })
    }
  }

  const handleClick = (state:any)=>{
      addToCommunity(state,dispatch).then(()=>alert("Added to Community"))
  }

  useEffect(() => {
    console.log("user",user)
    getDashboardItems(token, user._id, dispatch)
  }, [])


  useEffect(() => {
    Calculator(dashboard)
  }, [dashboard,user])

  console.log(state);
  return (
    <div className='flex mt-[78px] '>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
      <div className={` w-3/4 my-8 ${isOpen ? "ml-[320px]" : "ml-[150px]"} duration-500 `}>
        <h1 className='text-center text-2xl font-bold py-4'>YOUR DASHBOARD</h1>
        <div className='w-full shadow-lg rounded-[5px] p-6 border border-gray-400 overflow-y-scroll '>
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className='border-b-black border-b'>
              <th>Name</th>
              <th>Quantity(cup for food/min for exercise)</th>
              <th>Energy</th>
            </thead>
            <tbody id="dashboardAppend">
              {
                dashboard.length == 0 ? <tr>
                  No products in dashboard. addmore food and exercises
                </tr> : dashboard.map((item: any) => {
                  if (item.type == "food") {
                    return <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.Energy}</td>
                    </tr>
                  } else {
                    return <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{(-1 * item.Energy)}</td>
                    </tr>
                  }
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          {
            dashboard.length != 0 ? <div >
              <Stats obj={state} />
              <div className="flex justify-end mr-20 mb-[16px]" onClick={()=>{handleClick(state)

              }}>
                  <button className='p-3  bg-slate-900 text-white'>Share your Progress</button>
                </div>
              <div className='grid grid-cols-2 gap-5'>
              
                <div className='Flex-column border justify-center items-center shadow-xl rounded-lg p-4'>
                  <p className="text-left text-bold text-3xl">Total Calories Consumed</p>
                  <Chart data={data1} />
                </div>
                <div className='Flex-column border justify-center items-center shadow-xl rounded-lg p-4'>
                  <p className="text-left text-bold text-3xl">Total Calories Remaining</p>
                  <Chart data={data2} />
                </div>
                <div className='Flex-column border justify-center items-center shadow-xl rounded-lg p-4'>
                  <p className="text-left text-bold text-3xl">Total Calories Burnt</p>
                  <Chart data={data3} />
                </div>
                <div className='Flex-column border justify-center items-center shadow-xl rounded-lg p-4'>
                  <p className="text-left text-bold text-3xl mb-10 ">Micro Nutrition</p>
                  <StackedBarChart data={data4} />
                </div>
              </div>

            </div> :
              <div>

              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default DashboardPage



/*
 let totalcalories = dashboard.reduce((sum,current)=>{
        let calories = +current.Energy;
        return sum+calories;
    },0);
    let totalprotein = reduceData.reduce((sum,current)=>{
        let protein = +current.Protein;
        return sum+protein;
    },0);
    let proteinPercent = (totalprotein/177.6)*100;
    let totalNetcarbs = reduceData.reduce((sum,current)=>{
        let Netcarbs = +current.Netcarbs;
        return sum+Netcarbs;
    },0);
    let NetcarbsPercent = (totalNetcarbs/319.6)*100;
    let totalFat = reduceData.reduce((sum,current)=>{
        let Fat = +current.Fat;
        return sum+Fat;
    },0);

     
    let FatPercent = (totalFat/94.7)*100;
    let remaining = 2841 - totalcalories;
    
    let Netcal = dashboardData.reduce((sum,current)=>{
        let energy;
        if(current[0]=="food"){
           energy = +current[1].Energy; 
        }else{
           energy = +(current[1].Energy*-1);
        }
        return sum+energy;
    },0);

    let energyPercent = (totalcalories/2481)*100;
    let energy = totalcalories-Netcal;
*/