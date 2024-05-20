import React from 'react';

const WebDevCard = ({ imgsrc, title, desc, clone, pageurl, codeurl, version, page }) => {
    
    return (
        <div className='card webdevcard'>
            <div className="img_area">
                <img    src={`${process.env.PUBLIC_URL}/img/${imgsrc}`}
                        alt={title} />
            </div>
            <div className="text_area">
                <div className="title_area">
                    <h3>{title}</h3>
                    {
                        clone   ? <span>클론코딩</span>
                                : <span>창작코딩</span>
                    }
                </div>
                <div className="desc">
                    <p className="version">
                        {version} available
                    </p>
                    <p className="desc">
                        {desc}
                        <span>
                                {
                                    page    ? `페이지: ${page}`
                                            : null
                                }
                        </span>
                    </p>
                </div>
                <div className="btn_area">
                    <button onClick={()=>{window.open(pageurl)}}>바로가기</button>
                    <button onClick={()=>{window.open(codeurl)}}>코드보기</button>
                </div>
            </div>
        </div>
    )
}

export default WebDevCard