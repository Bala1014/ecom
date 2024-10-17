import React from 'react'


const arr = [{ 
    id : 1,
    imgUrl: "/images/hq720.jpg",
    name : "product 1",
    description: "this is product 1"
  },{ 
    id : 2,
    imgUrl: "/images/hq720.jpg",
    name : "product 2",
    description: "this is product 2"
  },{ 
    id : 3,
    imgUrl: "/images/hq720.jpg",
    name : "product 3",
    description: "this is product 3"
  },{ 
    id : 4,
    imgUrl: "/images/hq720.jpg",
    name : "product 4",
    description: "this is product 4"
}]

const CardComponent = ({ card }) => {
    return (
        <div className="aboutCompany-img-card" key={card.id} >
            <img src={card.imgUrl} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.description}</p>
        
        </div>
    );
};

const AboutCompanyImgCard = () => {

    
    return (
        <>
            <div className="aboutCompany-img">
                {arr.map((card)=>{
                    return <CardComponent card = {card} key={card.id}/>
                    })
                }
            </div>



        </>
    )
}

export default AboutCompanyImgCard