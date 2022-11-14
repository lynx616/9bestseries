import React from "react";


function Card(props){
  
  return(
    
    <>
      
      <div data-aos="fade-up"
     data-aos-duration="1000" className="card">
        <div className="img__box"><img src={props.imgsrc} alt="pic1" className="img1"/>
        <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            
            <a href={props.link} target="_blank">
            <button>Watch Now</button>
            </a>
            </div>
            </div>
      </div>
    
    </>
  );
}

export default Card;