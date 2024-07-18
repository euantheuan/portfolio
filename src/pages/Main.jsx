import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Skills from '../components/Skills'

const Main = () => {

    return (
        <div>
            <div className="main_container">
                <div className='moto'>
                    "하고자 하면 방법이 보이고,<br />하지 않고자 하면 변명이 보인다"
                </div>
                <h1>웹 퍼블리셔 & 프론트엔드 개발자를 꿈꾸는</h1>
                <h1><span>박유안</span>입니다 !</h1>
                <div className="scroll">
                    <p>scroll !!</p>
                    <FontAwesomeIcon icon={faArrowDownLong} />
                </div>
            </div>

            <div className="intro">

                <div>
                    제 포트폴리오 페이지에 방문해주셔서 감사합니다.
                </div>

                <div>
                    새롭고 낯선 상황/문화에 흥미를 느끼는<br />
                    <span>박유안</span> 입니다.
                </div>

                <div>
                    아래 링크를 통해 제 작업물 등을 열람하실 수 있습니다.
                </div>

                
            </div>

            <div className="links">
                <div className="link skills">
                    <Link to='/skills'>
                        <h2>
                            Skills
                        </h2>
                        <h2>
                            사용 가능한 툴
                        </h2>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
                <div className="link design">
                    <Link to='/designportfolio'>
                        <h2>
                            Design<br />Portfolio
                        </h2>
                        <h2>
                            디자인 포트폴리오
                        </h2>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
                <div className="link webdev">
                    <Link to='/webdevportfolio'>
                        <h2>
                            Web Dev<br />Portfolio
                        </h2>
                        <h2>
                            웹 개발 포트폴리오
                        </h2>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main