import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LettereAnimate from '../LettereAnimate'
import './index.scss'
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [lettereClass, setLettereClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLettereClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <LettereAnimate
              lettereClass={lettereClass}
              strArray={['C', 'h', 'i', ' ', 's', 'o', 'n', 'o']}
              idx={15}
            />
          </h1>
          <p>
            Studente in Digital Humanities all'Università degli studi di Catania
            e laureato in Scienze e lingue per la comunicazione.
          </p>
          <p>
            Se stai cercando qualcuno che possa risolvere i problemi, comunicare
            efficacemente e lavorare in team, allora sono la persona giusta per
            te! Durante le mie esperienze lavorative e universitaria ho
            sviluppato alcune delle principali soft skills quali pensiero
            critico, public speaking, propensione all'ascolto e technology
            literacy. Inoltre, continuo regolarmente a migliorare ed ampliare le
            mie hard skills come Python, HTML, CSS, JS, NodeJS e ReactJS, sono
            in grado di adottare diverse tecnologie a seconda delle necessità e
            lavorare insieme ad altri sviluppatori da cui posso sempre
            apprendere molto.
          </p>
          <p>
            Interessato ai temi di tutela degli utenti negli spazi digitali,
            storia dei media e AI. Sono sempre alla ricerca di nuove conoscenze,
            crescita e miglioramento, sia nella vita personale che
            professionale.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
