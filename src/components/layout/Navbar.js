import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar = ({icon, title}) => {
    /* Use link instead of <a> tag when you want to preserve the state of previous page i.e, search a user go to about and come back, the list of users should be there*/
    return (
      <nav className='navbar bg-primary'>
        <h1><i className={icon}/> {title}</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav> 
    )
}

Navbar.defaultProps = {
  title: 'Github-Finder',
  icon: 'fab fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
