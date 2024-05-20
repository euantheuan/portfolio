import React from 'react'
import Navbar from './Navbar'

const Skills = () => {
    return ( <>
        <Navbar />
        <div className='skills_container' id='skills'>
            <h2>Skills</h2>
            <div className="skills_area">
                    <div className="skillbox quarter">
                        <h3>EDITOR</h3>
                        <div className="img_area">
                            <img src={process.env.PUBLIC_URL + '/ico/editor_vscode.png'} alt='VS Studio Code' />
                            <p className="skill_name">VS Studio Code</p>
                        </div>
                    </div>
                    <div className="skillbox quarter">
                        <h3>MANAGE</h3>
                        <div className="img_area">
                            <img src={process.env.PUBLIC_URL + '/ico/manage_git.png'} alt='Git' />
                            <p className="skill_name">Git</p>
                        </div>
                    </div>
                    <div className="skillbox quarter">
                        <h3>SDK</h3>
                        <div className="img_area">
                            <img src={process.env.PUBLIC_URL + '/ico/back_firebase.png'} alt='Firebase' />
                            <p className="skill_name">Firebase</p>
                        </div>
                    </div>
                    <div className="skillbox quarter">
                        <h3>PROTOTYPING TOOL</h3>
                        <div className="img_area">
                            <img src={process.env.PUBLIC_URL + '/ico/design_figma.png'} alt='Figma' />
                            <p className="skill_name">Figma</p>
                        </div>
                    </div>
                    <div className="skillbox half">
                        <h3>DEPLOY</h3><div className="img_container">
                            
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/deploy_netlify.png'} alt='Netlify' />
                                <p className="skill_name">Netlify</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/manage_git.png'} alt='Git' />
                                <p className="skill_name">Git</p>
                            </div>
                        </div>
                    </div>
                    <div className="skillbox half">
                        <h3>DESIGN TOOL</h3>
                        <div className="img_container">
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/design_photoshop.png'} alt='Photoshop' />
                                <p className="skill_name">Photoshop</p>
                            </div>
                            <div className='img_area'>
                                <img src={process.env.PUBLIC_URL + '/ico/design_illustrator.png'} alt='Illustrator' />
                                <p className="skill_name">Illustrator</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/design_canva.png'} alt='Canva' className='canva'/>
                                <p className="skill_name">Canva</p>
                            </div>
                        </div>
                    </div>
                    <div className="skillbox half">
                        <h3>FRONTEND</h3>
                        <div className="img_container">
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/front_html5.png'} alt='HTML5' />
                                <p className="skill_name">HTML5</p>
                            </div>
                            <div className="img_area">
                                    <img src={process.env.PUBLIC_URL + '/ico/front_css.png'} alt='CSS' />
                                <p className="skill_name">CSS</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/front_js.png'} alt='Javascript' />
                                <p className="skill_name">Javascript</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/front_jQuery.png'} alt='jQuery' />
                                <p className="skill_name">jQuery</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/front_react.png'} alt='React' />
                                <p className="skill_name">React</p>
                            </div>
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + '/ico/front_bootstrap.png'} alt='Bootstrap' />
                                <p className="skill_name">Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills