import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange (e) {
    if (this.props.onSearch)
      this.props.onSearch(e.target.value)
  }

  render () {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand col-1">
          <img src={logo} className="Navbar-logo" alt="logo" />
        </div>

        <div className="form-group justify-content-center row col-10 my-2">
          <input
            onChange={this.handleSearchChange}
            className="form-control col-9 mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </nav>
    )
  }
}

Navbar.propType = {
  onSearch: PropTypes.function
}

export default Navbar;
