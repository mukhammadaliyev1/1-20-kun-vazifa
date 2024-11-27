import React, { useEffect, useState } from 'react'
import http from '../axios'
const Section = () => {
const  [psy, setPsy]=useState([])


useEffect(()=>{
http.get("psychologic")
.then((data=>{
setPsy(data.data);
    
}))
},[])



    return (
        <div className='max-w-[1312px] mx-auto mt-6'>
            <h2 className='text-4xl font-bold flex gap-2.5'><p className='w-3 h-10 bg-blue-800'></p>Психологик диагностика</h2>
            <div className='mt-9 flex gap-6'>
                <p className='w-[644px] text-xl '>
                           {psy.text1}
                </p>
                <p className='w-[644px] text-xl'>
                    {psy.text2}
                 </p>
            </div>
        </div>
    )
}

export default Section
