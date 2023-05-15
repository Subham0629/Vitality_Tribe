import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Brain from '../Components/Brain'
import Depression from '../Components/Depression'
import WeightLoss from '../Components/WeightLoss'
import Water from '../Components/Water'
import Footer from '../Components/Footer'

const Guides = () => {
    const [Article, setArticle] = useState<String>("")
  return (
    <div className='mt-[100px]'>
        <div className=' mt-5 mb-5 rounded-e-lg'>
        <img className="w-8/12 h-96 m-auto rounded-xl" src="https://previews.123rf.com/images/tommisch/tommisch1703/tommisch170301248/74872764-workout-plan-with-fitness-food-and-sport-equipment-on-gray-background-top-view-copy-space-still.jpg" alt="" />    
        <h2 className=' mt-5 font-bold text-center text-3xl underline text-blue-700 hover:text-blue-800'>GUIDES</h2>
        </div>

        <div className=' flex gap-5 w-10/12 m-auto '>
             <div className=' flex-1 pt-2 bg-white border border-gray-200 rounded-lg shadow '>
                <h5 className="mb-2 text-center p- text-2xl font-bold tracking-tight text-gray-900">How Exercise Improves Our Brain</h5>
                <p className='mb-3 pl-2 pr-2 text-center font-normal text-gray-700 dark:text-gray-700'>Did you know it's good for your brain too? Physical activity can help you think, learn, problem-solve. It can improve memory and reduce anxiety or depression. Regular physical activity can also reduce your risk of cognitive decline, including dementia</p>
               <div className='flex align-bottom flex-col justify-center items-center'>
               <button onClick={()=>setArticle("brain")} className=" ml-4 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More
                    <svg aria-hidden="true" className=" align-middle w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
               </div>
             </div>
             <div className=' flex-1 pt-2 bg-white border border-gray-200 rounded-lg shadow'>
                <h5 className="mb-2 text-center p- text-2xl font-bold tracking-tight text-gray-900">Easy Exercise To Lose Weight</h5>
                <p className='mb-3 text-center pl-2 pr-2 font-normal text-gray-700 dark:text-gray-700'>The paradox of exercise becomes immediately apparent the moment you need to use it to lose weight and feel healthier. It then becomes obvious that exercise is easier to start, but hard do and maintain. Here are some easy exericse to lose weight</p>
               <div className='flex align-bottom flex-col justify-center items-center'>
               <button onClick={()=>setArticle("weight")} className=" ml-4 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More
                    <svg aria-hidden="true" className=" align-middle w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
               </div>
             </div>
             <div className=' flex-1 pt-2 bg-white border border-gray-200 rounded-lg shadow'>
                <h5 className="mb-2 text-center p- text-2xl font-bold tracking-tight text-gray-900">Exercise To Relieve Anxiety and Depression</h5>
                <p className='mb-3 pl-2 pr-2 text-center font-normal text-gray-700 dark:text-gray-700'>The external world is beyond our control. But that doesn’t have to mean control is beyond us. At this age adn time, everyone is suffering from little bit of depression. Here are some exercise to take better care od our mental health</p>

               <div className='flex flex-col justify-center items-center'>
               <button onClick={()=>setArticle("depression")} className="mt-6 ml-4 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More

                    <svg aria-hidden="true" className=" align-middle w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
               </div>
             </div>
             <div className=' flex-1 pt-2 bg-white border border-gray-200 rounded-lg shadow'>
                <h5 className="mb-2 text-center p- text-2xl font-bold tracking-tight text-gray-900">Benefits Of Drinking More Water</h5>
                <p className='mb-3 pl-2 pr-2 text-center font-normal text-gray-700 dark:text-gray-700'>Staying hydrated is one of the best things you can do for your overall health. Staying hydrated can help support physical performance, prevent headaches and constipation, and more. Click here to learn more benefits of drinking water</p>
               <div className='flex align-bottom flex-col justify-center items-center'>
               <button onClick={()=>setArticle("water")} className=" ml-4 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More
                    <svg aria-hidden="true" className=" align-middle w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
               </div>
             </div>
             
        </div>
        {/* <Brain/> */}
        {/* <Water/> */}
        {/* <Depression/> */}
        {/* <WeightLoss/> */}
        {(Article==="weight")?<WeightLoss/>:(Article==="brain")?<Brain/>:(Article==="water")?<Water/>:(Article==="depression")?<Depression/>:<div></div>}
        <Footer/>
    </div>
  )
}

export default Guides