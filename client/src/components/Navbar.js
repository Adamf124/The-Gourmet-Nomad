import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import {Link} from 'react-router-dom'
import Homepage from './Homepage';

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link to="/" class="navbar-item" >
                <img src="http://sailingtutorials.com/wp-content/uploads/2018/02/cropped-logo@2x.png" alt="The Nomadic Gourmet" width="56" height="112"/>
                  </Link>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <a><span aria-hidden="false"></span></a>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
          </div>
         
      </div>
    )
  }
}
