"use client"
import React from 'react' 
import CountUp from 'react-countup';
import './ChooseCounterUp.css'

const CounterUp = () => {
  return (
    <div className='ChooseCounterUp-container'>
      <div className="ChooseCounterUp-content">
        <h1>Driving Shit <br /> & Fuckery Every Step <br/> Forward</h1>
        <p>Explore our impactful journey through these key statistics.</p>

        <div className="four-counter-container">


          <div className="four-counter-box">
            <div className='header-count'>
              <h1><center>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></center></h1>
              <h2>Years of Trust</h2>
            </div>
          </div>



          <div className="four-counter-box">
            <div className='header-count'>
              <h1><center>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></center></h1>

              <h2>Years of Trust</h2>
            </div>
          </div><div className="four-counter-box">
            <div className='header-count'>
              <h1><center>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></center></h1>

              <h2>Years of Trust</h2>
            </div>
          </div><div className="four-counter-box">
            <div className='header-count'>
              <h1><center>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></center></h1>

              <h2>Years of Trust</h2>
            </div>
          </div>
          {/* <div className="four-counter-box">
            <h1>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></h1>
            <h2>No of Customers</h2>
          </div>
          <div className="four-counter-box">
            <h1>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></h1>
            <h2>No of Customers</h2>
          </div>
          <div className="four-counter-box">
            <h1>+<CountUp end={10000} enableScrollSpy={true} scrollSpyOnce = {true}/></h1>
            <h2>No of Customers</h2>
          </div> */}
        </div>
        

      </div>

    </div>
  )
}

export default CounterUp