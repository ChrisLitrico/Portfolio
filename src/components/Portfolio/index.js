import React from 'react'
import { useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import LettereAnimate from '../LettereAnimate'
import portfolioData from '../../data/portfolio.json'
import { useEffect } from 'react'

const Portfolio = () => {
  const [lettereClass, setLettereClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLettereClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="cover" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portoflio-cover"
              />
              <div className="content">
                <p className="title"> {port.title}</p>
                <h4 className="description"> {port.description}</h4>
                <button className='btn' onClick={() => window.open(port.url)}>View</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <LettereAnimate
            lettereClass={lettereClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
