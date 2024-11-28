import React from 'react'
import Chart from './components/Chart'
import Main from './components/Main'
import Header from './components/Header'
import Section from './components/Section'
import ChartComponent from './components/Chartcomp'
import ChartComponent1 from './components/Chartcomp1'
import Chartcomp3 from './components/Chartcomp3'
import Footercharts from './components/Footercharts'
import qrcode from './assets/Frame 879.svg'


const App = () => {
  return (
    <div className='mx-auto'>
      <Header/>
      <Main/>
<div>
      <Chart />
</div>




<div className='flex max-w-[1440px] items-center  mx-auto'>
<ChartComponent/>
{/* <Chartcomp3/>
<ChartComponent1/> */}
</div>
      <Section/>


      <h2 className="text-4xl mt-10  font-bold flex gap-2.5">
        <p className="w-3 h-10 bg-blue-800"></p>
        Компетенцияларнинг намоён бўлиши
      </h2>
<div className='flex mx-auto'>
  
<Footercharts/>
<img width={400} height={1000} src={qrcode} alt="" />

</div>

    </div>
  )
}

export default App
