import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='container'>
      <div className="box">
        <aside className='steps-container'>
          <div className='steps-box'>
            <div className='step selected'>
              <h6>1</h6>
            </div>

            <div className='step-description'>
              <h3>STEP 1</h3>
              <h2>YOUR INFO</h2>
            </div>
          </div>

          <div className='steps-box'>
            <div className='step'>
              <h6>2</h6>
            </div>

            <div className='step-description'>
              <h3>STEP 2</h3>
              <h2>SELECT PLAN</h2>
            </div>
          </div>

          <div className='steps-box'>
            <div className='step'>
              <h6>3</h6>
            </div>

            <div className='step-description'>
              <h3>STEP 3</h3>
              <h2>ADD-ONS</h2>
            </div>
          </div>

          <div className='steps-box'>
            <div className='step'>
              <h6>4</h6>
            </div>

            <div className='step-description'>
              <h3>STEP 4</h3>
              <h2>SUMMARY</h2>
            </div>
          </div>
        </aside>

        <main className='main-container'>
          <Header title={'Personal info'} subtitle={'Please provide your name, email address, and phone number.'} />
        </main>
      </div>
    </div>
  )
}

export default App
