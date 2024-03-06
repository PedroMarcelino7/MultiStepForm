import styles from './App.module.scss'

import { useState } from 'react'

import Aside from './components/Aside/Aside'
import Header from './components/Main/Header/Header'
import Buttons from './components/Main/Buttons/Buttons'
import Section1 from './components/Main/Section1/Section1'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Aside />

        <main className={styles.main_container}>
          <Header title={'Personal info'} subtitle={'Please provide your name, email address, and phone number.'} />

          <Section1 />

          <Buttons />
        </main>
      </div>
    </div>
  )
}

export default App
