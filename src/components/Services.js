import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from  'react-icons/fa';
import Title from './Title';

export default class SingleRoom extends Component {
  state = {
      services:[
          {
              icon:<FaCocktail/>,
              title:"free cocktails",
              info:'fsdgjsnvsjgnsgsngsglsgl'
          },
          {
              icon:<FaHiking/>,
              title:"Mountain Hiking",
              info:'fsdgjsnvsjgnsgsngsglsgl'
          },
          {
              icon:<FaShuttleVan/>,
              title:"Transportation",
              info:'fsdgjsnvsjgnsgsngsglsgl'
          },
          {
              icon:<FaBeer/>,
              title:"Great Beer",
              info:'fsdgjsnvsjgnsgsngsglsgl'
          }
      ]
  }  
  render() {
    return (
      <section className="services">

          <Title title='services'/>
          <div className="services-center">
          {this.state.services.map((item, index) => {
              return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
              </article>
          })}
          </div>
      </section>
    )
  }
}