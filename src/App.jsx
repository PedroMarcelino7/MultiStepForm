import styles from './App.module.scss'

import { useState } from 'react'

import Aside from './components/Aside/Aside'
import Header from './components/Main/Header/Header'
import Buttons from './components/Main/Buttons/Buttons'
import Section1 from './components/Main/Section1/Section1'
import Section2Month from './components/Main/Section2Month/Section2Month'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Aside />

        <main className={styles.main_container}>
          <Header title={'Select your plan'} subtitle={'You have the option of monthly or yearly billing.'} />

          {/* <Section1 /> */}
          <Section2Month />

          <Buttons />
        </main>
      </div>
    </div>
  )
}

export default App
