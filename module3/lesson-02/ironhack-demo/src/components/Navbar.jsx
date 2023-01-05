import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Navbar(props) {
    const { navigationLinks } = props;
  return (
    <nav>
        <ul>
            {navigationLinks.map(navigationLink => {
                return <li key={uuidv4()}>{navigationLink}</li>
            })}
        </ul>
    </nav>
  )
}

export default Navbar;