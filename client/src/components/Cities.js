import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <div key={city.id}>
        <Link to={`/cities/${city.id}`}> 
        <img src={city.photo_url} alt="" className='atlanta'/>
        </Link>
        </div>
      )
    })
    return (
      <div>
        Welcome to the Cities Page
      </div>
    )
  }
}
