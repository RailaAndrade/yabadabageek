import React from 'react';
import logoImg from '../../assets/images/yabadaba.png';
import './styles.css';
import { Link } from 'react-router-dom';


function Header() {
   
  return (
     
        <header className=" header flex">
            <div className="logo">
                <img alt="logo" src={logoImg}></img>
               YABADABAGEEK!
            </div>
            <div className="header-links ">
                <ul className="flex">

       
              
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/tools">
                            Aplicações
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
 

  );
}

export default Header;