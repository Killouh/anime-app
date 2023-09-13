import React from 'react';
import { Link } from 'react-router-dom';

import "./sidebar.css";


export default function Sidebar() {
    return (
        <header className='sidebar'>
          <nav>
            <ul className='navbar'>
              <li>
                <Link className='navlinks' to="/">Accueil</Link>
              </li>
              <li>
                <Link className='navlinks' to="/trending">Trending</Link>
              </li>
              <li>
                <Link className='navlinks' to="/watchlist">Watchlist</Link>
              </li>
              <li>
                <Link className='navlinks' to="/settings">Reglages</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

