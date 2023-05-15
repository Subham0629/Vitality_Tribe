import React from 'react'

const Depression = () => {
  return (
    <div className=" mt-5 w-4/5 m-auto p-10 text-center items-center">
    <h2 className='text-4xl'>Exercise To Relieve Anxiety and Depression</h2>
    <img  className='w-4/5 h-96 mt-7 mb-7 m-auto' src="https://experiencelife.lifetime.life/wp-content/uploads/2020/10/alleviate-depression-anxiety-card.jpg" alt="" />
    <p className=' m-auto text-lg'>"Exercise won't cure anxiety or depression, but the physical and psychological benefits can improve the symptoms,” explains Sally R. Connolly, LCSW, a therapist at the Couples Clinic of Louisville in Kentucky. "Research shows that at least 30 minutes of exercise three to five days a week can significantly make a difference.” Some studies have suggested that regular exercise can help alleviate anxiety as much as anxiety medications, and the anxiety-relieving effects of exercise may last longer than those of drugs.</p>
        <br />
    <p className=' m-auto text-lg font-semibold'>Here are few exercises which may help you improve your mental health:
    </p>
    <br />
    <ul className="list-disc w-10/12 m-auto">
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-1/12'>Running:</p> 
            <p className='text-start w-11/12'>Many people turn to a quick run or jog when they’re feeling down, and for good reason. Running releases endorphins, natural feel-good chemicals in your body that give you a euphoric feeling. But the effects aren’t just short-term. A study from the journal Comprehensive Psychiatry found that running is just as effective as psychotherapy in alleviating symptoms of depression.  </p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-1/12'>Hiking:</p>
            <p className='text-start w-11/12'>In addition to mood-boosting cardiovascular activity, hiking involves being outside, and spending some time in nature can have even more beneficial mental health effects. A study from the journal Environmental Health and Preventive Medicine found that participants who took a walk in a wooded area had lowered stress hormones than those who took a walk in an urban city.</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-1/12'>Strength Training:</p>
            <p className='text-start w-11/12'>People are more likely to associate strength training with building muscle, but it can also have strong mental effects as well. One study from the American Journal of Lifestyle Medicine found that regular resistance training can reduce symptoms of both anxiety and depression.Strength training improves mood and self-esteem, regulates sleep, and reduces stress, which can all contribute to overall feelings of wellbeing</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-1/12'>Tai Chi:</p> 
            <p className='text-start w-11/12'>Tai Chi is a form of exercise originating from China that incorporates Chinese martial arts with meditative movements. A study from the International Journal of Behavioral Medicine found that people who practiced tai chi showed improvement in areas of depression, anxiety, and general stress management. The workout involves mental concentration, physical balance, muscle relaxation and relaxed breathing, which can all play a role in regulating mood.</p>
        </li>
        <br />
        <li className='flex gap-2'> 
            <p className='font-semibold text-start underline w-1/12'>Dancing :</p> 
            <p className='text-start w-11/12'>Whether you’re taking a Zumba class, salsa dancing with a partner, or just grooving out to some music in the comfort of your own home, dancing can help can help relieve stress and anxiety. Studies show that dance classes can reduce anxiety more so than regular physical education. In addition to being physically active, many people see dance as a form of personal expression, which can help strengthen the connection between the mind and the body. </p>
        </li>
    </ul>
    <h3 className='text-semibold text-2xl underline text-left mt-8 mb-4'>Additional information:</h3>
    <div className='mt-10 flex gap-10'>
    <iframe
      width={734}
      height={413}
      src="https://www.youtube.com/embed/kRidIn9A69Y"
      title="This is Why Exercise is so Great for Anxiety!"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
<iframe
      width={734}
      height={413}
      src="https://www.youtube.com/embed/ILRqYb4ZPrk"
      title="Exercise, Depression, and Anxiety: The Evidence"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
    </div>
</div>
  )
}

export default Depression