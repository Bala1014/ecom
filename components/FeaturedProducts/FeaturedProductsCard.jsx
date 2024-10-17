import React from 'react'
import './FeaturedProducts.css';


const arr = [{ 
    id : 1,
    imgUrl: "/images/vfruit.jpg",
    name : "product 1",
    description: "this is product 1"
  },{ 
    id : 2,
    imgUrl: "/images/vfruit.jpg",
    name : "product 2",
    description: "this is product 2"
  },{ 
    id : 3,
    imgUrl: "/images/vfruit.jpg",
    name : "product 3",
    description: "this is product 3"
  },{ 
    id : 4,
    imgUrl: "/images/vfruit.jpg",
    name : "product 4",
    description: "this is product 4"
},{ 
    id : 5,
    imgUrl: "/images/vfruit.jpg",
    name : "product 5",
    description: "this is product 5"
},{ 
    id : 6,
    imgUrl: "/images/vfruit.jpg",
    name : "product 6",
    description: "this is product 6"
},{ 
    id : 7,
    imgUrl: "/images/vfruit.jpg",
    name : "product 7",
    description: "this is product 7"
},{ 
    id : 8,
    imgUrl: "/images/vfruit.jpg",
    name : "product 8",
    description: "this is product 8"
}]

const CardComponent = ({ card }) => {
    return (
        <div className="Featured-products-card" key={card.id} >
            <div className='Featured-products-card-img'>
                <img src={card.imgUrl} alt={card.name} />
            </div>
            
            <h2>{card.name}</h2>
            <p>{card.description}</p>
        </div>
    );
};

const FeaturedProductsCard = () => {
    return (
        <>
            <div className="Featured-products-card-list">
                {arr.map((card)=>{
                    return <CardComponent card = {card} key={card.id}/>
                    })
                }
            </div>
        </>
    )
}

export default FeaturedProductsCard