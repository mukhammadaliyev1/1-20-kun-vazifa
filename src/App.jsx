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
    <div>
      <Header/>
      <Main/>
<div>
      <Chart />
</div>




<div className='flex max-w-[1440px] items-center  mx-auto'>
<ChartComponent/>
<Chartcomp3/>
<ChartComponent1/>
</div>
      <Section/>



<div className='flex mx-auto'>
<img width={100} height={300} src={qrcode} alt="" />
<Footercharts/>

</div>

    </div>
  )
}

export default App
