import React, { useState } from 'react'
import styles from '../styles/app.module.scss'
import { Header } from '../components/Header'
import '../styles/global.scss'
import { Player } from '../components/Player'
import { PlayerContext, PlayerContextProvider } from '../contexts/PlayerContext'

type MyAppProps = {
  Component: any
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <PlayerContextProvider>
  
      <div className={styles.wrapper}>

        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
      </PlayerContextProvider>
   
  )
}

export default MyApp
