import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar';
import gourmet from '../media/intro.mp4'

export default class Homepage extends Component {
  render() {
    return (
      <div>
      {/* <Navbar/> */}
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              The Gourmet Nomad
            </h1>
            <h2 class="subtitle">
              LIVE YOUR BEST LIFE THROUGH FOOD.
            </h2>
          </div>
        </div>
      </section>
        <div className='test'>
        <video id="background-video" loop autoPlay>
            <source src={gourmet} type="video/mp4" />
        </video>
        </div>
        <section class="hero is-info is-large is bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Seeing friends, family, or a fun date?
              </h1>
              <h2 class="subtitle">
                Make it easy on everyone.
              </h2>
              <Link to="/cities"><div class="button is-primary is-large">Find Food</div></Link>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
