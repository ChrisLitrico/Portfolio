import LettereAnimate from '../LettereAnimate'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
  } from 'react-leaflet'

const Contact = () => {
  const [lettereClass, setLettereClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLettereClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8ts0wob',
        'template_60hl9bl',
        refForm.current,
        'n7pbJYS9C9fMxA4Nu'
      )
      .then(
        () => {
          alert('Messaggio inviato correttamente🏌️')
          window.location.reload(false)
        },
        () => {
          alert("Ops, c'è stato un errore. Per favore riprova.")
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <LettereAnimate
              lettereClass={lettereClass}
              strArray={['C', 'o', 'n', 't', 'a', 't', 't', 'a', 'm', 'i', '!']}
              idx={15}
            />
          </h1>
          <p>
            Interessato a qualsiasi tipo di progetto🧑‍💻
            <br />
            Se vuoi lasciare un commento sul mio lavoro, richiedere un
            preventivo per il tuo sito web o semplicemente scambiare due
            chiacchiere, puoi inviarmi un messaggio utilizzando il modulo
            sottostante. Sarò lieto di risponderti quanto prima!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Oggetto"
                    type="text"
                    name="oggetto"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    type="text"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="Submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>

        </div>
        <div className='info-map'>
            Christian Litrico,
            <br />
            Italia,
            <br />
            Catania <br />
            <span>christianlitrico09@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[37.504237392970836,15.081365388670832]}zoom={15}>
                <TileLayer
                attribution='&copy;<a="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[37.504237392970836,15.081365388670832]}>
                    <Popup>Christian vive nei dintorni, andiamo a prendere un arancin*</Popup>
                </Marker>
            </MapContainer>

        
            </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
