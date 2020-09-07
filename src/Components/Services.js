import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services:[
      {
        icon: <FaCocktail/>,
        title:'Free Cocktail',
        info: `Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Dolorum, corrupti?`
      },
      {
        icon: <FaHiking/>,
        title:'Endless Hiking',
        info: `Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Dolorum, corrupti?`
      },
      {
        icon: <FaShuttleVan/>,
        title:'Free Cocktail',
        info: `Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Dolorum, corrupti?`
      },
      {
        icon: <FaBeer/>,
        title:'Free Cocktail',
        info: `Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Dolorum, corrupti?`
      }
    ]
  }
  render() {
    const {services} = this.state;
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {
            services.map(({icon,title,info},index) => {
              return <article key={index} className="service">
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </article>
            })
          }
        </div>
      </section>
    )
  }
}
