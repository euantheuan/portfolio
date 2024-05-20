import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import DesignCard from '../components/DesignCard'

const Design = () => {

    let [cards, setCards] = useState([]);
    let [error, setError] = useState("");

    const getCards = async () => {
        try {
                let url = 'https://my-json-server.typicode.com/euantheuan/portfolio/designcard';
                let response = await fetch(url);
                let data = await response.json();
                setCards(data);
                
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    useEffect(() => {
        getCards();
    }, []);
    
    return (
        <div>
            <Navbar />

            <div className="card_container designcard_container">
                <h2>디자인 포트폴리오</h2>
                <div className="card_area designcard_area">
                    {
                        cards.map((card, index)=>(
                            <DesignCard key={index}
                                id={card.id} 
                                desc={card.desc} 
                                title={card.title} 
                                imgsrc={card.imgsrc} />
                        ))
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default Design