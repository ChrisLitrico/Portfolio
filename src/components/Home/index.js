import { Link } from 'react-router-dom'

import LettereAnimate from '../LettereAnimate'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [lettereClass, setLettereClass] = useState('text-animate')
  const arrayNome = [' ','C','h', 'r', 'i', 's', 't', 'i', 'a', 'n']
  const arrayTitolo = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ' ',
    '&',
  ]
  const arrayTitolo2 =['d',
  'i',
  'g',
  'i',
  't',
  'a',
  'l',
  ' ',
  'h',
  'u',
  'm',
  'a',
  'n',
  'i',
  's',
  't',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLettereClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={lettereClass}>C</span>
          <span className={`${lettereClass} _12`}>i</span>
          <span className={`${lettereClass} _12`}>a</span>
          <span className={`${lettereClass} _12`}>o</span>
          <br />
          <span className={`${lettereClass} _14`}>S</span>
          <span className={`${lettereClass} _15`}>o</span>
          <span className={`${lettereClass} _16`}>n</span>
          <span className={`${lettereClass} _17`}>o</span>
         
          <LettereAnimate
            lettereClass={lettereClass}
            strArray={arrayNome}
            idx={15}
          />
          <br />
          <LettereAnimate
            lettereClass={lettereClass}
            strArray={arrayTitolo}
            idx={15}
          /> <br/>
          <LettereAnimate
            lettereClass={lettereClass}
            strArray={arrayTitolo2}
            idx={15}
          /><br/>
        </h1>
        <h2 className='tags'> Frontend Developer / Digital Humanist</h2>
        <Link to="contact" className="flat-button">
          CONTATTAMI
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman'/>
    </>
  )
}
export default Home
