import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function MainContent(){
    return(
        <main className='main-content'>
            <div className='details'>
                <h1 className="name">Laura Smith</h1>
                <p className='job-position'>Frontend Developer</p>
                <p className='website-link'>laurasmith.website</p>
            </div>
            <div className='buttons'>
                <button className="email-btn"><FontAwesomeIcon className='icons mail' icon={faEnvelope}/>Email</button>
                <button className="linkedin-btn"><FontAwesomeIcon className='icons linkedin' icon={faLinkedin}/> LinkedIn</button>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things
                     simple and automating daily tasks. I try to keep up with security and 
                     best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interests">
                <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader.
                         Internet fanatic. Bacon buff. Entrepreneur.
                         Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    );
}

export default MainContent;