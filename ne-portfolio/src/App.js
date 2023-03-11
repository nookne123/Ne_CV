import React from 'react';
import './App.css'

function App() {
    return (
        <>
            {/* Navbar */}
            <nav className=''>
                <div className='logo'>
                    <h1 >Ne</h1>
                    <h2 >Portfolio</h2>
                </div>
                <div className='menu-list'>
                    <a href='#aboutme' >About me</a>
                    <a href='#skills' >Services & Skills</a>
                    <a href='#activities'>Activities & Works</a>
                    <a href='#footer'>Education</a>
                    <a href='#footer'>Contact</a>
                </div>
            </nav>

            {/* About-me */}
            <section id='aboutme'>
                <div className='about-me'>
                    <div className='field-img-aboutme'>
                        <img src="img_me.png" alt="" width="420" height="420" />
                    </div>
                    <div className='field-text-aboutme'>
                        <div>
                            <h1>
                                Surawut Tiankam
                            </h1>
                            <h2>
                                Web Developer / Quality Assurance
                            </h2>
                            <p>
                                My nickname is Ne, and I am currently a fourth-year undergraduate student studying Computer
                                Engineering at Naresuan University. I started seriously studying and writing code since my
                                third year of undergraduate studies until now. There are still many things that I want to learn
                                and I am ready to learn and gain experience.
                            </p>
                            <div>
                                <a href='https://www.instagram.com/surawut_tiankam/'>
                                    <img src='icon_aboutme1.svg' alt='ig' />
                                </a>
                                <a href='https://www.facebook.com/nongnay.tiencom'>
                                    <img src='icon_aboutme2.svg' alt='fb' />
                                </a>
                                <a href='https://github.com/nookne123'>
                                    <img src='icon_aboutme3.svg' alt='git' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Skills */}
            <section id='skills'>
                <div className='field-skills'>
                    <div className='field-text-skills'>
                        <div>
                            <h3>
                                Services & Skills
                            </h3>
                            <p>
                                I have skills in multiple areas, and these are the skills that I would like to present to
                                you to let you know what I can do and at what level I can do it, in order to assist in your
                                decision-making process regarding hiring me.
                            </p>
                        </div>
                    </div>

                    {/* Services & Skills cards */}
                    <div className='field-cards'>
                        <div className='card'>
                            <div>
                                <img src="img_web_dev_skill.png" alt="" width="100" height="100" />
                                <h2>Web Developer</h2>
                                <br />
                                <span>
                                    I like to make websites look beautiful and functional to
                                    meet the needs of users.
                                </span>
                                <p>
                                    React.js<br />JavaScript<br />Python<br />HTML5<br />
                                    MySQL<br />Axios API<br />Node.js<br />CSS
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src="img_tools_skill.png" alt="" width="100" height="100" />
                                <h2>Tools</h2>
                                <br />
                                <span>
                                    tools are also important in terms of communication and working with others
                                </span>
                                <p>
                                    Git<br />LinuxOS<br />Trello<br />Jira<br />
                                    VS Code<br />Figma<br />Postman<br />Jmeter
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src="img_social_skill.png" alt="" width="100" height="100" />
                                <h2>Social Skills</h2>
                                <br />
                                <span>
                                    Social skills are quite important in teamwork.  And I'm quite confident about my social skills.
                                </span>
                                <p>
                                    Be Courteous<br />Polite<br />Good at talking<br />
                                    Humble<br />Sociable<br />Like to play sports<br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities And Works */}
            <section id='activities'>
                <div className='field-text-activities'>
                    <div>
                        <h3>
                            Activities & Works
                        </h3>
                        <p>

                        </p>
                    </div>
                </div>

                {/* Slide-Show */}
                <div className='field-slide'>
                    <div className='wrapper'>
                        <div className='content'>
                            <img src='img_seniorproject.png' alt='' />
                            <div className='content-text'>
                                <h1>Senior Project</h1>
                                <p>
                                    I collaborated with the Department of Medical Science for my project
                                    and was assigned as a front-end developer to develop the website, which
                                    gave me the opportunity to work alongside senior colleagues in the IT field.
                                    <br /><br />
                                    The skills acquired
                                    <br /><br />
                                    ▪ JavaScript  ▪ React.js  ▪ HTML5  ▪ Tailwind CSS <br />
                                    ▪ Git/GitLab  ▪ Postman   ▪ Figma  ▪ Axios API
                                </p>
                            </div>
                        </div>
                        <div className='content'>
                            <img src='img_internship.png' alt='' />
                            <div className='content-text'>
                                <h1>Internship</h1>
                                <p>
                                    I interned at BiggestFan Productions as a Front-End and Tester. I worked on
                                    cryptocurrency and website development, as well as testing various systems of the
                                    website.
                                    <br /><br />
                                    The skills acquired
                                    <br /><br />
                                    ▪ JavaScript ▪ Elm language ▪ React.js ▪ HTML5<br />
                                    ▪ Git/Github ▪ Tailwind CSS ▪ Postman
                                </p>
                            </div>
                        </div>
                        <div className='content'>
                            <img src='img_gofun.png' alt='' />
                            <div className='content-text'>
                                <h1>Go Fundamentals</h1>
                                <p>
                                    I had the opportunity to attend a training on basic Go language, and gained knowledge
                                    from this training. It was a very beneficial activity.
                                    <br /><br />
                                    The skills acquired
                                    <br /><br />
                                    ▪ Go language ▪ Postman <br />
                                    ▪ Restful API ▪ VsCode
                                </p>
                            </div>
                        </div>
                        <div className='content'>
                            <img src='img_testingcamp.png' alt='' />
                            <div className='content-text'>
                                <h1>Software testing methodology</h1>
                                <p>
                                    It was a training session about testing where I learned about the tools that testers use,
                                    and even went on to learn about automating tests with Robot
                                    <br /><br />
                                    The skills acquired
                                    <br /><br />
                                    ▪ Jmeter ▪ Python ▪ Robot
                                </p>
                            </div>
                        </div>
                        <div className='content'>
                            <img src='img_coordinator.png' alt='' />
                            <div className='content-text'>
                                <h1>Coordinator of Badminton Club Naresuan University</h1>
                                <p>
                                    I love playing badminton and enjoy engaging in conversations and exchanging ideas, which is why
                                    I was selected to be the coordinator of the university's badminton club.
                                    <br /><br />
                                    The skills acquired
                                    <br /><br />
                                    ▪ Be Courteous ▪ Polite ▪ Sociable
                                    ▪ Good at talking ▪ Humble
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='footer'>
                <div className='field-footer'>
                    {/* Education */}
                    <div className='field-education'>
                        <h3>Education</h3>
                        <div>
                            <img src='icon_e1.svg' alt='' />
                            <p>Naresuan University | 2019 - 2023</p>
                        </div>
                        <div>
                            <img src='icon_e2.svg' alt='' />
                            <p>Bachelor of Engineering</p>
                        </div>
                        <div>
                            <img src='icon_e3.svg' alt='' />
                            <p>Department of Electrical & Computer Engineering </p>
                        </div>
                    </div>
                    {/* contact */}
                    <div className='field-contact'>
                        <h3>Contact</h3>
                        <div>
                            <img src='icon_c1.svg' alt='' />
                            <p>Email : surawuttiankam.2001@gmail.com </p>
                        </div>
                        <div>
                            <img src='icon_c2.svg' alt='' />
                            <p>Tel : 091-0278842</p>
                        </div>
                    </div  >
                </div>
            </section>
        </>

    );
}

export default App;