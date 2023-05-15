import React from 'react'

const Brain = () => {
  return (
    <div className=" mt-5 w-4/5 m-auto p-10 text-center items-center">
        <h2 className='text-4xl'>How Exercise Improves Our Brain</h2>
        <img  className='w-3/5 h-96 mt-7 mb-7 m-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSN5TvAazP_mLqjXSmUcklansBmDExrpAX4A&usqp=CAU" alt="" />
        <p className=' m-auto text-lg'>In a study done at the University of British Columbia, researchers found that regular aerobic exercise, the kind that gets your heart and your sweat glands pumping, appears to boost the size of the hippocampus, the brain area involved in verbal memory and learning. Resistance training, balance and muscle toning exercises did not have the same results.The finding comes at a critical time. Researchers say one new case of dementia is detected every four seconds globally. They estimate that by the year 2050, more than 115 million people will have dementia worldwide.</p>
            <br />
        <p className=' m-auto text-lg font-semibold'>Here are some of the most common and usesful exercise which may help you improve your brain funtionality:
        </p>
        <br />
        <ul className="list-disc w-10/12 m-auto">
            <li className='flex gap-2'> 
                <p className='font-semibold text-start underline w-1/12'>Cycling:</p> 
                <p className='text-start w-11/12'>Outdoor cycling seems to show cognitive benefits in those 50 and over. Studies have shown that indoor interval training cycling has a positive impact on Parkinson’s patients too. Rao is currently conducting a clinical trial with high-risk sedentary patients ages 65 to 80 using the stationary Peloton bike to assess if riding three times a week for 30 minutes each time can improve brain health and slow the progression of diseases like Alzheimer’s.  </p>
            </li>
            <br />
            <li className='flex gap-2'> 
                <p className='font-semibold text-start underline w-1/12'>Dancing:</p>
                <p className='text-start w-11/12'>Don’t skip that Zumba or salsa class! Dancing is not only fun, freeing, and physically strenuous—but it’s also great for your brain. Multiple studies—including one from the New England Journal of Medicine have shown—that dancing may help reduce the risk of dementia. Scientist says, that dancing is a good pick-me-up for the brain, since “it can be highly novel, very complex, social, and intellectually involved—all things the brain appreciates.”</p>
            </li>
            <br />
            <li className='flex gap-2'> 
                <p className='font-semibold text-start underline w-1/12'>Brisk Walking:</p>
                <p className='text-start w-11/12'>Walking has a slew of fantastic health benefits, but fast walking does even further wonders for the brain. A recent study showed that walking more than 4,000 steps a day had positive effects on memory in older adults. Walking is also simple, free, (can be) social, and requires no equipment. If you can get outside, a brisk walk in nature has added bonuses.</p>
            </li>
            <br />
            <li className='flex gap-2'> 
                <p className='font-semibold text-start underline w-1/12'>Tai Chi:</p> 
                <p className='text-start w-11/12'>Combining balance and control, breath and body coordination, and variety of movements, tai chi is another valuable form of exercise for the brain. Studies have shown that this ancient, meditative practice can promote cognitive growth and memory, as well as mood regulation and stress reduction. Tai chi is low-impact and easy on the joints, so it’s great for older adults and exercise beginners. It’s also equipment-free, guided by an instructor, and can be done outside.</p>
            </li>
            <br />
            <li className='flex gap-2'> 
                <p className='font-semibold text-start underline w-1/12'>Cycling :</p> 
                <p className='text-start w-11/12'>Interval training—a workout where you alternate between two activities or two levels of intensity—has shown some increase in BDNF (that key protein for neuron functioning), which helps with learning and memory. However, finding that sweet spot—getting in a good workout without overly straining and draining your system—is key. </p>
            </li>
        </ul>
        <h3 className='text-semibold text-2xl underline text-left mt-8 mb-4'>Additional information:</h3>
        <div className='mt-10 flex gap-10'>
        <iframe
      width={550}
      height={413}
      src="https://www.youtube.com/embed/9EOYazFydDs"
      title="Physical Exercise for Brain Power"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
        <iframe
      width={550}
      height={413}
      src="https://www.youtube.com/embed/GYe1WeAEbZY"
      title="TOP 4 Brain Exercises for COORDINATION"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
        </div>
    </div>
  )
}

export default Brain