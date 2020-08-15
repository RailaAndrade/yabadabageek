import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import heartIcon from '../../assets/images/heart.svg'
import toolsIcon from'../../assets/images/tools.jpg'

import journey from '../../assets/images/journey.png'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


function Landing() {
   
  return (
    <div>
        <Header></Header>
        <div className="about">
                

            <div className="share-tools">
                <div className="tools1">
                    <h2>Esse site foi criado com o intuito de disponiblizar diversas ferramentas e conteúdos.</h2>
                </div>
             
                <div className=" tools2">
                    <div>Ferramentas práticas que possam ajudar a resolver problemas do seu cotidiano.</div>
                    <Link to="/tools"><img src={toolsIcon} alt="  <a href=`https://www.freepik.com/vectors/business`>Business vector created by macrovector - www.freepik.com</a>"></img></Link>
                </div>
                
            </div>
            <div className="join-me">

                <p>Junte-se a minha jornada!</p>

                <img src={journey} alt="<a href=`https://www.freepik.com/vectors/business`>Business vector created by vectorpouch - www.freepik.com</a>"></img>
            </div>
            <div className="made-heart">
                Criado com muito carinho 
                <img alt="heart"className="heart-icon"src={heartIcon} ></img>
            </div>
            <div className="how-to-improve">
                O que você deseja ver aqui 
                <a href="https://forms.gle/vA1aMjRQgvEhqRFZ8">?</a>
            </div>
           

        </div>
          <Footer></Footer>
        
      </div>
    


  );
}

export default Landing;