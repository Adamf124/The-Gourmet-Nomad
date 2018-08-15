import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/cities.css';

export default class Cities extends Component {
  state = {
    cities: []
  }

  getCities = () => {
    axios.get('/api/cities').then((res) => {
      this.setState({cities: res.data})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  componentDidMount () {
    this.getCities()
  }
  render() {
    const ListCities = this.state.cities.map((city) => {
      return (
        <div className="tile is-parent is-3">
            <article className="tile is-child box notification is-info is-bold" key={city.id}>
              <Link to={`/cities/${city.id}`}> 
              <h1 className= 'title'>{city.name}</h1>
              <img src={city.photo_url} alt="" className={city.name}/>
              </Link>
            </article>
        </div>
      )
    })
    return (
      <div>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
            Welcome to the Cities Page
            </h1>
            <h2 className="subtitle">
              Select a city to find sustenance.
            </h2>
          </div>
        </div>
      </section>
       
        <div className="tile is-ancestor" >
            {ListCities}
        </div>
      
      </div>
    )
  }
}
