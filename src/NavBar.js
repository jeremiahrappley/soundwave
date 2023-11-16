// create an example NavBar component
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
    return (
        <div className='top-links'>
			<nav className='nav'>
            	<div className='nav-header'>
					<div className='nav-title'>
						Jeremiah Rappley
					</div>
				</div>
            	<div className='nav-links'>
					<Link to="/2023">2023</Link>
    				<Link to="/2022">2022</Link>
    				<Link to="/2021">2021</Link>
					<Link to="/2020">2020</Link>
					<Link to="/2019">2019</Link>
					<Link to="/2018">2018</Link>

					{/* <a href="./2023.js">2023</a>
                	<a href="./2022.js">2022</a>
					<a href="./2021.js">2021</a>
					<a href="./2020.js">2020</a>
					<a href="./2019.js">2019</a>
					<a href="./2018.js">2018</a> */}
            	</div>
        	</nav>
		</div>
    );
}


export default NavBar;