import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/speccity.css'

export default class SpecificCity extends Component {

  state = {
    city: []
}
getCityAndRestaurants = async () => {
  const cityId = this.props.match.params.cityId
  try {
      let city = await axios.get(`/api/cities/${cityId}`)
      let restaurants = await axios.get(`/api/cities/${cityId}/restaurants`)

      this.setState({
          city: city.data,
          restaurants: restaurants.data
      })
      console.log(this.state)
  } catch (err) {
      console.error(err)
  }
}
componentDidMount() {
  this.getCityAndRestaurants()
}

  render() {
    return (
      <div>
       <div className="widget_wrap">
        <iframe src="https://www.zomato.com/widgets/res_search_widget.php?entity_id=288&entity_type=city&city_id=288&theme=dark&hideCitySearch=on&hideResSearch=on&widgetType=large&sort=popularity" border="0" frameborder="0">
        </iframe>
       </div>
      </div>
    )
  }
}
