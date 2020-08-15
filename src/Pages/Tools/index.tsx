import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';



function Tools() {
   
  return (
    <div>
        <Header></Header>
        <div className="tools">
          <Link to='tools/martingale'>
            <div className="martingale">
              calculadora Martingale
            </div>
            
          
          
          </Link>

                


        </div>
        <Footer></Footer>
      </div>


  );
}

export default Tools;