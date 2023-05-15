import React from 'react'

const Water = () => {
  return (
    <div className=" mt-5 w-4/5 m-auto p-10 text-center items-center">
    <h2 className='text-4xl'>Benefits Of Drinking More Water</h2>
    <img  className=' w-4/6 h-96 mt-7 mb-7 m-auto' src="https://c8.alamy.com/comp/MPD408/cartoon-bottle-of-water-and-glasses-vector-illustrationglass-of-water-MPD408.jpg" alt="" />
    <p className=' m-auto text-lg'>What is water? Water is a colourless liquid composed of hydrogen and oxygen (H20). It is vital for life, although it supplies no calories. Drinking adequate amounts of water, or staying hydrated, is the first rule of health and nutrition. Our bodies can supposedly last weeks without food, yet just a few days without water. This makes sense when you realise our bodies are made up of about 60% water and that being dehydrated can affect us both physically and mentally.</p>
        <br />
    <p className=' m-auto text-lg font-semibold'>Here are top 5 benefits of water :
    </p>
    <br />
    <ul className="list-disc w-10/12 m-auto">
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-2/12'>Improve memory & mood :</p> 
            <p className='text-start w-10/12'>Outdoor cycling seems to show cognitive benefits in those 50 and over. Studies have shown that indoor interval training cycling has a positive impact on Parkinson’s patients too. Rao is currently conducting a clinical trial with high-risk sedentary patients ages 65 to 80 using the stationary Peloton bike to assess if riding three times a week for 30 minutes each time can improve brain health and slow the progression of diseases like Alzheimer’s.  </p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-2/12'>Aid in weight maintenance :</p>
            <p className='text-start w-10/12'>Staying hydrated may also help with weight maintenance. Research has shown that having water before a meal may fill you up more and therefore promote weight loss through suppressing your appetite. This was also noted in a 2015 study in which diet drinks were swapped for water. The results showed this may lead to greater reduction in weight and improved insulin resistance.</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-2/12'>Improve exercise performance :</p>
            <p className='text-start w-10/12'>There has been a lot of research into the effects of hydration or dehydration in athletes, and the results all pretty much conclude that dehydration not only affects sports performance but also physiological function too.</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-2/12'>May prevent constipation :</p> 
            <p className='text-start w-10/12'>Water helps to ‘keep things moving’ in the digestive system, so staying hydrated may help prevent constipation in children, adults and the elderly. There is some evidence that fizzy water may be of particular benefit too.</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-2/12'>Support the health of the urinary system :</p> 
            <p className='text-start w-10/12'>Poor hydration may increase the risk of developing, or the recurrence of kidney stones, in some individuals. Studies have also shown that drinking adequate amounts of water may reduce the risk of bladder infections and urinary tract infections, including cystitis, in women. </p>
        </li>
    </ul>
    <h3 className='text-semibold text-2xl underline text-left mt-8 mb-4'>Additional information:</h3>
    <div className='mt-10 flex gap-10'>
    <iframe
      width={734}
      height={413}
      src="https://www.youtube.com/embed/_eVK1OzTju8"
      title="The Major Health Benefits Of Drinking Water - Importance Of Drinking Water"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
    <iframe
      width={734}
      height={413}
      src="https://www.youtube.com/embed/eUaVKnJLb9Q"
      title="Why You NEED to Drink More Water: 5 Health Benefits"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
    </div>
</div>
  )
}

export default Water