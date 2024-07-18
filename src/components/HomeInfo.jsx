import React from "react";
import {arrow} from "../assets/icons"
import {Link} from "react-router-dom"

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
 1:
 (
 <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
  Bienvenue, je suis <span className="font-semibold">Leonard</span>
  <br/>
  Developpeur web junior 🧑‍💻</h1>
),
  2:
  ( 
  <InfoBox
   text="De l'armée à l'hôtellerie, en passant par le médical, mon parcours diversifié m'a préparé pour ma carrière en développement web, où j'applique mon adaptabilité et ma rigueur à mon travail."
   link="/about"
  btnText="En savoir plus"

 />
),
  3: 
  (
   <InfoBox
   text="J'ai développé plusieurs projets en équipe et en solo. Êtes-vous curieux de les connaître ?"

   link="/projects"
   btnText="voir mes projets"

 />
  ),
  4: (
   <InfoBox
   text="Vous souhaitez me contacter pour un projet ou vous cherchez un dev? Je ne suis qu'a quelques clique de vous!"
   link="/contact"
   btnText="Venez discuter "

 />
),
};



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
