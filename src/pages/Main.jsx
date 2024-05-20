import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Skills from '../components/Skills'

const Main = () => {

    return (
        <div>
            <div className="main_container">
                <h1>웹 퍼블리셔 & 프론트엔드 개발자를 꿈꾸는</h1>
                <h1><span>박유안</span>입니다 !</h1>
                <div className="scroll">
                    <p>scroll !!</p>
                    <FontAwesomeIcon icon={faArrowDownLong} />
                </div>
            </div>

            <div className="intro">
                "소개멘트"
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