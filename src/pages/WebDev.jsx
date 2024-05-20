import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import WebDevCard from '../components/WebDevCard';

const WebDev = () => {
    let [cards, setCards] = useState([]);
    let [error, setError] = useState("");

    const getCards = async () => {
        try {
                let url = 'https://my-json-server.typicode.com/euantheuan/euans_portfolio/webdevcard';
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

            <div className="card_container webdevcard_container">
                <h2>웹 개발 포트폴리오</h2>
                <div className="card_area webdevcard_area">
                    {
                        cards.map((card, index)=>(
                            <WebDevCard key={index}
                                id={card.id} 
                                desc={card.desc} 
                                title={card.title} 
                                imgsrc={card.imgsrc}
                                clone={card.clone}
                                pageurl={card.pageurl}
                                codeurl={card.codeurl}
                                version={card.version}
                                page={card.page} />
                        ))
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default WebDev