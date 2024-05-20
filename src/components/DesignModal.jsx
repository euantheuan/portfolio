import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'

const DesignModal = ({ imgsrc, title, desc, onSetModal, modal }) => {
    return (
        <div className='designmodal_container'>
            <div className="img_area">
                <img src={`${process.env.PUBLIC_URL}/img/${imgsrc}`} 
                    alt={title} />
            </div>
            <div className="text_area">
                <div className="text">
                    <h3 className="title">{title}</h3>
                    <p className="desc">{desc}</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faSquareXmark} 
                            onClick={()=>{onSetModal(!modal)}} />
        </div>
    )
}

export default DesignModal