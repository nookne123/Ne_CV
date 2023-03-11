import 'bootstrap/dist/css/bootstrap.min.css';
import './App_.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

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
          <p >About me</p>
          <p >Skills</p>
          <p >Activities And Works</p>
          <p >Education</p>
          <p >Contact</p>
        </div>
      </nav>

      {/* About-me */}
      <div className='about-me'>
        <div className='field-img-aboutme'>
          <img src="img_me.png" alt="" width="380" height="380" />
        </div>
        <div className='field-text-aboutme'>
          <h1>
            Surawut Tiankam
          </h1>
          <h2>
            Web Developer/Quality Assurance
          </h2>
          <h3>
            I am a fresh graduate with little experience.<br />
            but I am ready to study and develop myself.
          </h3>
        </div>
      </div>

      {/* Services & Skills */}
      <div className='field-text-skills'>
        <h1>
          Services & Skills
        </h1>
        <h2>
          Right now, my skills might be at a basic level
          But I'm ready to learn and develop myself if you give a chance.
          Here I will talk about tools and what I used to use when I was studying.
        </h2>
      </div>

      {/* Services & Skills cards */}
      <div className='field-cards'>
        <div className='card'>
          <img src="img_web_dev_skill.png" alt="" width="100" height="100" />
          <h1>Web Developer</h1>
          <br /><br />
          <span>
            I like to make websites look beautiful and functional to
            meet the needs of users.<br />
            <br /><br /><br /><br />
            React.js<br />JavaScript<br />Python<br />HTML5<br />
            MySQL<br />Axios API<br />Node.js<br />CSS<br />
          </span>
        </div>
        <div className='card'>
          <img src="img_tools_skill.png" alt="" width="100" height="100" />
          <h1>Tools</h1>
          <br /><br />
          <span>
            tools are also important in terms of communication and working with others<br />
            <br /><br /><br /><br />
            Git<br />LinuxOS<br />Trello<br />Jira<br />
            VS Code<br />Figma<br />Postman<br />Jmeter<br />
          </span>
        </div>
        <div className='card'>
          <img src="img_social_skill.png" alt="" width="100" height="100" />
          <h1>Social Skills</h1>
          <br /><br />
          <span>
            Social skills are quite important in teamwork.  And I'm quite confident about my social skills.<br />
            <br /><br /><br /><br />
            Be Courteous<br />Polite<br />Good at talking<br />
            Humble<br />Sociable<br />Like to play sports<br />
          </span>
        </div>
      </div>

      {/* Activities And Works */}
      <div className='field-text-skills'>
        <h1>
          Activities And Works
        </h1>
        <h2>
          I am a fresh graduate with little experience.
          But I try to do a lot of activities to increase knowledge and experience for myself,
          my grandchildren, whether it's work, social and human relations.
        </h2>
      </div>
      <div className='field-activities'>
        <div className='field-activities-section'>
          <img src="img_seniorproject.png" alt="" />
          <div>
            <div>
              <h1>Senior Project</h1>
              <p>
                I collaborated with the Department of Medical Science for my project and was assigned as a front-end developer to develop the website, which gave me the opportunity to work alongside senior colleagues in the IT field.
                <br /><br /><br />
                The skills acquired
                <br /><br /><br />
                React.js<br />JavaScript<br />HTML5<br />Tailwind CSS<br />
                Git/GitLab<br />Postman<br />Figma<br />Axios API<br />
              </p>
            </div>
          </div>
        </div>
        <div className='field-activities-section'>
          <div>
            <div>
              <h1>Internship</h1>
              <p>
                I interned at BiggestFan Productions as a Front-End and Tester. I worked on cryptocurrency and website development, as well as testing various systems of the website.
                <br /><br /><br />
                The skills acquired
                <br /><br /><br />
                React.js<br />JavaScript<br />Elm language<br />HTML5<br />
                Tailwind CSS<br />Git/Github<br />Postman<br />
              </p>
            </div>
          </div>
          <img src="img_internship.png" alt="" />
        </div>
        <div className='field-activities-section'>
          <img src="img_gofun.png" alt="" />
          <div>
            <div>
              <h1>Go Fundamentals</h1>
              <p>
                I had the opportunity to attend a training on basic Go language, and gained knowledge from this training. It was a very beneficial activity.
                <br /><br /><br />
                The skills acquired<br /><br /><br />
                Go language<br />Restful API<br />VsCode<br />Postman<br />
              </p>
            </div>
          </div>
        </div>
        <div className='field-activities-section'>
          <div>
            <div>
              <h1>Software testing methodology</h1>
              <p>
                It was a training session about testing where I learned about the tools that testers use, and even went on to learn about automating tests with Robot
                <br /><br /><br />
                The skills acquired<br /><br /><br />
                Jmeter<br />Python<br />Robot<br />
              </p>
            </div>
          </div>
          <img src="img_testingcamp.png" alt="" />
        </div>
        <div className='field-activities-section'>
          <img src="img_coordinator.png" alt="" />
          <div>
            <div>
              <h1>Coordinator of Badminton Club Naresuan University</h1>
              <p>
                I love playing badminton and enjoy engaging in conversations and exchanging ideas, which is why I was selected to be the coordinator of the university's badminton club.
                <br /><br /><br />
                The skills acquired<br /><br /><br />
                Be Courteous<br />Polite<br />Good at talking<br />Humble<br />Sociable<br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className='field-education'>
        <h1>Education</h1>
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
      <div className='field-contact'>
        <h1>Contact</h1>
        <div>
          <img src='icon_c1.svg' alt='' />
          <p>Email : surawuttiankam.2001@gmail.com </p>
        </div>
        <div>
          <img src='icon_c2.svg' alt='' />
          <p>Tel : 091-0278842</p>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
