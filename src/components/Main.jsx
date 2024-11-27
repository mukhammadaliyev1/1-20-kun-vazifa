import React, { useEffect, useState } from 'react';
import http from '../axios';
const Main = () => {
    const [person, setPerson]=useState([])

     useEffect(()=>{
       http.get("/get-personal-info")  
    //    .then(res=>res.json())
         .then((data)=>{
            setPerson(data.data);
            
         })    .catch(err=>{
            console.log(err);

         })

     },[])


    return (
        <>
            <div className='flex justify-between max-w-[1312px] mx-auto'>
                <div className='flex items-center gap-8'>
                    <img src={person.imageUrl} height={288} alt="" />
                    <div className='flex flex-col'>
                        <h1 className=' text-[44px] mb-8'><span className='font-bold'>{person.firstName}</span><br />{person.lastName}</h1>
                        <div className='mb-9'>
                            <p className='text-xl text-[#495057] flex gap-10'><span>Тугилган сана:</span>{person.birthday}</p>
                            <p className='text-xl text-[#495057] flex gap-10'><span>Тугилган жой:</span>{person.address}</p>
                        </div>
                        <ul className='flex gap-3'>
                            <li className='flex flex-col text-xl font-semibold'>Буйи: <span className='font-bold'>{person.height} </span></li>
                            <li className='flex flex-col text-xl font-semibold'>Вазни: <span className='font-bold'>{person.weight}</span></li>
                            <li className='flex flex-col text-xl font-semibold'>Индекс: <span className='font-bold'>{person.index}</span></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-[#212529] text-xl w-[421px] leading-8'><span>Лавозими:</span><br />
                   {person.position}
                    </p>
                    <p className='text-[#212529] text-xl w-[421px] leading-8'><span>Номзод:</span><br />
                    {person.candidate}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Main;
