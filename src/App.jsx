import styles from './App.module.scss'

import { useState } from 'react'

import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Buttons from './components/Buttons/Buttons'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Aside />

        <main className={styles.main_container}>
          <Header title={'Personal info'} subtitle={'Please provide your name, email address, and phone number.'} />

          <Main />

          <Buttons />
        </main>
      </div>
    </div>
  )
}

export default App
