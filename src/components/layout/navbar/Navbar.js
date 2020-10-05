import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import BurgerMenu from './Burger';
// import Search from '../../pages/Movies/SearchMovie';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className='navigation-bar dotted-hr'>
        <div className='logo'>
          <Link to='/'>
            <h1>MOVIE HUNTER</h1>
          </Link>
        </div>
        <nav>
          <BurgerMenu onClick={() => setOpen(!open)} />
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li className='nav-link'>
              <Link to='/' onClick={() => setOpen(!open)}>
                HOME
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/top-rated' onClick={() => setOpen(!open)}>
                TOP RATED
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/most-popular' onClick={() => setOpen(!open)}>
                MOST POPULAR
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='search-bar dotted-hr'>
        {/* <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">All</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/movies/top-rated" >Top Rated</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/movies/most-popular">Most Popular</Link>
                    </li>
                </ul> */}
        {props.children}
      </div>
    </header>
  );
};

export default Navbar;
