import React, { useState } from 'react'
import Initial from '../components/Initial'
import Light from '../components/Light'
import Dark from '../components/Dark'
import '../styles/headerstyle.scss'
import Vid from '../components/Vid'

const HomePage = () => {
  const [initialMode, setInitialMode] = useState(true)
  const [lightMode, setLightMode] = useState()

  const changeModeLight = () => {
    setInitialMode(false)
    setLightMode(true)
  }

  const changeModeDark = () => {
    setInitialMode(false)
    setLightMode(false)
  }

  return (
    <section>
      <Vid />
      <section className="headerSection">
        <section className="buttonContainer">
          <button className="lightButton ripple" onClick={changeModeLight}>
            Light
          </button>
          <button className="darkButton ripple" onClick={changeModeDark}>
            Dark
          </button>
        </section>
      </section>
      <section>
        {initialMode ? <Initial /> : lightMode ? <Light /> : <Dark />}
      </section>
    </section>
  )
}

export default HomePage
