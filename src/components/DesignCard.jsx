import React, { useState } from 'react'
import DesignModal from './DesignModal'


const DesignCard = ({ imgsrc, title, desc }) => {
    const [modal, setModal] = useState(false)
    function onSetModal () {
        setModal(!modal)
    }
    return (
        <div className='card designcard'>
            <img    src={`${process.env.PUBLIC_URL}/img/${imgsrc}`} 
                    alt={title} 
                    onClick={()=>{onSetModal()}} />
            {
                modal   ? <DesignModal imgsrc={imgsrc} 
                                        title={title} 
                                        desc={desc} 
                                        onSetModal={onSetModal} 
                                        modal={modal} />
                        : null
            }
        </div>
    )
}

export default DesignCard