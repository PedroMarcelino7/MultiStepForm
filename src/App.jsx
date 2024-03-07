import styles from './App.module.scss'

import { useState } from 'react'

import Aside from './components/Aside/Aside'
import Header from './components/Main/Header/Header'
import Buttons from './components/Main/Buttons/Buttons'
import Step1 from './components/Main/Step1/Step1'
import Step2 from './components/Main/Step2/Step2'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Aside />

        <main className={styles.main_container}>
          <Header title={'Select your plan'} subtitle={'You have the option of monthly or yearly billing.'} />

          {/* <Step1 /> */}
          <Step2 />

          <Buttons />
        </main>
      </div>
    </div>
  )
}

export default App
