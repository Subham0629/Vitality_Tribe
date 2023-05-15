import React from 'react'
import { text } from 'stream/consumers';

const Stats = ({obj}:any) => {


  return (
    <div className='flex justify-around my-10 border-r-10 shadow-xl p-5'>
       <div  className='flex justify-between text-xl w-[50%] text-bold items-center  border-r-2 border-r-black p-[20px]' >
                <div  >
                  <h1 className='text-3xl text-[#44d07b] text-bold'><span id="totalcalories">{obj.caloriesconsumed}</span>/2481</h1>
                  <h3 className='text-xl text-bold'>Total Calories<br/> Consumed</h3>
                </div>
                <div>
                    <h1 className='text-3xl text-red-600 text-bold'><span id="caloriesremaining">{obj.caloriesremaining}</span>/2481</h1>
                    <h3 className='text-xl text-bold'>Total Calories<br/> Remaining</h3>
                </div>
                <div>
                    <h1 className='text-3xl text-orange-600 text-bold'><span id="caloriesBurnt">{obj.caloriesburnt}</span>/<span id="Totalcalories">{obj.caloriesconsumed}</span></h1>
                    <h3 className='text-xl text-bold'>Total Calories<br/> Burnt</h3>
                </div>

            </div>

            <div className='flex-column w-[50%] items-center justify-center'>
            <h3 className='text-bold text-2xl mb-2 font-semibold underline'>Macronutrient Targets</h3>
            <table className='w-[90%] m-auto'>
                 <thead>
                   <th>Macronutrients</th>
                   <th>Total</th>
                   <th>Target</th>
                   <th>Percentage</th>
                 </thead>
                 <tbody>
                   <tr>
                    <th>Energy</th>
                    <td id="totalenergy">{obj.Energy}</td>
                    <td>2481 kcal</td>
                    <td id="percentenergy">{`${obj.Energy_percentage}%`}</td>
                   </tr>
                   <tr>
                    <th>Protein</th>
                    <td id="totalprotein">{obj.Protein}</td>
                    <td>177.6g</td>
                    <td id="percentprotein">{`${obj.Protein_percentage}%`}</td>
                   </tr>
                   <tr>
                    <th>NetCarbs</th>
                    <td id="totalcarbs">{obj.Netcarbs}</td>
                    <td>319.6</td>
                    <td id="percentcarbs">{`${obj.Netcarbs_percentage}%`}</td>
                   </tr>
                   <tr>
                    <th>Fat</th>
                    <td id="totalfat">{obj.Fat}</td>
                    <td>94.7g</td>
                    <td id="perrcentfat">{`${obj.Fat_percentage}%`}</td>
                   </tr>
                 </tbody>
            </table>
            </div>
    </div>
  )
}

export default Stats