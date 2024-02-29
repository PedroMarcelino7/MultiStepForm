import './App.scss'

import { useState } from 'react'

import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='container'>
      <div className="box">
        <Aside />

        <main className='main-container'>
          <Header title={'Personal info'} subtitle={'Please provide your name, email address, and phone number.'} />
        </main>
      </div>
    </div>
  )
}

export default App
